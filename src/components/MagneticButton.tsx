import { forwardRef } from 'react';
import { Button } from '@/components/ui/button';
import { useMagneticEffect } from '@/hooks/useMagneticEffect';
import { cn } from '@/lib/utils';

interface MagneticButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
  magneticStrength?: number;
}

export const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ className, magneticStrength = 0.3, children, ...props }, ref) => {
    const magneticRef = useMagneticEffect(magneticStrength);

    return (
      <Button
        ref={(node) => {
          if (ref) {
            if (typeof ref === 'function') {
              ref(node);
            } else {
              ref.current = node;
            }
          }
          magneticRef.current = node;
        }}
        className={cn(
          'transition-transform duration-300 ease-out hover:animate-magnetic',
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

MagneticButton.displayName = 'MagneticButton';