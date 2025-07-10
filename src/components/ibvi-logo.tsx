import Image from 'next/image';
import { cn } from '@/lib/utils';

type IbviLogoProps = {
  className?: string;
};

export function IbviLogo({ className }: IbviLogoProps) {
  return (
    <div className={cn('relative w-32 h-12', className)}>
      <Image
        src="/assets/logo/png/ibvi-logo-primary.png"
        alt="IBVI Logo"
        fill
        priority
        className="object-contain block dark:hidden"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <Image
        src="/assets/logo/png/ibvi-logo-dark.png"
        alt="IBVI Logo"
        fill
        priority
        className="object-contain hidden dark:block"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
