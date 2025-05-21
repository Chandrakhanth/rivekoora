
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" >
    
    <img
  src="/images/mainlogo.png" 
  alt="RIVE KOORA Logo"
  width={150} 
  height={75} 
  style={{
    marginLeft: '-2rem',
    marginTop: '2rem',   
    marginBottom: '10px' 
  }}
  className="object-contain"
/>
    </Link>
  );
}
