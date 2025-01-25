'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from './CustomTexts';

const About = () => (
    <section className={`${styles.paddings} relative top-32 z-10`}>
        {/* <div className="gradient-02 z-0" /> */}
        <motion.div
            variants={staggerContainer(1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col z-9`}
        >
            <TypingText title="| About Descon" textStyles="text-center" />

            <div className='flex flex-col lg:flex-row md:flex-row justify-center items-center'>

                <motion.p
                    variants={fadeIn('right', 'tween', 0.2, 1)}
                    className="mt-[8px] font-normal text-[1.2rem] text-center text-secondary-white"
                >
                    <span className="font-extrabold text-[1.5rem] text-navmenu">Descon</span> partners with organizations to ensure they&apos;re focused on the projects that truly matter—those that not only align with the company&apos;s long-term strategy but also effectively utilize available resources. By emphasizing strategic alignment, Descon helps clients prioritize initiatives that support their mission and vision, ensuring efforts and investments directly contribute to growth and success. This approach means that organizations avoid wasting time, talent, and budget on projects that lack value or are misaligned with their goals. Additionally, Descon provides support to execute these projects with precision, fostering an environment where they’re “done right”—on time, within budget, and with the highest standards of quality and effectiveness. Through this dual approach of selecting the right projects and delivering them with excellence, Descon empowers organizations to maximize both impact and efficiency.
                </motion.p>

                <motion.img
                    variants={fadeIn('up', 'tween', 0.3, 1)}
                    src="/assets/aboutus.jpeg"
                    alt="arrow down"
                    className='top-32 z-8 w-full lg:w-1/2 md:w-1/2 h-[30rem] lg:p-10 md:p-10'
                />
            </div>
        </motion.div>
    </section>
);

export default About;
