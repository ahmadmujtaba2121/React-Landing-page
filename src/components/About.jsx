import { motion, useScroll, useTransform } from "framer-motion"
import Lottie from "lottie-react"
import rocketAnimation from "../assets/video.json"

function About() {
    const { scrollX } = useScroll()
    const x = useTransform(scrollX, [0, 90], [0, 20])

    return (
        <motion.div
            className="min-h-screen bg-[url('/assets/stars.jpg')] bg-cover bg-center text-white"
        >
            <motion.div style={{ x }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="bg-black/70 min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-20">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-center font-inter mb-10"
                    >
                        Our Mission
                    </motion.h1>

                    <div className="flex flex-col-reverse md:flex-row items-center gap-10 max-w-7xl w-full">
                        {/* Text Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 text-left"
                        >
                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold font-inter mb-4">
                                🌌 Empowering Humanity's Next Leap Into the Cosmos
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6 font-montserrat ">
                                We are a team of scientists, engineers, and dreamers focused on unraveling the secrets of the universe. Our research blends cutting-edge AI, real-time space observation, and deep data analytics to expand the frontier of space knowledge.
                            </p>
                            <button
                                className="px-6 py-3 bg-[#017a87] text-white rounded-lg hover:bg-[#00E5FF] transition-all duration-300 hover:shadow-[0_0_10px_#00E5FF]"
                            >
                                Explore Our Vision
                            </button>
                        </motion.div>

                        {/* Animation Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 flex justify-center items-center relative w-full max-w-md md:max-w-lg"
                        >
                            {/* Glowing background */}
                            <div className="absolute w-56 h-56 bg-[#017a87] blur-3xl opacity-10 rounded-full top-10 left-10 z-0" />
                            {/* Rocket animation */}
                            <Lottie
                                animationData={rocketAnimation}
                                loop
                                className="relative z-10 w-full h-full"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default About
