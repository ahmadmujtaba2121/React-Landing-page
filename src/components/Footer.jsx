import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"

function Footer() {
    return (
        <footer className="bg-[#0d0d0d] text-gray-400 py-12 px-4 md:px-8 ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* Brand */}
                <div>
                    <h2 className="text-white font-bold text-2xl mb-3">AhmadDesigns</h2>
                    <p className="text-sm leading-relaxed">
                        Crafting sleek, responsive, and animated web experiences with a focus on clarity, speed, and delight.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#about" className="hover:text-white transition">About</a></li>
                        <li><a href="#features" className="hover:text-white transition">Features</a></li>
                        <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Connect</h3>
                    <div className="flex space-x-4 text-xl">
                        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                            <FaTwitter />
                        </a>
                        <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="sm:col-span-2 md:col-span-4 text-center text-xs text-gray-500 mt-8 border-t border-gray-800 pt-6">
                    <p>© 2025 Ahmad. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
