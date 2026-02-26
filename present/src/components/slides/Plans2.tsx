import React from 'react'
import VideoBackground from '../VideoBackground'
import Logo from '../Logo'
import { BarChart3, Calendar, Megaphone, MessageSquare, Target } from 'lucide-react';



const PlanCard = ({ icon: Icon, cost, title, timeline, why, action, stats, metric }) => (
    <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col h-full hover:border-cyan-400/50 transition-all duration-500 group">
        <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-cyan-400 text-black rounded-2xl shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                <Icon size={24} />
            </div>
            <div className="text-right">
                <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-bold mb-1">Allocation</div>
                <div className="text-3xl font-black text-white italic">{cost}</div>
            </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-4">
            <Calendar size={12} className="text-cyan-400" />
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">{timeline}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">{title}</h3>

        <div className="space-y-6 flex-grow">
            <div>
                <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-[0.15em] block mb-2">Tại sao chọn?</span>
                <p className="text-sm text-slate-400 leading-relaxed">{why}</p>
            </div>

            <div>
                <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-[0.15em] block mb-2">Action Plan</span>
                <ul className="space-y-2">
                    {action.map((item, i) => (
                        <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5">
            <div className="grid grid-cols-2 gap-4 mb-4">
                {stats.map((stat, i) => (
                    <div key={i}>
                        <div className="text-lg font-bold text-white tracking-tight">{stat.val}</div>
                        <div className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">{stat.label}</div>
                    </div>
                ))}
            </div>
            <div className="bg-cyan-400/5 border border-cyan-400/20 rounded-xl p-3 flex items-start gap-3">
                <Target size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-[10px] text-cyan-400/80 leading-snug font-medium uppercase tracking-wider">
                    {metric}
                </span>
            </div>
        </div>
    </div>
);


export default function Plans2Slide() {
    return (
        <div className="relative w-full h-full">
            <VideoBackground src="https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-[5.2%] pt-[4%]">
                    <Logo />
                    <div style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>
                        Distribution Plan
                    </div>
                    <div style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>
                        Page 005
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 px-[5.2%] py-[4%] flex flex-col mt-[2%]">
                    <div className="mb-10">
                        <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase leading-none mb-4">
                            PAID <span className="text-cyan-400">EXECUTION</span> STRATEGY
                        </h2>
                        <p className="text-slate-500 max-w-2xl text-lg">
                            Chiến lược bùng nổ traffic & xây dựng niềm tin giai đoạn GTM thông qua sự kết hợp giữa KOL Alpha và Performance Ads.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full max-h-[600px]">
                        <PlanCard
                            icon={Megaphone}
                            cost="$3,500"
                            title="Micro-KOLs Alpha Callers"
                            timeline="Tuần 1 - Tuần 4"
                            why="Web3 dựa trên niềm tin. KOL ngách có tỉ lệ chuyển đổi (CTR) cao hơn 5x so với quảng cáo truyền thống nhờ tệp fan trung thành."
                            action={[
                                "Target 15-20 KOLs (X/Telegram) tệp 10k-50k followers chuyên Memecoin.",
                                "Thuê post Proof of Utility - KOL dùng bot tìm kèo thực tế và share link Referral."
                            ]}
                            stats={[
                                { val: "800K+", label: "Est. Reach" },
                                { val: "400+", label: "Target Users" }
                            ]}
                            metric="Metric: CTR & Wallet Connections via Referral"
                        />

                        <PlanCard
                            icon={BarChart3}
                            cost="$4,500"
                            title="Performance Marketing"
                            timeline="Tuần 2 - Tuần 6"
                            why="Phủ sóng tệp user đối thủ (ai16z, Truth Terminal) và chiếm lĩnh các từ khóa tìm kiếm có ý định sử dụng cao."
                            action={[
                                "X Ads ($2k): Video Drama Agent. Target follower đối thủ.",
                                "Meta ($1.5k): Reels hướng dẫn Earn with AI cho newbie.",
                                "Google ($1k): Bid từ khóa 'AI crypto bot'."
                            ]}
                            stats={[
                                { val: "3M+", label: "Impressions" },
                                { val: "$1.85", label: "Est. CPC" }
                            ]}
                            metric="Metric: CPC, CPA & Landing Page Bounce Rate"
                        />

                        <PlanCard
                            icon={MessageSquare}
                            cost="$500"
                            title="Seeding & Viral Ops"
                            timeline="Continuous"
                            why="Chi phí thấp, hiệu quả len lỏi cực cao. Xây dựng sự hiện diện thương hiệu tự nhiên trong các 'hang ổ' của đối thủ."
                            action={[
                                "Thuê 5-10 seeders gạo cội thâm nhập các group Telegram Whale Hunter.",
                                "Đặt câu hỏi mồi và share kết quả từ Clawfriend như một người dùng thật."
                            ]}
                            stats={[
                                { val: "50+", label: "Groups" },
                                { val: "Daily", label: "Frequency" }
                            ]}
                            metric="Metric: Organic Traffic & Social Mentions"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
