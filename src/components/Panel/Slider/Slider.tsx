import styles from './Slider.module.scss';
import slider0 from '../static/slide0.jpg'
import slider1 from '../static/slide1.jpg'
import slider2 from '../static/slide2.jpg'
import {motion, useMotionValue, useMotionValueEvent} from 'framer-motion';
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Link} from "react-router-dom";

const imgs = [
    slider0, slider1, slider2
];

const dataSlides = [
    { title: 'title 0', additional: 'Additional text', description: 'title 0 description', buttonText: 'button 0', link: 'link0' },
    { title: 'title 1', additional: 'Additional text', description: 'title 1 description', buttonText: 'button 1', link: 'link1' },
    { title: 'title 2', additional: 'Additional text', description: 'title 2 description', buttonText: 'button 2', link: 'link2' },
]

const DRAG_BUFFER = 50;
const AUTO_DELAY = 1000;


const Slider = () => {
    const [ imgIndex, setImgIndex] = useState(2);

    return <div className={styles.wrapper}>
        <motion.div
            className={styles.container}
        >
            <motion.div key={imgIndex}
                        style={{
                            backgroundImage: `url(${imgs[imgIndex]})`,
                            backgroundSize: "cover",
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'

                        }}
                        className={styles.img}
                        initial={{ backgroundPositionX: 0, backgroundPositionY: 0 }}
                        animate={{ backgroundPositionX: ['0%', '100%', '0%'], backgroundPositionY: ['0%', '100%', '0%'] }} // Изначально, в конец и обратно
                        transition={{
                            repeat: Infinity,
                            duration: 100,
                            ease: "linear",
                            repeatType: "mirror"  // Плавное зеркальное отражение для обратного движения
                        }}
            >
                <div className={styles.text}>
                    <p>{dataSlides[imgIndex].additional}</p>
                    <h1>{dataSlides[imgIndex].title}</h1>
                    <p>{dataSlides[imgIndex].title}</p>
                    <Link to={dataSlides[imgIndex].link}>{dataSlides[imgIndex].buttonText}</Link>
                </div>
            </motion.div>
        </motion.div>
    </div>
}


// const Slider = () => {
//     const [ dragging, setDragging ] = useState(false);
//     const [ imgIndex, setImgIndex] = useState(0);
//
//     const dragX = useMotionValue(0);
//
//     useEffect(() => {
//         const intervalRef = setInterval(() => {}, AUTO_DELAY);
//         return () => clearInterval(intervalRef);
//     }, []);
//
//     const onDragStart = () => {
//         setDragging(true);
//     }
//
//     const onDragEnd = () => {
//         setDragging(false);
//
//         const x = dragX.get();
//
//         if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
//             setImgIndex(pv => pv + 1);
//         } else if (x >= -DRAG_BUFFER && imgIndex > 0) {
//             setImgIndex(pv => pv - 1);
//         }
//     }
//
//     return <div className={styles.wrapper}>
//         <motion.div
//             drag={'x'}
//             style={{
//                 x: dragX
//             }}
//             animate={{
//                 translateX: `-${imgIndex}00%`
//             }}
//             dragConstraints={{
//                 left: 0,
//                 right: 0,
//             }}
//             className={styles.container}
//             onDragStart={onDragStart}
//             onDragEnd={onDragEnd}
//             transition={{type: "spring",
//                 mass: 3,
//                 damping: 80,
//                 stiffness: 400}}
//         >
//             <Images imgIndex={imgIndex} />
//         </motion.div>
//         <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
//     </div>
// };

const Images = ({imgIndex}: {imgIndex: number;}) => {
    return (
        <>
            {
                imgs.map((imgSrc, idx) => {
                    return <motion.div key={idx}
                                       style={{backgroundImage: `url(${imgSrc})`,
                                           backgroundSize: "cover",
                                           backgroundPosition: "center center",
                                       }}
                                       className={styles.img}
                        animate={{ opacity: imgIndex === idx ? 1 : .5 }}
                    >
                        <div className={styles.text}>
                            <p>{dataSlides[idx].additional}</p>
                            <h1>{dataSlides[idx].title}</h1>
                            <p>{dataSlides[idx].title}</p>
                            <Link to={dataSlides[idx].link}>{dataSlides[idx].buttonText}</Link>
                        </div>
                    </motion.div>
                })
            }
        </>
    )
};


const Dots = ({imgIndex, setImgIndex}: { imgIndex: number; setImgIndex: Dispatch<SetStateAction<number>>}) => {
    return <div className={styles.dots}>
        {
            imgs.map((imgSrc, idx) => {
                return <button key={idx} onClick={() => setImgIndex(idx)} className={styles.dot} style={{ backgroundColor: idx === imgIndex ? 'white' : 'rgba(255, 255, 255, 0.51)', width: idx === imgIndex ? '40px' : '20px' }}/>
            })
        }
    </div>
}

export default Slider;