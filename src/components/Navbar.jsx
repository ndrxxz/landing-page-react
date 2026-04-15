import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
    {
        name: "Features",
        href: "#features"
    },
    {
        name: "Pricing",
        href: "#pricing"
    },
    {
        name: "Testimonials",
        href: "#testimonials"
    }
]

export default function Navbar({ scrolled }) {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 
            ${scrolled 
                ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800" 
                : "bg-slate-950/20 backdrop-blur-sm"}
            `}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                    <div className="flex items-center space-x-1 group cursor-pointer">
                        <div>
                            <img 
                                src="/logo.png" 
                                alt="logo" 
                                className="w-6 h-6 sm:w-8 sm:h-8" 
                            />
                        </div>
                        <span className="text-lg sm:text-xl md:text-2xl font-medium">
                            <span className="text-white">Code</span>
                            <span className="text-blue-400">Flow</span>
                        </span>
                    </div>

                    {/* Nav Links */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navLinks.map((link, key) => (
                            <a 
                                key={key}
                                href={link.href} 
                                className="text-gray-300 hover:text-white text-sm lg:text-base"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <button 
                        className="md:hidden p-2 text-gray-300 hover:text-white" 
                        onClick={() => setMobileMenuIsOpen((prev) => !prev)}
                    >
                        {mobileMenuIsOpen ? (
                            <X />
                        ) : (
                            <Menu className="w-5 h-5 sm:w-g sm:h-6" />
                        )}
                    </button>
                </div>
            </div>

            {mobileMenuIsOpen && (
                <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col space-y-3 sm:space-y-4 px-4 py-4 sm:py-6">
                        {navLinks.map((link, key) => (
                            <a 
                                key={key}
                                href={link.href} 
                                onClick={() => setMobileMenuIsOpen(false)}
                                className="text-gray-300 hover:text-white text-sm lg:text-base"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}