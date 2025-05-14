import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png" // Make sure you have logo.png in your /public folder
        alt="RIVE KOORA Logo"
        width={130} // Adjusted for better display
        height={50}  // Adjusted for better display
        priority
        className="object-contain" // Ensures the logo fits well
      />
    </Link>
  );
}
