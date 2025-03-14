import { motion } from 'framer-motion';
import FuturaRoboticsCard from "./FuturaRoboticsCard";

const Brief = () => {
    return (
        <section id="About" className="py-10 md:py-20 px-5 md:px-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-center"
            >
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    className="font-aerospace text-3xl md:text-5xl"
                >
                    Why futura is better
                </motion.h1>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                className="flex flex-col md:flex-row justify-evenly items-center md:gap-8 gap-16 mt-10 md:mt-20 flex-wrap"
            >
                <FuturaRoboticsCard />    
                <FuturaRoboticsCard />
                <FuturaRoboticsCard />
            </motion.div>
        </section>
    );
}

export default Brief;
