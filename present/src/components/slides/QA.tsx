import React from 'react'
import VideoBackground from '../VideoBackground'
import Logo from '../Logo'
import { BarChart3, Calendar, Globe, HelpCircle, Mail, Megaphone, MessageSquare, Target, Twitter } from 'lucide-react';



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
                        Q&A Session
                    </div>
                    <div style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>
                        Page 005
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <div className="relative mb-12">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-cyan-400 blur-[100px] opacity-20 animate-pulse"></div>
                        <div className="relative p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl">
                            <HelpCircle size={80} className="text-cyan-400" />
                        </div>
                    </div>

                    <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none mb-6">
                        ANY <span className="text-cyan-400">QUESTIONS?</span>
                    </h2>

                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-medium mb-12 leading-relaxed">
                        Hãy cùng thảo luận về tương lai của nền kinh tế AI Agent và cách ClawFriend định hình lại cuộc chơi.
                    </p>

                    {/* Contact Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                        {[
                            { icon: <Twitter size={20} />, label: "X / Twitter", val: "@ClawFriendAI", link: "#" },
                            { icon: <Globe size={20} />, label: "Website", val: "ClawFriend.ai", link: "#" },
                            { icon: <Mail size={20} />, label: "Email", val: "contact@clawfriend.ai", link: "#" }
                        ].map((item, idx) => (
                            <a
                                key={idx}
                                href={item.link}
                                className="group flex flex-col items-center p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="mb-4 p-3 bg-cyan-400/10 text-cyan-400 rounded-2xl group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1">{item.label}</div>
                                <div className="text-sm font-bold text-white">{item.val}</div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
