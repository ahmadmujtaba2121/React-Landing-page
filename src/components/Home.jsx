import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

function Home() {
    const [isOpen, setIsOpen] = useState(false)
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 300], [0, 100]) // Adjust for parallax strength

    return (
        <>
            <div className="bg-[url('/assets/bg.jpg')] bg-fixed bg-cover bg-center min-h-screen">
                <div className="bg-black/50 backdrop-blur-sm min-h-screen">
                    <div className="p-4">
                        {/* NAVBAR */}
                        <div className="flex justify-between items-center text-white p-4">
                            <h1 className="font-bold text-xl md:text-3xl font-inter">Your Logo</h1>

                            {/* Desktop Nav */}
                            <ul className="hidden md:flex space-x-4 text-sm">
                                <li><a href="/" className="hover:text-[#00E5FF] hover:drop-shadow-[0_0_5px_#00E5FF] transition-colors duration-300 font-inter">Home</a></li>
                                <li><a href="/about" className="hover:text-[#00E5FF] hover:drop-shadow-[0_0_5px_#00E5FF] transition-colors duration-300 font-inter">About</a></li>
                                <li><a href="/contact" className="hover:text-[#00E5FF] hover:drop-shadow-[0_0_5px_#00E5FF] transition-colors duration-300 font-inter">Contact</a></li>
                                <li><a href="/services" className="hover:text-[#00E5FF] hover:drop-shadow-[0_0_5px_#00E5FF] transition-colors duration-300 font-inter">Services</a></li>
                            </ul>

                            {/* Hamburger Button */}
                            <div className="md:hidden">
                                <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        {isOpen && (
                            <ul className="md:hidden flex flex-col space-y-2 text-white text-center mt-2 absolute top-16 left-0 w-full bg-black/70 z-50 py-2 pb-4">
                                <li><a href="/" className="hover:text-[#00E5FF] hover:drop-shadow-[0_0_5px_#00E5FF] transition-colors duration-300 font-inter">Home</a></li>
                                <li><a href="/about" className="hover:text-[#00E5FF] hover:drop-shadow-[0_0_5px_#00E5FF] transition-colors duration-300 font-inter">About</a></li>
                                <li><a href="/contact" className="hover:text-[#00E5FF] hover:drop-shadow-[0_0_5px_#00E5FF] transition-colors duration-300 font-inter">Contact</a></li>
                                <li><a href="/services" className="hover:text-[#00E5FF] hover:drop-shadow-[0_0_5px_#00E5FF] transition-colors duration-300 font-inter">Services</a></li>
                            </ul>
                        )}
                    </div>

                    <motion.div
                        style={{ y }}
                        className="text-white flex flex-col justify-center items-center text-center px-4 py-20 mt-20"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl md:text-5xl font-bold mb-4 font-montserrat"
                        >
                            Exploring the Universe with Innovation
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-sm md:text-lg max-w-xl text-center font-inter"
                        >
                            Our mission is to power space research and discovery through cutting-edge technology, intelligent software, and stellar design.

                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="mt-6 px-6 py-3 bg-[#017a87] text-white rounded-lg hover:bg-[#00E5FF] hover:scale-105 transition-all duration-300 hover:shadow-[0_0_10px_#00E5FF]
                                "
                        >
                            Get Started
                        </motion.button>

                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Home
