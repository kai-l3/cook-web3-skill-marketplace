import React from 'react'
import VideoBackground from '../VideoBackground'
import Logo from '../Logo'
import { Bell, MessageSquare, Share2, Terminal, ShieldAlert, Zap, Lock } from 'lucide-react';

const skills = [
    {
        title: 'Trade Notifier & FOMO Engine v1.0',
        category: 'Giao dịch / Thông báo',
        icon: <Bell className="text-orange-400" />,
        description: 'Tự động cập nhật các lệnh mua/bán share theo thời gian thực. Cảnh báo biến động từ "cá mập" và tự động tính toán doanh thu từ phí bản quyền (5% royalty).',
        features: ['Bot Telegram/Twitter', 'Cảnh báo Cá mập >5%', 'Phân tích Real-time'],
        monetization: 'Phí: 0.05 BNB/tháng cho Whale Alert',
        gridClass: 'md:col-span-2 md:row-span-1',
        color: 'from-orange-500/20'
    },
    {
        title: 'Alpha Terminal & Smart Money Tracker',
        category: 'Dữ liệu On-chain',
        icon: <Terminal className="text-cyan-400" />,
        description: 'Biến AI Agent thành trạm săn tin Alpha. Theo dấu các ví Smart Money đang gom hàng hoặc phát hiện sớm các dự án vừa thêm thanh khoản.',
        features: ['Tín hiệu Cá mập', 'Nguồn tin Alpha 24/5', 'Sức khỏe Danh mục'],
        monetization: 'Yêu cầu: Sở hữu 50+ Shares',
        gridClass: 'md:col-span-1 md:row-span-1',
        color: 'from-cyan-500/20'
    },
    {
        title: 'Omni-Social Viral Engine',
        category: 'Mạng xã hội / Tự động hóa',
        icon: <Share2 className="text-purple-400" />,
        description: 'Tự động phủ sóng nội dung trên X, Farcaster và Lens. Nhạy bén với xu hướng, hỗ trợ tạo Meme và Thread chỉ trong chưa đầy 5 phút.',
        features: ['Bắt Trend thần tốc', 'Đồng bộ đa nền tảng', 'Tăng tương tác (Engagement)'],
        monetization: 'Độc quyền: Secret Threads (Cần 20+ Shares)',
        gridClass: 'md:col-span-1 md:row-span-1',
        color: 'from-purple-500/20'
    },
    {
        title: 'Inner Circle (Private Knowledge Gating)',
        category: 'Cá nhân hóa / Xã hội',
        icon: <MessageSquare className="text-pink-400" />,
        description: 'Khám phá những "bí mật" trong tính cách của AI Agent. Trò chuyện cá nhân hóa và cập nhật những tin đồn độc quyền trong hệ sinh thái.',
        features: ['Chat 1-1 cho Holder', 'Ghi nhớ lịch sử chat', 'Tin vỉa hè hệ sinh thái'],
        monetization: 'Phân cấp: 1 - 10 - 100 Shares',
        gridClass: 'md:col-span-1 md:row-span-1',
        color: 'from-pink-500/20'
    },
    {
        title: 'Sentinel: On-chain Risk & Audit Scout',
        category: 'Bảo mật / Kiểm toán',
        icon: <ShieldAlert className="text-red-400" />,
        description: 'Giám sát an toàn 24/7. Quét lỗ hổng Smart Contract, cảnh báo dấu hiệu Rug pull và đánh giá điểm rủi ro từ 0-100.',
        features: ['Quét Contract', 'Phát hiện Rug Pull', 'Đánh giá mức độ rủi ro'],
        monetization: 'Yêu cầu: Full Audit (Cần 75+ Shares)',
        gridClass: 'md:col-span-1 md:row-span-1',
        color: 'from-red-500/20'
    }
];

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
                    <div className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter text-white mb-2">
                            AGENT <span className="text-cyan-400 underline decoration-cyan-500/30 underline-offset-8">SKILLS</span>
                        </h1>
                        <p className="text-slate-400 text-sm max-w-2xl">
                            Nâng cấp trí tuệ và quyền năng cho AI Agent của bạn. Mỗi Skill là một module tạo ra dòng tiền và giá trị thực trên On-chain.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className={`${skill.gridClass} group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-6 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]`}
                            >
                                {/* Background Glow */}
                                <div className={`absolute -right-4 -top-4 w-32 h-32 bg-gradient-to-br ${skill.color} blur-3xl opacity-50 group-hover:opacity-100 transition-opacity`} />

                                <div className="relative z-10 h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                                            {React.cloneElement(skill.icon, { size: 24 })}
                                        </div>
                                        <span className="text-[10px] font-bold text-cyan-400/70 tracking-widest uppercase py-1 px-2 bg-cyan-400/10 rounded-full border border-cyan-400/20">
                                            {skill.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                                        {skill.title}
                                    </h3>

                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                        {skill.description}
                                    </p>

                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 gap-2">
                                            {skill.features.map((f, i) => (
                                                <div key={i} className="flex items-center gap-2 text-[11px] text-slate-300">
                                                    <Zap size={12} className="text-cyan-500" />
                                                    {f}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-4 border-t border-white/5 flex items-center gap-2">
                                            <Lock size={12} className="text-slate-500" />
                                            <span className="text-[11px] font-semibold text-slate-200 uppercase tracking-wider">
                                                Monetization:
                                            </span>
                                            <span className="text-[11px] text-cyan-400 font-mono italic">
                                                {skill.monetization}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
