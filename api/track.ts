import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "@vercel/postgres";
import crypto from "crypto";

/**
 * Stores an anonymous visit with coarse geolocation.
 * Requires the "Vercel Postgres" integration and `npm i @vercel/postgres`.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });

  try {
    // IP + UA
    const ip =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0].trim() ||
      (req.headers["x-real-ip"] as string) ||
      req.socket.remoteAddress ||
      "";
    const ua = (req.headers["user-agent"] as string) || "";

    // Anonymous client payload
    const { anonId, path, referrer, tz } = (req.body || {}) as {
      anonId?: string; path?: string; referrer?: string | null; tz?: string | null;
    };

    // Vercel geolocation headers (may be missing for some requests)
    const country = (req.headers["x-vercel-ip-country"] as string) || null;
    const region = (req.headers["x-vercel-ip-country-region"] as string) || null;
    const city = (req.headers["x-vercel-ip-city"] as string) || null;
    const postal = (req.headers["x-vercel-ip-postal-code"] as string) || null; // newer header
    const latitude = (req.headers["x-vercel-ip-latitude"] as string) || null;
    const longitude = (req.headers["x-vercel-ip-longitude"] as string) || null;

    // Hash IP so you are not storing raw IP (PII)
    const ipHash = ip
      ? crypto.createHash("sha256").update(ip + (process.env.HASH_SALT || "")).digest("hex")
      : null;

    // Create table once
    await sql/* sql */`
      CREATE TABLE IF NOT EXISTS visits (
        id BIGSERIAL PRIMARY KEY,
        ts TIMESTAMPTZ NOT NULL DEFAULT now(),
        anon_id TEXT,
        ip_hash TEXT,
        ua TEXT,
        path TEXT,
        referrer TEXT,
        tz TEXT,
        country TEXT,
        region TEXT,
        city TEXT,
        postal TEXT,
        latitude TEXT,
        longitude TEXT
      );
    `;

    // Insert row
    await sql/* sql */`
      INSERT INTO visits (anon_id, ip_hash, ua, path, referrer, tz, country, region, city, postal, latitude, longitude)
      VALUES (${anonId || null}, ${ipHash}, ${ua}, ${path || "/"}, ${referrer || null}, ${tz || null},
              ${country}, ${region}, ${city}, ${postal}, ${latitude}, ${longitude});
    `;

    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false });
  }
}
