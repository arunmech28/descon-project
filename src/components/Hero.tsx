'use client';

import { motion } from 'framer-motion';

import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import styles from '@/styles';


import React from 'react'

const Hero = () => {
    return (
        <section className='relative top-32 w-full h-[80svh]'>
            <motion.div className='flex flex-col lg:flex-row md:flex-row' initial="hidden" whileInView="show"
                viewport={{ once: true, amount: 0.25 }}>
                <div className='flex-1 flex flex-col items-start justify-center p-5 lg:pl-10 md:pl-10'>
                    <motion.h1 variants={textVariant(1.1)} className='font-bold text-[3rem]'>
                        WE ARE ARCHITECTS & PROJECT MANGEMENT CONSULTANCY
                    </motion.h1>
                    {/* <motion.h1 variants={textVariant(1.1)} className='font-bold text-[1.5rem] pl-10'>
                        &
                    </motion.h1>
                    <motion.h1 variants={textVariant(1.1)} className='font-bold text-[2rem]'>
                        PROJECT MANGEMENT CONSULTANCY SERVICE
                    </motion.h1> */}
                    <motion.h1 variants={textVariant(1.1)} className='font-bold text-gray-500 text-[1.5rem]'>
                        Architecture &  Project management consultancy services are vital for high impact, time sensitive projects—those most critical to your Project’s success.
                        {/* We assist organizations in doing the right projects—those with strategic alignment that make the best use of your time, talent, and budget—and doing them right. */}
                    </motion.h1>
                </div>
                <div className='flex-1'>
                    <motion.div
                        variants={slideIn('right', 'tween', 0.2, 1)}
                        className="relative w-full md:-mt-[20px] -mt-[12px]"
                    >
                        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

                        <img
                            src="/assets/hero.png"
                            alt="hero_cover"
                        // className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
                        />

                    </motion.div>
                </div>

            </motion.div>

        </section>
    )
}

export default Hero