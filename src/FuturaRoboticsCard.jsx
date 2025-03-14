import { useState, useRef, useEffect } from 'react';

const FuturaRoboticsCard = () => {
    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => {
        window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const handleMouseMove = (e) => {
        if (!containerRef.current || !cardRef.current || isMobile) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const rotateY = x * 0.02;
        const rotateX = -y * 0.02;
        
        // Use requestAnimationFrame for smoother animation
        requestAnimationFrame(() => {
        cardRef.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`;
        });
    };

    const handleMouseEnter = () => {
        if (!cardRef.current || isMobile) return;
        setIsHovered(true);
        cardRef.current.style.transition = 'transform 0.3s ease';
        cardRef.current.style.transform = 'scale(1.05)';
    };

    const handleMouseLeave = () => {
        if (!cardRef.current || isMobile) return;
        setIsHovered(false);
        cardRef.current.style.transition = 'transform 0.5s ease';
        cardRef.current.style.transform = 'rotateY(0) rotateX(0) scale(1)';
    };

    return (
        <div 
        className="relative w-full max-w-md mx-auto perspective-1000"
        ref={containerRef}
        onMouseMove={isMobile ? undefined : handleMouseMove}
        onMouseEnter={isMobile ? undefined : handleMouseEnter}
        onMouseLeave={isMobile ? undefined : handleMouseLeave}
        style={{ perspective: '1000px' }}
        >
        <div 
            ref={cardRef}
            className="relative w-full rounded-xl shadow-xl overflow-hidden transition-all duration-300 transform-gpu"
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Card Border with Glow Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 animate-borderGlow">
            {/* Inner border glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-blue-400 to-purple-500 opacity-20"></div>
            </div>
            
            {/* Card Content */}
            <div className="relative z-10 p-6 m-0.5 bg-gradient-to-br from-white to-gray-100 rounded-xl">
            {/* Circuit Lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 right-0 h-px bg-black opacity-5"></div>
                <div className="absolute top-2/4 left-0 right-0 h-px bg-black opacity-5"></div>
                <div className="absolute top-3/4 left-0 right-0 h-px bg-black opacity-5"></div>
                <div className="absolute bottom-10 left-0 right-0 h-px bg-black opacity-5"></div>
                <div className="absolute top-0 bottom-0 left-1/4 w-px bg-black opacity-5"></div>
                <div className="absolute top-0 bottom-0 right-1/4 w-px bg-black opacity-5"></div>
                
                {/* Pulse Effects */}
                <div className="absolute w-1.5 h-1.5 rounded-full bg-black opacity-70 top-1/4 left-1/4 animate-pulse"></div>
                <div className="absolute w-1.5 h-1.5 rounded-full bg-black opacity-70 top-2/4 right-1/4 animate-pulse delay-700"></div>
                <div className="absolute w-1.5 h-1.5 rounded-full bg-black opacity-70 bottom-1/4 left-1/3 animate-pulse delay-1400"></div>
            </div>
            
            {/* Label */}
            <div className="inline-block px-2 py-1 text-xs font-medium text-black bg-gray-200 rounded mb-2 uppercase tracking-widest relative">
                Next Gen
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-black to-transparent"></div>
            </div>
            
            {/* Title */}
            <h2 className="text-2xl font-bold text-black mb-4 uppercase tracking-wider font-orbitron">Neuron X9</h2>
            
            {/* Robot Image */}
            <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32">
                {/* Robot Head */}
                <div className="absolute w-20 h-24 bg-gradient-to-b from-black to-gray-800 rounded-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {/* Robot Eyes */}
                    <div className="absolute top-1/3 left-0 right-0 flex justify-center space-x-4">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-700"></div>
                    </div>
                    
                    {/* Robot Ears */}
                    <div className="absolute top-1/3 left-0 w-2 h-6 bg-black rounded-l"></div>
                    <div className="absolute top-1/3 right-0 w-2 h-6 bg-black rounded-r"></div>
                </div>
                </div>
            </div>
            
            {/* Description */}
            <p className="text-gray-700 text-sm mb-6 leading-relaxed font-orbitron">
                Meet our most advanced AI assistant, equipped with quantum learning capabilities and adaptive neural networks. The Neuron X9 redefines how robots interact with humans.
            </p>
            
            {/* Button */}
            <button className="w-full py-2 px-4 bg-black text-white font-medium rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg active:scale-95 uppercase tracking-wider font-orbitron text-sm relative overflow-hidden">
                <span className="relative z-10">Explore Features</span>
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full transform -translate-x-full animate-buttonShine bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
                </div>
            </button>
            </div>
        </div>

        {/* Add custom styles for animations that are difficult to achieve with standard Tailwind classes */}
        <style jsx>{`
            @keyframes borderGlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
            }
            
            @keyframes buttonShine {
            0% { transform: translateX(-100%) rotate(45deg); }
            100% { transform: translateX(100%) rotate(45deg); }
            }
            
            .animate-borderGlow {
            background-size: 300% 300%;
            animation: borderGlow 5s ease infinite;
            }
            
            .animate-buttonShine {
            animation: buttonShine 3s infinite;
            }
            
            .font-orbitron {
            font-family: 'Orbitron', sans-serif;
            }
            
            .perspective-1000 {
            perspective: 1000px;
            }
            
            .delay-700 {
            animation-delay: 0.7s;
            }
            
            .delay-1400 {
            animation-delay: 1.4s;
            }
        `}</style>
        </div>
    );
};

export default FuturaRoboticsCard;