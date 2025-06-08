
import { motion } from "motion/react"
import team1 from '../../assets/images/team1.jpg'
import team2 from '../../assets/images/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen  ">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className="flex-1">
                    <motion.img
                        src={team1}
                        animate={{
                            y: [0, 90, 0],
                            transition: { duration: 10, repeat: Infinity }
                        }}
                        className="max-w-sm  shadow-2xl  border-l-10 border-b-10 border-blue-600 rounded-t-4xl rounded-br-4xl"

                    />
                    <motion.img
                        src={team2}
                        animate={{
                            x: [100,200,100],
                            y:[0,-50,0],
                            transition: {duration:10, delay:3, repeat:Infinity}
                        }}
                        className="max-w-xs rounded-lg shadow-2xl  border-l-10 border-b-10 border-blue-600 rounded-t-4xl rounded-br-4xl"
                    />
                </div>

                <div className="flex-1 lg:ml-16">
                    {/* <motion.h1
                        animate={{
                            rotate: 180,
                            x:200,
                            y:-150,

                            transition: { duration: 4 ,repeat:Infinity},
                            scale: 1
                        }}
                        className="text-5xl  font-bold">Remote Job For You!</motion.h1> */}


                    <motion.h2
                        initial={{ scale: 0 }}
                        animate={{
                            scale: 1,
                            transition: { duration: 4 }
                        }}
                        className="text-5xl text-green-950 font-bold">Latest <motion.span
                            animate={{

                                color: ["#ff5733", "#beff33", "#3f33ff"],
                                transition: { duration: 1, repeat: Infinity },

                            }}

                        >Job</motion.span> For You!</motion.h2>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;