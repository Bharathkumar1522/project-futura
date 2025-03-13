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
        <section className="video-section" id='Demo'>
        <div className="video-container">
            <div className="video-border"></div>
            <div className="video-content">
            <h2 className="video-title">NEURON X9 IN ACTION</h2>
            <div className="video-frame">
                <div className="scanner-line"></div>
                <div className="corner top-left"></div>
                <div className="corner top-right"></div>
                <div className="corner bottom-left"></div>
                <div className="corner bottom-right"></div>
                
                {/* Video player */}
                <video 
                ref={videoRef}
                className="video-player"
                src={videoSrc || "https://res.cloudinary.com/dyecmgvcy/video/upload/q_auto,vc_auto/v1741884492/140521-775376205_kdid88.webm"} // Default placeholder
                loop
                muted
                playsInline
                >
                Your browser does not support the video tag.
                </video>
            </div>
            <div className="video-description">
                Watch the Neuron X9 demonstrate its advanced capabilities in real-time environment simulations.
            </div>
            </div>
        </div>
        </section>
    );
};

export default VideoSection;