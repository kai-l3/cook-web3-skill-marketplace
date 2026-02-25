import React from 'react'
import VideoBackground from '../VideoBackground'
import Logo from '../Logo'

const skills = [
    {
        title: 'Trade Notifier & FOMO Engine',
        category: 'Trading / Notification',
        description: 'Tự động thông báo giao dịch mua/bán share theo thời gian thực. Tính toán doanh thu phí (5% royalty) và cảnh báo khi cá mập mua >5% tổng cung.',
        features: ['Telegram/Twitter notifications', 'Whale Alert', 'Revenue calculation'],
        monetization: 'Freemium: Telegram miễn phí, Twitter + Whale Alert: 0.05 BNB/tháng',
    },
    {
        title: 'Alpha Terminal',
        category: 'Investment / On-chain Data',
        description: 'Biến AI Agent thành trạm tin alpha. Quét blockchain real-time để phát hiện ví Smart Money đang gom hàng hoặc dự án mới add liquidity.',
        features: ['Whale Signal', 'Alpha Feed (5 dự án/24h)', 'Portfolio Health'],
        monetization: 'Gated: Real-time data cần 50+ Shares',
    },
    {
        title: 'Omni-Social Viral Engine',
        category: 'Social Media / Automation',
        description: 'Tự động hóa phủ sóng thương hiệu trên X, Telegram, Farcaster, Lens. Tự động phát hiện trend và tạo meme/thread trong <5 phút.',
        features: ['Trend Hijacking', 'Multi-platform sync', 'Engagement Booster'],
        monetization: 'Exclusive content: Secret Threads cần 20+ Shares',
    },
    {
        title: 'Inner Circle Chat',
        category: 'Social / Personalized',
        description: 'Mở khóa "tầng sâu" trong tính cách AI Agent. Chia sẻ phân tích thô, tin đồn trong hệ sinh thái và chat cá nhân hóa với từng Holder.',
        features: ['Holder-only chat 1-1', 'Memory Persistence', 'Ecosystem Gossip'],
        monetization: 'Tiered: 1 Share (view), 10 Shares (reply), 100 Shares (Gossip Mode)',
    },
    {
        title: 'On-chain Risk Auditor',
        category: 'Security / Risk Management',
        description: 'Chuyên gia kiểm toán 24/7. Quét lỗ hổng Smart Contract, phát hiện dấu hiệu Rug pull trước khi user xuống tiền. Trả về thang điểm rủi ro 0-100.',
        features: ['Contract scanning', 'Rug pull detection', 'Risk rating (0-100)'],
        monetization: 'Private gating: Chi tiết lỗi code cần 75+ Shares',
    },
]

export default function SkillsSlide() {
    return (
        <div className="relative w-full h-full">
            <VideoBackground src="https://stream.mux.com/4IMYGcL01xjs7e
k5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-[5.2%] pt-[4%]">
                    <Logo />
                    <div style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>
                        Skill Marketplace
                    </div>
                    <div style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>
                        Page 004
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 px-[5.2%] pb-[8%] overflow-y-auto mt-[3%]">
                    <div className="space-y-6">
                        {/* Top Row: 3 Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {skills.slice(0, 3).map((skill, index) => (
                                <div
                                    key={index}
                                    className="liquid-glass rounded-lg p-5"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
                                    }}
                                >
                                    <div
                                        className="text-cyan-400 mb-2"
                                        style={{ fontSize: 'clamp(10px, 1vw, 14px)' }}
                                    >
                                        {skill.category}
                                    </div>
                                    <div
                                        className="font-bold text-white mb-3"
                                        style={{ fontSize: 'clamp(16px, 1.6vw, 22px)' }}
                                    >
                                        {skill.title}
                                    </div>
                                    <p
                                        className="text-white/80 leading-relaxed mb-4"
                                        style={{ fontSize: 'clamp(10px, 1vw, 14px)' }}
                                    >
                                        {skill.description}
                                    </p>
                                    <div className="mb-3">
                                        <div
                                            className="text-white/90 mb-2 font-semibold"
                                            style={{ fontSize: 'clamp(10px, 1vw, 14px)' }}
                                        >
                                            Features:
                                        </div>
                                        <ul className="space-y-1 ml-4">
                                            {skill.features.map((feature, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-white/70 flex items-start"
                                                    style={{ fontSize: 'clamp(9px, 0.9vw, 13px)' }}
                                                >
                                                    <span className="mr-2">•</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="border-t border-white/10 pt-3">
                                        <div
                                            className="text-cyan-400"
                                            style={{ fontSize: 'clamp(9px, 0.9vw, 12px)' }}
                                        >
                                            💰 {skill.monetization}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Row: 2 Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                            {skills.slice(3, 5).map((skill, index) => (
                                <div
                                    key={index}
                                    className="liquid-glass rounded-lg p-5"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
                                    }}
                                >
                                    <div
                                        className="text-cyan-400 mb-2"
                                        style={{ fontSize: 'clamp(10px, 1vw, 14px)' }}
                                    >
                                        {skill.category}
                                    </div>
                                    <div
                                        className="font-bold text-white mb-3"
                                        style={{ fontSize: 'clamp(16px, 1.6vw, 22px)' }}
                                    >
                                        {skill.title}
                                    </div>
                                    <p
                                        className="text-white/80 leading-relaxed mb-4"
                                        style={{ fontSize: 'clamp(10px, 1vw, 14px)' }}
                                    >
                                        {skill.description}
                                    </p>
                                    <div className="mb-3">
                                        <div
                                            className="text-white/90 mb-2 font-semibold"
                                            style={{ fontSize: 'clamp(10px, 1vw, 14px)' }}
                                        >
                                            Features:
                                        </div>
                                        <ul className="space-y-1 ml-4">
                                            {skill.features.map((feature, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-white/70 flex items-start"
                                                    style={{ fontSize: 'clamp(9px, 0.9vw, 13px)' }}
                                                >
                                                    <span className="mr-2">•</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="border-t border-white/10 pt-3">
                                        <div
                                            className="text-cyan-400"
                                            style={{ fontSize: 'clamp(9px, 0.9vw, 12px)' }}
                                        >
                                            💰 {skill.monetization}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
