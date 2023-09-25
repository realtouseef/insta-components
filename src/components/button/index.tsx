import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../utils';

const buttonVariants = cva(
  'active:scale-95 rounded-[8px] px-[16px] py-[7px] flex items-center justify-center text-text',
  {
    variants: {
      variant: {
        primary: 'bg-primary hover:bg-primary_hover',
        secondary: 'bg-secondary hover:bg-secondary_hover',
        link: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  ...props
}) => {
  return (
    <button {...props} className={cn(buttonVariants({ className, variant }))} />
  );
};
