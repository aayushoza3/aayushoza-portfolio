import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "@vercel/postgres";

/**
 * Quick JSON dashboard.
 * Open: /api/visitors?key=YOUR_ADMIN_KEY
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.query.key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ ok: false, error: "unauthorized" });
  }

  const total = await sql`SELECT COUNT(*)::int AS n FROM visits;`;
  const uniques = await sql`
    SELECT COUNT(DISTINCT COALESCE(NULLIF(anon_id, ''), ip_hash))::int AS n FROM visits;
  `;
  const byCountry = await sql`
    SELECT COALESCE(country, '??') AS country, COUNT(*)::int AS n
    FROM visits GROUP BY country ORDER BY n DESC LIMIT 20;
  `;
  const recent = await sql`
    SELECT ts, path, referrer, country, region, city
    FROM visits ORDER BY ts DESC LIMIT 50;
  `;

  res.json({
    ok: true,
    total: total.rows[0]?.n ?? 0,
    unique_visitors: uniques.rows[0]?.n ?? 0,
    by_country: byCountry.rows,
    recent: recent.rows
  });
}
