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
    <section id='Contact'>
                <footer className="futura-footer">
      <div className="footer-container">
        <div className="footer-section brand-section">
          <div className="brand-logo">
            <div className="robot-head-mini">
              <div className="robot-eyes-mini">
                <div className="robot-eye-mini"></div>
                <div className="robot-eye-mini"></div>
              </div>
            </div>
          </div>
          <h3 className="brand-name">FUTURA ROBOTICS</h3>
          <p className="brand-tagline">Reshaping the future of AI interaction</p>
          <div className="social-links">
            <a href="#" className="social-link">
              <div className="social-icon"></div>
            </a>
            <a href="#" className="social-link">
              <div className="social-icon"></div>
            </a>
            <a href="#" className="social-link">
              <div className="social-icon"></div>
            </a>
          </div>
        </div>
        
        <div className="footer-section links-section">
          <h4 className="footer-heading">Products</h4>
          <ul className="footer-links">
            <li><a href="#">Neuron X9</a></li>
            <li><a href="#">Quantum Series</a></li>
            <li><a href="#">Cognitive Systems</a></li>
            <li><a href="#">AI Assistants</a></li>
          </ul>
        </div>
        
        <div className="footer-section links-section">
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Research</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section subscribe-section">
          <h4 className="footer-heading">Stay Updated</h4>
          <p>Subscribe to our newsletter for the latest announcements.</p>
          
          <form onSubmit={handleSubscribe} className="subscribe-form">
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="subscribe-input"
                required
              />
              <button type="submit" className="subscribe-button">
                Subscribe
              </button>
            </div>
            {isSubscribed && (
              <div className="subscription-message">Thank you for subscribing!</div>
            )}
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="circuit-lines footer-circuits">
          <div className="line footer-line-1"></div>
          <div className="line footer-line-2"></div>
          <div className="pulse footer-pulse"></div>
        </div>
        <div className="footer-bottom-content">
          <p className="copyright">© {new Date().getFullYear()} Futura Robotics. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
    </section>

  );
};

export default FuturaRoboticsFooter;