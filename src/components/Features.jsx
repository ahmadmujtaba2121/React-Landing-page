import { motion, useScroll, useTransform } from "framer-motion"
import { SatelliteDish, BrainCircuit, FlaskConical, Globe2, Radar, LayoutDashboard } from "lucide-react"

function Features() {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 90], [0, 20])
    return (
        <>
            <div
                className="bg-[url('/assets/stars.jpg')] bg-fixed bg-cover bg-center min-h-screen"
            >
                <div
                    className="bg-[#0f0f0f]/90 min-h-screen
                    ">
                    <motion.h1
                        style={{ y }}
                        initial={{ opacity: 0, y: -70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-center font-inter  text-white px-4 py-12 md:pt-10"
                    >
                        Our Features
                    </motion.h1>
                    <div
                        className="max-w-7xl px-20 md:px-8  mx-auto "
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10">
                            <div
                                className="max-w-sm my-8 justify-center text-white flex flex-col  rounded-lg shadow-lg bg-[#1d1d1d] p-8 rounded-t-lg border border-transparent hover:border-cyan-500 hover:scale-105 transition-all duration-500"
                            >
                                <SatelliteDish className="text-cyan-400 w-10 h-10 mb-4" />
                                <h1
                                    className="text-lg sm:text-xl md:text-1xl font-semibold font-inter mb-4 text-left "
                                >
                                    Satellite Monitoring
                                </h1>

                                <p className="font-montserrat">
                                    Track, monitor, and analyze space activity in real-time with our precision satellite systems. Stay connected to cosmic events with unparalleled clarity.
                                </p>
                            </div>

                            <div
                                className="max-w-sm my-8 justify-center text-white flex flex-col  rounded-lg shadow-lg  bg-[#1d1d1d] p-8 rounded-t-lg border border-transparent hover:border-cyan-500 hover:scale-105 transition-all duration-500"
                            >
                                <BrainCircuit className="text-cyan-400 w-10 h-10 mb-4" />
                                <h1
                                    className="text-lg sm:text-xl md:text-1xl font-semibold font-inter mb-4 text-left "
                                >
                                    AI-Powered Insights
                                </h1>

                                <p className="font-montserrat">
                                    Our intelligent algorithms decode complex astronomical data, helping you understand deep-space anomalies, trends, and patterns faster than ever.

                                </p>
                            </div>

                            <div
                                className="max-w-sm my-8 justify-center text-white flex flex-col  rounded-lg shadow-lg  bg-[#1d1d1d] p-8 rounded-t-lg border border-transparent hover:border-cyan-500 hover:scale-105 transition-all duration-500"
                            >
                                <FlaskConical className="text-cyan-400 w-10 h-10 mb-4" />
                                <h1
                                    className="text-lg sm:text-xl md:text-1xl font-semibold font-inter mb-4 text-left "
                                >
                                    Research & Innovation Labs

                                </h1>

                                <p className="font-montserrat">
                                    We provide the tools, teams, and technology to bring your space-related ideas to life — from early experiments to mission-ready prototypes.

                                </p>
                            </div>

                            <div
                                className="max-w-sm my-8 md:my-0  justify-center text-white flex flex-col  rounded-lg shadow-lg bg-[#1d1d1d] p-8 rounded-t-lg border border-transparent hover:border-cyan-500 hover:scale-105 transition-all duration-500"
                            >
                                <Globe2 className="text-cyan-400 w-10 h-10 mb-4" />
                                <h1
                                    className="text-lg sm:text-xl md:text-1xl font-semibold font-inter mb-4 text-left "
                                >
                                    Deep Space Mapping
                                </h1>

                                <p className="font-montserrat">
                                    Build data-rich maps of galaxies, planets, and unknown regions using AI and satellite-assisted imaging — explore beyond the visible.

                                </p>
                            </div>


                            <div
                                className="max-w-sm my-8 md:my-0 justify-center text-white flex flex-col  rounded-lg shadow-lg  bg-[#1d1d1d] p-8 rounded-t-lg border border-transparent hover:border-cyan-500 hover:scale-105 transition-all duration-500"
                            >
                                <Radar className="text-cyan-400 w-10 h-10 mb-4" />
                                <h1
                                    className="text-lg sm:text-xl md:text-1xl font-semibold font-inter mb-4 text-left "
                                >
                                    Launch Systems & Planning
                                </h1>

                                <p className="font-montserrat">
                                    Plan, simulate, and manage every phase of your space launch with our robust logistics, testing, and predictive analysis systems.
                                </p>
                            </div>

                            <div
                                className="max-w-sm my-8 md:my-0 justify-center text-white flex flex-col  rounded-lg shadow-lg bg-[#1d1d1d] p-8 rounded-t-lg border border-transparent hover:border-cyan-500 hover:scale-105 transition-all duration-500"
                            >
                                <LayoutDashboard className="text-cyan-400 w-10 h-10 mb-4" />
                                <h1
                                    className="text-lg sm:text-xl md:text-1xl font-semibold font-inter mb-4 text-left "
                                >
                                    Signal & Anomaly Detection
                                </h1>

                                <p className="font-montserrat">
                                    Scan for unidentified signals, radiation spikes, and unusual patterns with our real-time deep-space listening systems — alert-ready and always-on.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features