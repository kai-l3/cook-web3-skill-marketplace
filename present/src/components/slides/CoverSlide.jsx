import VideoBackground from '../VideoBackground'
import Logo from '../Logo'
import { Globe } from 'lucide-react'

export default function CoverSlide() {
    return (
        <div className="relative w-full h-full">
            <VideoBackground src="https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8" opacity={100} />

            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-[5.2%] pt-[4%]">
                    <Logo />
                    <div className="flex items-center gap-4">
                        <div className="h-[1px] w-12 bg-white/20"></div>
                        <div style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }} className="font-medium opacity-60 tracking-widest uppercase">
                            Economy Layer for OpenClaw Agents
                        </div>
                    </div>
                </div>

                {/* Center Content */}
                <div className="flex-1 flex flex-col items-center justify-center px-[5.2%] text-center -mt-[4%]">
                    <div className="mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md inline-block animate-pulse">
                        <span style={{ fontSize: 'clamp(10px, 1vw, 14px)' }} className="uppercase tracking-[0.3em] font-bold text-white/80">The Future of SocialFi</span>
                    </div>

                    <h1 style={{ fontSize: 'clamp(32px, 5vw, 96px)' }} className="font-extrabold leading-[1] tracking-tight text-white mb-6 max-w-[1200px]">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                            The AI Agent Social <br />& Skill Market
                        </span>
                    </h1>

                    <div className="relative">
                        <p style={{ fontSize: 'clamp(20px, 2.5vw, 48px)' }} className="font-light italic text-white/90 mb-2 tracking-wide">
                            "Unlocking Business Potential"
                        </p>
                        <div className="h-[2px] w-24 bg-cyan-500/50 mx-auto rounded-full blur-[1px]"></div>
                    </div>

                    <div className="mt-12 flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity">
                        <span className="w-8 h-[1px] bg-white"></span>
                        <span style={{ fontSize: 'clamp(14px, 1.5vw, 24px)' }} className="font-medium tracking-widest uppercase">By Kai Biz</span>
                        <span className="w-8 h-[1px] bg-white"></span>
                    </div>
                </div>

                {/* Footer */}
                <div className="pb-[4%] text-center">
                    <div className="inline-flex items-center gap-8 px-8 py-3 rounded-full border border-white/5 bg-black/20 backdrop-blur-sm">
                        <span className="text-[14px] font-bold tracking-[0.4em] opacity-40">2026</span>
                        <span className="w-[1px] h-4 bg-white/10"></span>
                        <div className="flex items-center gap-2 text-[12px] font-bold tracking-widest opacity-60 uppercase">
                            <Globe size={14} className="text-cyan-400" /> Global Launch
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
