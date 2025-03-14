import { useState } from 'react';

const FuturaRoboticsFooter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setIsSubscribed(true);
      setEmail('');
      // In a real application, you would send this to your backend
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section id="Contact">
      <footer className="relative overflow-hidden bg-gradient-to-b from-white to-gray-100 pt-16 pb-5 mt-12 border-t border-gray-100">
        {/* Circuit decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.07] pointer-events-none">
          <div className="absolute top-5 left-[10%] w-[80%] h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
          <div className="absolute bottom-8 right-[5%] w-[90%] h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
          <div className="absolute bottom-7 right-[10%] w-1.5 h-1.5 bg-black rounded-full shadow-lg animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
          {/* Brand section */}
          <div className="flex flex-col items-start md:items-center md:text-center">
            <div className="mb-4">
              <div className="w-10 h-10 bg-black rounded-md relative">
                <div className="absolute w-full top-[15px] flex justify-evenly">
                  <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-extrabold tracking-wide uppercase m-0 mb-2.5 font-['Orbitron']">Futura Robotics</h3>
            <p className="text-sm text-gray-600 m-0 mb-5">Reshaping the future of AI interaction</p>
            <div className="flex gap-4 md:justify-center">
              {/* Social links with SVG masks */}
              <a href="#" className="block w-9 h-9 rounded-full bg-black flex items-center justify-center transition-transform duration-300 shadow-md hover:translate-y-[-3px] hover:shadow-lg">
                <div className="w-[18px] h-[18px] bg-white mask-facebook"></div>
              </a>
              <a href="#" className="block w-9 h-9 rounded-full bg-black flex items-center justify-center transition-transform duration-300 shadow-md hover:translate-y-[-3px] hover:shadow-lg">
                <div className="w-[18px] h-[18px] bg-white mask-twitter"></div>
              </a>
              <a href="#" className="block w-9 h-9 rounded-full bg-black flex items-center justify-center transition-transform duration-300 shadow-md hover:translate-y-[-3px] hover:shadow-lg">
                <div className="w-[18px] h-[18px] bg-white mask-instagram"></div>
              </a>
            </div>
          </div>
          
          {/* Products links section */}
          <div className="flex flex-col md:items-center md:text-center">
            <h4 className="text-base font-bold uppercase tracking-wide mb-5 inline-block relative font-['Orbitron'] after:content-[''] after:absolute after:bottom-[-6px] after:left-0 md:after:left-1/2 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-black after:to-transparent md:after:-translate-x-1/2">Products</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-2.5">
                <a href="#" className="no-underline text-gray-700 text-sm inline-block relative transition-colors duration-300 hover:text-black after:content-[''] after:absolute after:w-0 after:h-px after:bg-black after:bottom-[-2px] after:left-0 hover:after:w-full after:transition-all after:duration-300 font-['Orbitron']">Neuron X9</a>
              </li>
              <li className="mb-2.5">
                <a href="#" className="no-underline text-gray-700 text-sm inline-block relative transition-colors duration-300 hover:text-black after:content-[''] after:absolute after:w-0 after:h-px after:bg-black after:bottom-[-2px] after:left-0 hover:after:w-full after:transition-all after:duration-300 font-['Orbitron']">Quantum Series</a>
              </li>
              <li className="mb-2.5">
                <a href="#" className="no-underline text-gray-700 text-sm inline-block relative transition-colors duration-300 hover:text-black after:content-[''] after:absolute after:w-0 after:h-px after:bg-black after:bottom-[-2px] after:left-0 hover:after:w-full after:transition-all after:duration-300 font-['Orbitron']">Cognitive Systems</a>
              </li>
              <li className="mb-2.5">
                <a href="#" className="no-underline text-gray-700 text-sm inline-block relative transition-colors duration-300 hover:text-black after:content-[''] after:absolute after:w-0 after:h-px after:bg-black after:bottom-[-2px] after:left-0 hover:after:w-full after:transition-all after:duration-300 font-['Orbitron']">AI Assistants</a>
              </li>
            </ul>
          </div>
          
          {/* Company links section */}
          <div className="flex flex-col md:items-center md:text-center">
            <h4 className="text-base font-bold uppercase tracking-wide mb-5 inline-block relative font-['Orbitron'] after:content-[''] after:absolute after:bottom-[-6px] after:left-0 md:after:left-1/2 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-black after:to-transparent md:after:-translate-x-1/2">Company</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-2.5">
                <a href="#" className="no-underline text-gray-700 text-sm inline-block relative transition-colors duration-300 hover:text-black after:content-[''] after:absolute after:w-0 after:h-px after:bg-black after:bottom-[-2px] after:left-0 hover:after:w-full after:transition-all after:duration-300 font-['Orbitron']">About Us</a>
              </li>
              <li className="mb-2.5">
                <a href="#" className="no-underline text-gray-700 text-sm inline-block relative transition-colors duration-300 hover:text-black after:content-[''] after:absolute after:w-0 after:h-px after:bg-black after:bottom-[-2px] after:left-0 hover:after:w-full after:transition-all after:duration-300 font-['Orbitron']">Careers</a>
              </li>
              <li className="mb-2.5">
                <a href="#" className="no-underline text-gray-700 text-sm inline-block relative transition-colors duration-300 hover:text-black after:content-[''] after:absolute after:w-0 after:h-px after:bg-black after:bottom-[-2px] after:left-0 hover:after:w-full after:transition-all after:duration-300 font-['Orbitron']">Research</a>
              </li>
              <li className="mb-2.5">
                <a href="#" className="no-underline text-gray-700 text-sm inline-block relative transition-colors duration-300 hover:text-black after:content-[''] after:absolute after:w-0 after:h-px after:bg-black after:bottom-[-2px] after:left-0 hover:after:w-full after:transition-all after:duration-300 font-['Orbitron']">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Subscribe section */}
          <div className="flex flex-col md:items-center md:text-center">
            <h4 className="text-base font-bold uppercase tracking-wide mb-5 inline-block relative font-['Orbitron'] after:content-[''] after:absolute after:bottom-[-6px] after:left-0 md:after:left-1/2 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-black after:to-transparent md:after:-translate-x-1/2">Stay Updated</h4>
            <p className="text-sm text-gray-600 mb-5">Subscribe to our newsletter for the latest announcements.</p>
            
            <form onSubmit={handleSubscribe} className="max-w-sm md:mx-auto w-full">
              <div className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-md bg-white">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border-none py-3.5 px-4 font-['Orbitron'] text-sm bg-transparent outline-none text-gray-700 min-w-0"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-black text-white border-none py-3.5 px-5 font-['Orbitron'] text-sm font-semibold uppercase tracking-wide cursor-pointer transition-colors duration-300 relative overflow-hidden hover:bg-gray-800 w-full md:w-auto"
                >
                  <span className="relative z-10">Subscribe</span>
                  <span className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 transform -translate-x-full animate-shimmer"></span>
                </button>
              </div>
              {isSubscribed && (
                <div className="mt-2.5 text-sm text-gray-700 font-medium animate-fadeIn font-['Orbitron']">Thank you for subscribing!</div>
              )}
            </form>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="border-t border-gray-100/30 mt-12 pt-5 relative">
          <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center flex-wrap gap-5 relative z-10">
            <p className="text-sm text-gray-600 m-0 text-center md:text-left">© {new Date().getFullYear()} Futura Robotics. All rights reserved.</p>
            <div className="flex gap-2.5 items-center">
              <a href="#" className="no-underline text-gray-600 text-sm transition-colors duration-300 hover:text-black font-['Orbitron']">Privacy Policy</a>
              <span className="text-gray-400">|</span>
              <a href="#" className="no-underline text-gray-600 text-sm transition-colors duration-300 hover:text-black font-['Orbitron']">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Add some keyframe animations for the component */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translate(-150%, -150%) rotate(45deg); }
          50%, 100% { transform: translate(150%, 150%) rotate(45deg); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* For social media icons */
        .mask-facebook {
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z'/%3E%3C/svg%3E");
          mask-size: contain;
          mask-repeat: no-repeat;
          mask-position: center;
        }
        
        .mask-twitter {
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z'/%3E%3C/svg%3E");
          mask-size: contain;
          mask-repeat: no-repeat;
          mask-position: center;
        }
        
        .mask-instagram {
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z'/%3E%3C/svg%3E");
          mask-size: contain;
          mask-repeat: no-repeat;
          mask-position: center;
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default FuturaRoboticsFooter;