import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      {/* Ensure your logo.png is in the public folder */}
      <Image
        src="/logo.png"
        alt="RIVE KOORA Logo"
        width={150} 
        height={50} 
        priority
        className="object-contain" 
      />
    </Link>
  );
}
