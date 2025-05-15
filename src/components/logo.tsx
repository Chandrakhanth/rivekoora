import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      {/* Ensure your logo.png is in the public folder */}
      <img
        src="/images/Logo.png/"
        alt="RIVE KOORA Logo"
        width={75} 
        height={75} 
        className="object-contain" 
      />
    </Link>
  );
}
