import { Container } from '@/components/container';
import { Sprout } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <Container className="py-8 text-center">
        <div className="flex justify-center items-center mb-4">
          <p className="text-sm text-muted-foreground">
            RIVE KOORA &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <ul className="flex justify-center items-center space-x-4 mb-4">
          {/* LinkedIn */}
          <li className="relative group">
            <a
              href="https://www.linkedin.com/company/rive-koora/"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#0274b3] hover:text-white transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#0274b3] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 z-0" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height ="20"
                fill="currentColor"
                className="z-10"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 
                  0 16 .513 16 1.146v13.708c0 .633-.526 
                  1.146-1.175 1.146H1.175C.526 16 0 
                  15.487 0 14.854zm4.943 
                  12.248V6.169H2.542v7.225zm-1.2-8.212c.837 
                  0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 
                  3.226 2.4 3.934c0 .694.521 1.248 
                  1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 
                  1.232-.878.869 0 1.216.662 
                  1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 
                  0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 
                  0 7.225 0 7.225z" />
              </svg>
            </a>
          </li>

          {/* Facebook */}
          <li className="relative group">
            <a
              href="https://www.facebook.com/share/179A7pTu8c/?mibextid=wwXIfr"
              aria-label="Facebook"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#1877f2] hover:text-white transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#1877f2] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 z-0" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height ="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="z-10"
              >
                <path d="M22.675 0H1.325C.593 
                  0 0 .593 0 1.326v21.348C0 
                  23.407.593 24 1.325 
                  24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 
                  1.893-4.788 4.659-4.788 1.325 
                  0 2.463.099 2.795.143v3.24h-1.917c-1.504 
                  0-1.796.715-1.796 1.763v2.313h3.587l-.467 
                  3.696h-3.12V24h6.116C23.407 
                  24 24 23.407 24 22.674V1.326C24 
                  .593 23.407 0 22.675 0z" />
              </svg>
            </a>
          </li>

          {/* Instagram */}
          <li className="relative group">
            <a
              href="https://www.instagram.com/rive_koora?igsh=NXk5b2U3dXRnNmls&utm_source=qr"
              aria-label="Instagram"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-pink-500 hover:text-white transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 z-0" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height ="20"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="z-10"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 
                  2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 
                  .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 
                  5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 
                  1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 
                  1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 
                  5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 
                  1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 
                  10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 
                  3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 
                  13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 
                  7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 
                  1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 
                  1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 
                  3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 
                  1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 
                  1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 
                  1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 
                  1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 
                  1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 
                  1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
          </li>
        </ul>

        <p className="text-xs text-muted-foreground/80">
          Crafted with ❤️ Australia.
        </p>
      </Container>
    </footer>
  );
}
