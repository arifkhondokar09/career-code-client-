import { motion } from "motion/react"
import team1 from '../../assets/images/team1.jpg'
import team2 from '../../assets/images/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[70vh] px-4 py-8 md:px-8 overflow-hidden">
            <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-10">

                {/* Image Section */}
                <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-5">
                    <motion.img
                        src={team1}
                        animate={{
                            y: [0, 90, 0],
                            transition: { duration: 10, repeat: Infinity }
                        }}
                        className="w-40 sm:w-52 md:w-60 lg:w-72 shadow-2xl border-l-4 border-b-4 border-blue-600 rounded-t-3xl rounded-br-3xl"
                    />
                    <motion.img
                        src={team2}
                        animate={{
                            x: [100, 200, 100],
                            y: [0, -50, 0],
                            transition: { duration: 10, delay: 3, repeat: Infinity }
                        }}
                        className="w-32 sm:w-44 md:w-52 lg:w-64 rounded-lg shadow-2xl border-l-4 border-b-4 border-blue-600 rounded-t-3xl rounded-br-3xl"
                    />
                </div>

                {/* Text Section */}
                <div className="flex-1 text-center lg:text-left">
                    <motion.h2
                        initial={{ scale: 0 }}
                        animate={{
                            scale: 1,
                            transition: { duration: 4 }
                        }}
                        className="text-3xl sm:text-4xl md:text-5xl text-green-950 font-bold"
                    >
                        Latest <motion.span
                            animate={{
                                color: ["#ff5733", "#beff33", "#3f33ff"],
                                transition: { duration: 1, repeat: Infinity },
                            }}
                        >Job</motion.span> For You!
                    </motion.h2>
                    <p className="py-4 max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary mt-2">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
