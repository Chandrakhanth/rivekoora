
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center ml-[2px]">
    
      <img
        src="/images/mainlogo.png" 
        alt="RIVE KOORA Logo"
        width={75} 
        height={75} 
        className="object-contain" 
      />
    </Link>
  );
}
