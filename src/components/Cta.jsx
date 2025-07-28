
import { motion, useScroll, useTransform } from "framer-motion"
function CTA() {
    const { scrollY } = useScroll()
    const { scrollX } = useScroll()
    const y = useTransform(scrollY, [0, 90], [0, 20],)
    const x = useTransform(scrollX, [0, 200], [0, 90])
    return (
        <>
            <div className="bg-[#0f0f0f]">
                <div className="w-full min-h-[80vh] flex flex-col items-center justify-center bg-[url('/assets/2bg.avif')] bg-cover bg-fixed ">
                    <div className="bg-black/70 min-h-[80vh] w-full backdrop-blur-sm">
                        <div className="max-w-4xl mx-auto mb-10 ">
                            <div>
                                <motion.h1
                                    style={{ y }}
                                    initial={{ opacity: 0, y: -50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="text-white font-inter  py-12 md:pt-10 md:py-12 font-extrabold text-3xl sm:text-4xl md:text-5xl text-center "
                                >🌌 The Universe Awaits
                                </motion.h1>
                            </div>
                            <motion.div
                                style={{ x }}
                                initial={{ opacity: 0, x: 90 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}

                                className="bg-[#1d1d1d] p-10 rounded-lg rounded-t-lg shadow-lg max-w-sm mx-20 md:max-w-4xl">
                                <div>
                                    <div className="text-center items-center justify-center px-4 md:px-32 ">
                                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-2xl font-inter">
                                            Discover the Unknown?
                                        </h2>
                                    </div>
                                    <div className="text-center items-center mt-6 max-w-7xl text-white">
                                        <p className="font-montserrat mb-6 leading-relaxed text-lg text-gray-400">
                                            Every star tells a story, and every black hole holds a mystery. Our mission is to uncover what lies beyond the visible, decode the silence of the cosmos, and build a future powered by discovery.

                                            Join us on a journey where innovation meets the infinite.
                                        </p>
                                        <button
                                            className=" bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
                                        >Explore the Mission</button>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CTA