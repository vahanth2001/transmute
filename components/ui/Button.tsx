import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type ButtonProps = {
  href?: string;
  children?: React.ReactNode;
  variant?: 'gold' | 'outline';
  className?: string;
};

export default function Button({
  href = '#',
  children,
  variant = 'gold',
  className = '',
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`btn ${
        variant === 'gold' ? 'btn-gold' : 'btn-outline'
      } ${className}`.trim()}
    >
      {children}
      {children && <ArrowRight size={16} aria-hidden="true" />}
    </Link>
  );
}