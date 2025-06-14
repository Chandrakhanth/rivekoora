
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" >
    
    <img
  src="images/logo-1.png" 
  alt="RIVE KOORA Logo"
  width={160} 
  height={75} 
  style={{
    marginLeft: '-2rem',
    marginTop: '1rem',   
    marginBottom: '10px' 
  }}
  className="object-contain"
/>
    </Link>
  );
}
