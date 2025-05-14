import { Sprout } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Sprout className="h-8 w-8 text-primary" />
      <span className="ml-2 text-xl font-bold text-primary">RIVE KOORA</span>
    </Link>
  );
}
