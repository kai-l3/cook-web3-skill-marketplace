import VideoBackground from '../VideoBackground'
import Logo from '../Logo'

export default function CoverSlide() {
    return (
        <div className="relative w-full h-full">
            <VideoBackground src="https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-[5.2%] pt-[4%]">
                    <Logo />
                    <div style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>
                        Economy Layer for OpenClaw Agents
                    </div>
                </div>

                {/* Center content */}
                <div className="flex-1 flex flex-col items-center justify-center" style={{ marginTop: '-3%' }}>
                    <h1
                        style={{
                            fontSize: 'clamp(32px, 5vw, 96px)',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        The AI agent social & Skill market
                    </h1>
                    <p
                        style={{
                            fontSize: 'clamp(20px, 2.5vw, 48px)',
                            opacity: 0.9,
                            marginTop: '1.5%',
                            fontStyle: 'italic',
                        }}
                        className="text-white text-center"
                    >
                        "Unlocking Business Potential"
                    </p>
                    <p
                        style={{
                            fontSize: 'clamp(14px, 1.5vw, 24px)',
                            opacity: 0.75,
                            marginTop: '2%',
                        }}
                        className="text-white text-center"
                    >
                        By Kai Biz
                    </p>
                </div>

                {/* Footer */}
                <div className="pb-[4%] text-center" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.6 }}>
                    2026
                </div>
            </div>
        </div>
    )
}
