import { forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../utils';

const buttonVariants = cva(
  'active:scale-95 text-[14px] rounded-[8px] px-[16px] py-[7px] flex items-center justify-center text-black space-x-1',
  {
    variants: {
      variant: {
        primary: 'bg-primary hover:bg-primary_hover text-white',
        secondary: 'bg-secondary hover:bg-secondary_hover',
        link: 'p-0 text-xs m-0',
        icon: 'bg-secondary hover:bg-secondary_hover px-2 py-2'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ className, variant }))}
        {...props}
      />
    );
  }
);
