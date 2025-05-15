import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      {/* Assuming the logo.png is in the public folder */}
      <Image
        src="/logo.png" // This should point to public/logo.png
        alt="RIVE KOORA Logo"
        width={120} 
        height={40}
        priority
        className="object-contain" // Removed h-auto
        style={{ border: '1px solid red' }} // Temporary border for debugging
      />
    </Link>
  );
}
