import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react"
import SyntaxHighlighter from "react-syntax-highlighter";
import { codeExamples } from "../data/CodeExamples";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const dots = ["red", "yellow", "green"];
    const tabs = ["App.jsx", "Hero.jsx", "Navbar.jsx"];
    const [activeTab, setActiveTab] = useState("App.jsx");

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section 
            className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            <div 
                className="absolute inset-0 opacity-30" 
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
                }} 
            />

            <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="relative order-2 w-full">
                <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
                    <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:w-[350px] lg:h-[450px] border border-white/5">
                        {/* IDE HEADER */}
                        <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                            <div className="flex items-center space-x-2">
                                <div className="flex items-center space-x-1 sm:space-x-2">
                                    {dots.map((dot, index) => (
                                        <div key={index} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-${dot}-500`} />
                                    ))}
                                </div>

                                <span className="text-xs sm:text-sm text-gray-300">CodeFlow AI</span>
                            </div>

                            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                        </div>

                        <div className="p-3 sm:p-4 relative h-full">
                            {/* file tabs */}
                            <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">
                                {tabs.map((label, index) => (
                                    <button
                                        onClick={() => setActiveTab(label)}
                                        key={index}
                                        className={`px-3 py-2 backdrop-blue-sm text-xs sm:text-sm rounded-t-lg border 
                                            ${activeTab === label 
                                                ? "bg-blue-500/30 text-white border-blue-400/20" 
                                                : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                                            } transition-all duration-200 whitespace-nowrap`}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>

                            {/* Code Content */}
                            <div className="relative overflow-hidden grow">
                                <SyntaxHighlighter 
                                    language="javascript" 
                                    style={nightOwl} 
                                    PreTag="div"
                                    customStyle={{
                                        margin: 0, 
                                        padding: 0,
                                        borderRadius: "8px", 
                                        fontSize: "11px",
                                        lineHeight: "1.4",
                                        height: "100%",
                                        border: "1px solid #3c3c3c"
                                    }}
                                    codeTagProps={{
                                        style: {
                                            padding: 0,
                                            display: "block"
                                        }
                                    }}
                                >
                                    {codeExamples[activeTab]}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>

                    {/* Floating Cards */}
                    <div className={`hidden lg:block absolute`}>

                    </div>
                </div>
            </div>
        </section>
    )
}