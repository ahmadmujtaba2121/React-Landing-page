import profile1 from '../assets/download.jpeg'
import profile2 from "../assets/female1.avif"
import profile3 from "../assets/female2.avif"
function Testimonial() {

    return (
        <>
            <div>
                <div className="bg-[#0f0f0f] min-h-[50vh] pb-24">
                    <div>
                        <div>
                            <h1 className="text-center text-3xl md:text-4xl font-extrabold font-inter text-white px-4 py-12 md:pt-10">What Our Clients Say</h1>
                            <p className="text-center text-gray-400 max-w-2xl mx-auto px-4 -mt-8 pb-8 text-sm md:text-base">
                                Hear directly from our happy clients who turned their visions into stunning realities.
                            </p>

                        </div>
                        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

                            <div className="bg-[#1a1a1a] p-6 rounded-xl  border border-transparent hover:border-cyan-500 shadow-md hover:scale-[1.02] transition-transform duration-500 ">
                                <div className="flex items-center space-x-4 mb-4">
                                    <img src={profile1} alt="Client Name" className="w-12 h-12 rounded-full object-cover border" />
                                    <div>
                                        <h3 className="text-white font-semibold text-lg">Jason Kim</h3>
                                        <p className="text-gray-400 text-sm">UI/UX Lead @ NovaWorks</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 leading-relaxed text-base">
                                    "The design team made our abstract ideas come to life. Loved the blend of professionalism with that cosmic flair."

                                </p>
                            </div>
                            <div className="bg-[#1a1a1a] p-6 rounded-xl  border border-transparent hover:border-cyan-500 shadow-md hover:scale-[1.02] transition-transform duration-500 ">
                                <div className="flex items-center space-x-4 mb-4">
                                    <img src={profile2} alt="Client Name" className="w-12 h-12 rounded-full object-cover border" />
                                    <div>
                                        <h3 className="text-white font-semibold text-lg">Sarah Thompson</h3>
                                        <p className="text-gray-400 text-sm">Freelance Developer</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 leading-relaxed text-base">
                                    "Animations, performance, and design — everything felt smooth and modern. Best collaboration I've had in years."

                                </p>
                            </div>
                            <div className="bg-[#1a1a1a] p-6 rounded-xl  border border-transparent hover:border-cyan-500 shadow-md hover:scale-[1.02] transition-transform duration-500 ">
                                <div className="flex items-center space-x-4 mb-4">
                                    <img src={profile3} alt="Client Name" className="w-12 h-12 rounded-full object-cover border" />
                                    <div>
                                        <h3 className="text-white font-semibold text-lg">Ayesha Malik</h3>
                                        <p className="text-gray-400 text-sm">Founder @ StellarStudio</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 leading-relaxed text-base">
                                    "From day one, the experience felt cosmic. Their attention to detail and creative flow made our brand shine like a supernova."
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Testimonial