'use client'

import styles from '@/styles'
import { staggerContainer } from '@/utils/motion';


import { motion } from 'framer-motion';
import { TypingText } from './CustomTexts';
import { useState } from 'react';
import ExploreCard from './ExploreCard';


export const ourServices = [
    {
        id: 'world-1',
        imgUrl: '/assets/services/architectural.jpg',
        title: 'Architectural',
    },
    {
        id: 'world-2',
        imgUrl: '/assets/services/interior.jpg',
        title: 'Interior',
    },
    {
        id: 'world-3',
        imgUrl: '/assets/services/landscaping.jpg',
        title: 'Landscaping',
    },
    {
        id: 'world-4',
        imgUrl: '/assets/services/projectbudgeting.jpg',
        title: 'Project Budgeting',
    },
    {
        id: 'world-5',
        imgUrl: '/assets/services/projectscheduling.jpg',
        title: 'Project Scheduling',
    },
];

const Services = () => {
    const [active, setActive] = useState('world-2');
    return (
        <section className={`${styles.paddings} top-32 relative h-[100svh]`} id="explore">
            <motion.div
                variants={staggerContainer(1, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.innerWidth} w-full h-full lg:h-[100svh] md:h-[100svh] mx-auto flex flex-col`}
                // style={{ height: "100svh" }}
            >
                <TypingText title="| Our Services" textStyles="text-center mt-[2rem]" />
                {/* <TitleText
                    title={<>Choose the world you want <br className="md:block hidden" /> to explore</>}
                    textStyles="text-center"
                /> */}
                <div className="flex mt-[2rem] flex-col lg:flex-row md:flex-row sm:flex-col min-h-full gap-5">
                    {ourServices.map((world, index) => (
                        <ExploreCard
                            key={world.id}
                            {...world}
                            index={index}
                            active={active}
                            handleClick={setActive}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Services