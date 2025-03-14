import { useRef, useEffect } from 'react';

const VideoSection = ({ videoSrc }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        // Ensure video plays automatically when loaded
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log('Auto-play was prevented. User interaction required.', error);
            });
        }
    }, [videoSrc]);

    return (
        <section id="Demo" className="w-full py-20 px-4 flex justify-center items-center font-['Orbitron'] bg-gradient-to-b from-white to-[#f0f0f0] relative">
            {/* Background gradient effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-1/2 h-1/2 top-[30%] left-[20%] bg-[#dcdcdc] opacity-50 rounded-full blur-xl"></div>
                <div className="absolute w-1/2 h-1/2 top-[70%] left-[80%] bg-[#dcdcdc] opacity-50 rounded-full blur-xl"></div>
            </div>

            <div className="relative w-full max-w-[800px] perspective-[1000px]">
                {/* Video border with optimized animation */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#444] to-black bg-[length:300%_300%] rounded-[24px] blur-[1px] shadow-xl"></div>
                
                <div className="relative bg-gradient-to-tr from-white to-[#f0f0f0] rounded-[22px] p-6 md:p-8 flex flex-col overflow-hidden z-10 m-[3px]">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider mb-8 text-black text-center relative">
                        NEURON X9 IN ACTION
                        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-black to-transparent"></span>
                    </h2>
                    
                    <div className="relative w-full pt-[56.25%] rounded-xl mb-5 overflow-hidden bg-gradient-to-tr from-[#f8f8f8] to-[#e0e0e0] shadow-lg">
                        {/* Optimized scanner line */}
                        <div className="absolute left-0 w-full h-0.5 bg-white/50 z-10 animate-[scanLine_3s_linear_infinite]"></div>
                        
                        {/* Corner brackets */}
                        <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-black rounded-tl opacity-70 z-10"></div>
                        <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-black rounded-tr opacity-70 z-10"></div>
                        <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-black rounded-bl opacity-70 z-10"></div>
                        <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-black rounded-br opacity-70 z-10"></div>
                        
                        {/* Video player with loading optimization */}
                        <video 
                            ref={videoRef}
                            className="absolute inset-0 w-full h-full object-cover z-[2]"
                            src={videoSrc || "https://res.cloudinary.com/dyecmgvcy/video/upload/q_auto:eco/v1741923808/140521-775376205_kdid88.webm"}
                            loop
                            muted
                            playsInline
                            preload="metadata"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    
                    <p className="text-sm md:text-base leading-relaxed text-gray-700 text-center max-w-[700px] mx-auto">
                        Watch the Neuron X9 demonstrate its advanced capabilities in real-time environment simulations.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;