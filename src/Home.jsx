import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeInOut' } }
};

const Home = () => {
    return (
        <section id="Home"> 
            <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="flex flex-col xl:flex-row md:px-25 py-25 items-center justify-between mt-10 mb-15 xl:mt-0 xl:mb-0"
            >
                <motion.div variants={fadeIn} className="text-container">
                    <h1 className="font-aerospace text-3xl w-auto text-center md:text-7xl md:w-3xl md:text-left">
                        The future of robotics
                    </h1> 
                    <motion.div variants={fadeIn} className="hero-buttons mt-20">
                        <motion.button 
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="primary-button"
                        >
                            Explore Products
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="secondary-button"
                        >
                            Watch Demo
                        </motion.button>
                    </motion.div>
                </motion.div>
                
                <motion.div 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                    className="spline-container"
                >
                    <spline-viewer className="spline-element" url="https://prod.spline.design/bmZ0blO2Vtsu8XeS/scene.splinecode"></spline-viewer>
                </motion.div>                  
            </motion.div>
        </section>
    );
}

export default Home;