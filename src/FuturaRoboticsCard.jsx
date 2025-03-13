import { useState, useRef, useEffect } from 'react';


const FuturaRoboticsCard = () => {
    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!containerRef.current || !cardRef.current) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const rotateY = x * 0.02;
        const rotateX = -y * 0.02;
        
        cardRef.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`;
    };

    const handleMouseEnter = () => {
        if (!cardRef.current) return;
        setIsHovered(true);
        cardRef.current.style.transition = 'transform 0.3s ease';
        cardRef.current.style.transform = 'scale(1.05)';
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        setIsHovered(false);
        cardRef.current.style.transition = 'transform 0.5s ease';
        cardRef.current.style.transform = 'rotateY(0) rotateX(0) scale(1)';
    };

    return (
        <div 
        className="card-container" 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        <div className="card" ref={cardRef}>
            <div className="card-border"></div>
            <div className="card-content">
            <div className="circuit-lines">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
                <div className="line line-4"></div>
                <div className="line-vertical-1"></div>
                <div className="line-vertical-2"></div>
                <div className="pulse"></div>
                <div className="pulse pulse-2"></div>
                <div className="pulse pulse-3"></div>
            </div>
            <div className="card-label">Next Gen</div>
            <h2 className="card-title">Neuron X9</h2>
            <div className="card-image">
                <div className="robot-illustration">
                <div className="robot-head">
                    <div className="robot-eyes">
                    <div className="robot-eye"></div>
                    <div className="robot-eye"></div>
                    </div>
                    <div className="robot-ear left"></div>
                    <div className="robot-ear right"></div>
                </div>
                </div>
            </div>
            <div className="card-description">
                Meet our most advanced AI assistant, equipped with quantum learning capabilities and adaptive neural networks. The Neuron X9 redefines how robots interact with humans.
            </div>
            <button className="card-button">Explore Features</button>
            </div>
        </div>
        </div>
    );
};

export default FuturaRoboticsCard;