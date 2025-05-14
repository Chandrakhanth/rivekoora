import { Sprout } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 text-2xl font-semibold text-primary hover:text-primary/90 transition-colors">
      <Sprout className="h-8 w-8" />
      <span>AromaOz</span>
    </Link>
  );
}
