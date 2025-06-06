
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" >
    
    <img
  src="public/images/logo-1.png" 
  alt="Logo"
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
