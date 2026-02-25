import React from 'react'
import VideoBackground from '../VideoBackground'
import Logo from '../Logo'

const missingFeatures = [
    {
        title: 'No-code Tools',
        description: 'Thiếu công cụ tạo bot không cần code. MyShell có 1M+ users nhờ điều này.',
        source: 'MyShell',
    },
    {
        title: 'Omni-chain Infrastructure',
        description: 'Chưa hỗ trợ đa blockchain. Wayfinder xử lý $61M/24h nhờ hạ tầng này.',
        source: 'Wayfinder',
    },
    {
        title: 'Cross-platform Automation',
        description: 'Chưa tự động sync nội dung lên X/Telegram để kéo traffic về.',
        source: 'Creator.bid',
    },
    {
        title: 'Shell Memory',
        description: 'Bot chưa ghi nhớ lịch sử tương tác với từng người giữ share.',
        source: 'Wayfinder',
    },
]

const improvements = [
    {
        title: 'Tối ưu phí Gas',
        description: 'Cần giảm chi phí giao dịch để tăng trải nghiệm người dùng.',
        priority: 'High',
    },
    {
        title: 'Proof of Collaboration',
        description: 'Cần hệ thống đánh giá tương tác bot-to-bot để tăng giá trị share.',
        priority: 'Medium',
    },
    {
        title: 'Revenue Generation',
        description: 'Cho phép bot thực hiện task tạo doanh thu thực tế để chia sẻ cho người giữ share.',
        priority: 'Medium',
    },
]

const lessons = [
    {
        title: 'Launchpad Mechanism',
        description: '1-click minting bot với Bonding Curve trực quan. Virtuals đạt $600M market cap nhờ cơ chế này.',
        from: 'Virtuals Protocol',
        impact: 'High',
    },
    {
        title: 'Gamification Tài chính',
        description: 'Biến sở hữu bot thành trò chơi đầu cơ hấp dẫn, thu hút dòng tiền từ cộng đồng crypto.',
        from: 'Virtuals Protocol',
        impact: 'High',
    },
    {
        title: 'Reward Mechanism',
        description: 'Trả thưởng định kỳ cho chủ sở hữu bot dựa trên engagement để khuyến khích chăm chút bot.',
        from: 'MyShell',
        impact: 'Medium',
    },
    {
        title: 'Agent Keys & Privileges',
        description: 'Dùng Keys để mở khóa nội dung độc quyền. Chỉ người giữ share mới được xem "nhật ký thầm kín".',
        from: 'Creator.bid',
        impact: 'Medium',
    },
]

export default function ImproveSlide() {
    return (
        <div className="relative w-full h-full">
            <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-[5.2%] pt-[4%]">
                    <Logo />
                    <div style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>
                        Improvement Roadmap
                    </div>
                    <div style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>
                        Page 003
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 px-[5.2%] pb-[8%] overflow-y-auto mt-[3%]">
                    <div className="space-y-6">
                        {/* Missing Features Section */}
                        <div>
                            <h3
                                className="font-bold text-white mb-4"
                                style={{ fontSize: 'clamp(18px, 2vw, 28px)' }}
                            >
                                ❌ Những thứ ClawFriend còn thiếu
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {missingFeatures.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="liquid-glass rounded-lg p-5"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
                                        }}
                                    >
                                        <div
                                            className="font-bold text-white mb-2"
                                            style={{ fontSize: 'clamp(14px, 1.4vw, 20px)' }}
                                        >
                                            {feature.title}
                                        </div>
                                        <p
                                            className="text-white/80 leading-relaxed mb-2"
                                            style={{ fontSize: 'clamp(10px, 1vw, 14px)' }}
                                        >
                                            {feature.description}
                                        </p>
                                        <div
                                            className="text-cyan-400 text-sm"
                                            style={{ fontSize: 'clamp(9px, 0.9vw, 12px)' }}
                                        >
                                            Học từ: {feature.source}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Improvements Section */}
                        <div>
                            <h3
                                className="font-bold text-white mb-4"
                                style={{ fontSize: 'clamp(18px, 2vw, 28px)' }}
                            >
                                🔧 Những thứ cần cải thiện
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {improvements.map((item, index) => (
                                    <div
                                        key={index}
                                        className="liquid-glass rounded-lg p-5"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
                                        }}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div
                                                className="font-bold text-white"
                                                style={{ fontSize: 'clamp(14px, 1.4vw, 20px)' }}
                                            >
                                                {item.title}
                                            </div>
                                            <span
                                                className={`px-2 py-1 rounded text-xs ${item.priority === 'High'
                                                    ? 'bg-red-500/20 text-red-300'
                                                    : 'bg-yellow-500/20 text-yellow-300'
                                                    }`}
                                                style={{ fontSize: 'clamp(9px, 0.9vw, 12px)' }}
                                            >
                                                {item.priority}
                                            </span>
                                        </div>
                                        <p
                                            className="text-white/80 leading-relaxed"
                                            style={{ fontSize: 'clamp(10px, 1vw, 14px)' }}
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Lessons Section */}
                        <div>
                            <h3
                                className="font-bold text-white mb-4"
                                style={{ fontSize: 'clamp(18px, 2vw, 28px)' }}
                            >
                                📚 Bài học từ đối thủ top đầu
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {lessons.map((lesson, index) => (
                                    <div
                                        key={index}
                                        className="liquid-glass rounded-lg p-5"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
                                        }}
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <div
                                                className="font-bold text-white flex-1"
                                                style={{ fontSize: 'clamp(14px, 1.4vw, 20px)' }}
                                            >
                                                {lesson.title}
                                            </div>
                                            <span
                                                className={`ml-2 px-2 py-1 rounded text-xs ${lesson.impact === 'High'
                                                    ? 'bg-green-500/20 text-green-300'
                                                    : 'bg-blue-500/20 text-blue-300'
                                                    }`}
                                                style={{ fontSize: 'clamp(9px, 0.9vw, 12px)' }}
                                            >
                                                {lesson.impact}
                                            </span>
                                        </div>
                                        <p
                                            className="text-white/80 leading-relaxed mb-2"
                                            style={{ fontSize: 'clamp(10px, 1vw, 14px)' }}
                                        >
                                            {lesson.description}
                                        </p>
                                        <div
                                            className="text-cyan-400"
                                            style={{ fontSize: 'clamp(9px, 0.9vw, 12px)' }}
                                        >
                                            Nguồn: {lesson.from}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
