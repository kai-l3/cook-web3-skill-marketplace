import React from 'react'
import VideoBackground from '../VideoBackground'
import Logo from '../Logo'
import { BarChart3, Calendar, Handshake, Layers, Megaphone, MessageSquare, Target, Zap } from 'lucide-react';



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


export default function Plans3Slide() {
    return (
        <div className="relative w-full h-full">
            <VideoBackground src="https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-[5.2%] pt-[4%]">
                    <Logo />
                    <div style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.8 }}>
                        ClawFriend x OpenClaw Community
                    </div>
                    <div style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.8 }}>
                        Page 005
                    </div>
                </div>
                <div className="flex-1 px-[5.2%] py-[4%] flex flex-col mt-[2%]">
                    {/* Content */}
                    <div className="mb-8">
                        <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none mb-4" style={{ fontSize: 'clamp(32px, 4vw, 72px)' }}>
                            THE <span className="text-cyan-400">ECONOMIC LAYER</span> FOR AGENTS
                        </h2>
                        <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                            <Target className="text-cyan-400 shrink-0 mt-1" size={20} />
                            <div>
                                <p className="text-xs uppercase font-bold text-slate-500 tracking-widest mb-1" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Đối tác mục tiêu</p>
                                <p className="text-base text-slate-300" style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>
                                    <span className="text-white font-bold">Hệ sinh thái OpenClaw:</span> Đội ngũ core devs, nhà phát triển Skill trên ClawHub và các cá nhân vận hành bot tự thân.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">

                        {/* Lý do hợp tác */}
                        <div className="lg:col-span-5 space-y-4">
                            <h3 className="text-xl font-black uppercase tracking-tighter text-cyan-400 flex items-center gap-2" style={{ fontSize: 'clamp(18px, 1.5vw, 24px)' }}>
                                <Layers size={20} /> Lý do hợp tác
                            </h3>
                            <div className="space-y-3">
                                {[
                                    { title: "Giải quyết bài toán kinh tế", desc: "Cung cấp Economic Layer cho framework 135k stars để dev kiếm tiền từ sản phẩm." },
                                    { title: "Onboarding nhanh chóng", desc: "Tích hợp sẵn công cụ npx giúp đưa Agent từ local lên on-chain chỉ trong vài giây." },
                                    { title: "Xây dựng Reputation", desc: "Cấp hồ sơ năng lực on-chain không thể giả mạo để chứng minh hiệu suất Agent." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-cyan-400/50 transition-colors">
                                        <p className="text-sm font-bold text-white mb-1 uppercase tracking-tight" style={{ fontSize: 'clamp(13px, 1.1vw, 16px)' }}>• {item.title}</p>
                                        <p className="text-sm text-slate-400 leading-relaxed" style={{ fontSize: 'clamp(12px, 1vw, 15px)' }}>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Lợi ích song phương */}
                        <div className="lg:col-span-7 space-y-4">
                            <h3 className="text-xl font-black uppercase tracking-tighter text-cyan-400 flex items-center gap-2" style={{ fontSize: 'clamp(18px, 1.5vw, 24px)' }}>
                                <Handshake size={20} /> Lợi ích song phương (Win-Win)
                            </h3>
                            <div className="overflow-hidden border border-white/10 rounded-2xl bg-white/5">
                                <table className="w-full text-left" style={{ fontSize: 'clamp(12px, 1vw, 15px)' }}>
                                    <thead>
                                        <tr className="border-b border-white/10 bg-white/5 uppercase font-bold tracking-widest" style={{ fontSize: 'clamp(11px, 0.9vw, 13px)' }}>
                                            <th className="px-4 py-3 text-cyan-400 border-r border-white/10 w-1/2">Cho ClawFriend</th>
                                            <th className="px-4 py-3 text-white w-1/2">Cho OpenClaw (Devs/Community)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        <tr>
                                            <td className="px-4 py-3 border-r border-white/10">
                                                <span className="text-white font-bold block mb-1" style={{ fontSize: 'clamp(13px, 1.1vw, 16px)' }}>Bùng nổ số lượng Agent</span>
                                                <span style={{ fontSize: 'clamp(12px, 1vw, 15px)' }}>Tiếp cận hàng ngàn Agent có sẵn thay vì phải build từ đầu.</span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="text-white font-bold block mb-1" style={{ fontSize: 'clamp(13px, 1.1vw, 16px)' }}>Dòng tiền thụ động</span>
                                                <span style={{ fontSize: 'clamp(12px, 1vw, 15px)' }}>Nhận 2% phí tác giả (Subject Fee) từ mỗi giao dịch cổ phần Agent.</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 border-r border-white/10">
                                                <span className="text-white font-bold block mb-1" style={{ fontSize: 'clamp(13px, 1.1vw, 16px)' }}>Làm giàu Skill Market</span>
                                                <span style={{ fontSize: 'clamp(12px, 1vw, 15px)' }}>Lôi kéo dev đăng tải Skill/Workflow cao cấp để thu hút nhà đầu tư.</span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="text-white font-bold block mb-1" style={{ fontSize: 'clamp(13px, 1.1vw, 16px)' }}>Cơ sở hạ tầng tài chính</span>
                                                <span style={{ fontSize: 'clamp(12px, 1vw, 15px)' }}>Agent có ví riêng trên BSC để tự thực hiện chiến lược sinh lời.</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 border-r border-white/10">
                                                <span className="text-white font-bold block mb-1" style={{ fontSize: 'clamp(13px, 1.1vw, 16px)' }}>Network Effect</span>
                                                <span style={{ fontSize: 'clamp(12px, 1vw, 15px)' }}>Tăng volume giao dịch và phí Protocol (5%) qua tương tác chéo.</span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="text-white font-bold block mb-1" style={{ fontSize: 'clamp(13px, 1.1vw, 16px)' }}>Tính xác thực (Verification)</span>
                                                <span style={{ fontSize: 'clamp(12px, 1vw, 15px)' }}>Hệ thống verify Twitter giúp Agent đáng tin cậy hơn.</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Lộ trình hành động */}
                    <div className="mt-4">
                        <h3 className="text-xl font-black uppercase tracking-tighter text-cyan-400 flex items-center gap-2 mb-4" style={{ fontSize: 'clamp(18px, 1.5vw, 24px)' }}>
                            <Zap size={20} /> Lộ trình hành động (Action Plan)
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { id: "01", name: "Tìm hiểu và kết nối", desc: "Tìm hiểu cách để liên kết với Openclaw, nếu tốt có thể setup các buổi gặp mặt online để trình bày kế hoạch cho bên đối tác." },
                                { id: "02", name: "Kí hợp đồng liên kết", desc: "Sau khi đã được cả 2 bên đồng ý bởi các thoả thuận thì tiến hành kí hợp đồng liên kết." },
                                { id: "03", name: "Tích hợp sâu (Deep Integration)", desc: "Trở thành plugin mặc định hoặc được đề xuất trong README của OpenClaw." }
                            ].map((step, idx) => (
                                <div key={idx} className="relative group p-5 bg-cyan-400/5 border border-cyan-400/20 rounded-2xl hover:bg-cyan-400/10 transition-all">
                                    <span className="absolute top-4 right-4 text-4xl font-black text-white/5 group-hover:text-cyan-400/20 transition-colors">{step.id}</span>
                                    <p className="text-sm font-bold text-cyan-400 uppercase mb-2 pr-8" style={{ fontSize: 'clamp(13px, 1.1vw, 16px)' }}>{step.name}</p>
                                    <p className="text-sm text-slate-400 leading-snug" style={{ fontSize: 'clamp(12px, 1vw, 15px)' }}>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
