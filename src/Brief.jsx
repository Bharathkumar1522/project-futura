import { motion } from 'framer-motion';
import FuturaRoboticsCard from "./FuturaRoboticsCard";

const Brief = () => {
    return (
        <section id="About">
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="p-5 md:p-20"
            >
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    className="font-aerospace text-3xl text-center md:text-5xl"
                >
                    Why futura is better
                </motion.h1>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                    className="flex flex-col items-center md:flex-row md:justify-evenly flex-wrap mt-10 md:mt-20 gap-16 md:gap-8"
                >
                    <FuturaRoboticsCard />    
                    <FuturaRoboticsCard />
                    <FuturaRoboticsCard />
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Brief;