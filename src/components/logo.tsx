import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png" // Make sure you have logo.png in your /public folder
        alt="RIVE KOORA Logo"
        width={100} // Adjusted for a more squarish logo
        height={100} // Adjusted for a more squarish logo
        priority
        className="object-contain" // Ensures the logo fits well
      />
    </Link>
  );
}
