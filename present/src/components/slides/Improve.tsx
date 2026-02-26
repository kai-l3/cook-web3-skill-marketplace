import React from 'react'
import VideoBackground from '../VideoBackground'
import Logo from '../Logo'
import { AlertCircle, Award, BookOpen, Cpu, Database, Gamepad2, Globe, Key, RefreshCw, TrendingUp, Wrench } from 'lucide-react'

const missingFeatures = [
    { title: 'No-code Tools', desc: 'Thiếu công cụ tạo bot không cần code. MyShell có 1M+ users nhờ điều này.', source: 'MyShell', icon: <Cpu size={16} /> },
    { title: 'Omni-chain Infrastructure', desc: 'Chưa hỗ trợ đa blockchain. Wayfinder xử lý $61M/24h nhờ hạ tầng này.', source: 'Wayfinder', icon: <Globe size={16} /> },
    { title: 'Cross-platform Automation', desc: 'Chưa tự động sync nội dung lên X/Telegram để kéo traffic về.', source: 'Creator.bid', icon: <RefreshCw size={16} /> },
    { title: 'Shell Memory', desc: 'Bot chưa ghi nhớ lịch sử tương tác với từng người giữ share.', source: 'Wayfinder', icon: <Database size={16} /> },
];

const improvements = [
    { title: 'Tối ưu phí Gas', desc: 'Cần giảm chi phí giao dịch để tăng trải nghiệm người dùng.', priority: 'High' },
    { title: 'Proof of Collaboration', desc: 'Hệ thống đánh giá tương tác bot-to-bot để tăng giá trị share.', priority: 'Medium' },
    { title: 'Revenue Generation', desc: 'Cho phép bot thực hiện task tạo doanh thu thực tế để chia sẻ.', priority: 'Medium' },
];

const lessons = [
    { title: 'Launchpad Mechanism', desc: '1-click minting với Bonding Curve. Virtuals đạt $600M Cap nhờ điều này.', from: 'Virtuals Protocol', impact: 'High', icon: <TrendingUp size={18} /> },
    { title: 'Gamification Tài chính', desc: 'Biến sở hữu bot thành trò chơi đầu cơ, thu hút dòng tiền crypto.', from: 'Virtuals Protocol', impact: 'High', icon: <Gamepad2 size={18} /> },
    { title: 'Reward Mechanism', desc: 'Trả thưởng định kỳ dựa trên engagement để khuyến khích chăm chút bot.', from: 'MyShell', impact: 'Medium', icon: <Award size={18} /> },
    { title: 'Agent Keys & Privileges', desc: 'Dùng Keys mở khóa nội dung. Chỉ holders mới xem được "nhật ký".', from: 'Creator.bid', impact: 'Medium', icon: <Key size={18} /> },
];



export default function ImproveSlide() {

    const StatusBadge = ({ text }) => {
        const styles = {
            High: "bg-red-500/20 text-red-400 border-red-500/30",
            Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
            Low: "bg-blue-500/20 text-blue-400 border-blue-500/30"
        };
        return (
            <span className={`px-2 py-0.5 rounded-full font-black uppercase tracking-widest border ${styles[text] || styles.Low}`} style={{ fontSize: 'clamp(10px, 0.9vw, 12px)' }}>
                {text}
            </span>
        );
    };
    return (
        <div className="relative w-full h-full">
            <VideoBackground src="https://stream.mux.com/fHfa8VIbBdqZel
LGg5thjsypZ101M01dbyIMLNDWQwlLA.m3u8" opacity={10} />

            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-[5.2%] pt-[4%]">
                    <Logo />
                    <div style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.8 }}>
                        Improvement Roadmap
                    </div>
                    <div style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.8 }}>
                        Page 003
                    </div>
                </div>

                <div className="flex-1 px-[5.2%] py-[4%] flex flex-col">
                    {/* Content */}
                    <div className="mb-10">
                        <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none mb-2" style={{ fontSize: 'clamp(32px, 4vw, 72px)' }}>
                            EVOLUTION <span className="text-cyan-400">&</span> GROWTH
                        </h2>
                        <p className="text-slate-500 max-w-2xl font-medium" style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>
                            Phân tích khoảng cách công nghệ và chiến lược tối ưu hóa để đưa ClawFriend trở thành dẫn đầu thị trường AI Agent.
                        </p>
                    </div>

                    {/* Section 1: Missing Features */}
                    <div className="mb-12">
                        <h3 className="text-xl font-black uppercase tracking-tighter text-red-500 flex items-center gap-2 mb-6" style={{ fontSize: 'clamp(18px, 1.5vw, 24px)' }}>
                            <AlertCircle size={22} /> Những thứ ClawFriend còn thiếu
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {missingFeatures.map((item, idx) => (
                                <div key={idx} className="group bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-red-500/50 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-red-500/10 text-red-500 rounded-lg group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <h4 className="text-sm font-bold text-white uppercase tracking-tight leading-tight" style={{ fontSize: 'clamp(13px, 1.1vw, 16px)' }}>{item.title}</h4>
                                    </div>
                                    <p className="text-sm text-slate-400 leading-relaxed mb-4 h-12 overflow-hidden" style={{ fontSize: 'clamp(12px, 1vw, 15px)' }}>{item.desc}</p>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest" style={{ fontSize: 'clamp(10px, 0.9vw, 12px)' }}>
                                        Source: <span className="text-red-400/80 italic">{item.source}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 2 & 3 Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                        {/* Cải thiện */}
                        <div className="lg:col-span-4">
                            <h3 className="text-xl font-black uppercase tracking-tighter text-yellow-500 flex items-center gap-2 mb-6" style={{ fontSize: 'clamp(18px, 1.5vw, 24px)' }}>
                                <Wrench size={22} /> Những thứ cần cải thiện
                            </h3>
                            <div className="space-y-4">
                                {improvements.map((item, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center justify-between group hover:bg-white/10 transition-all">
                                        <div className="max-w-[70%]">
                                            <h4 className="text-base font-bold text-white mb-1" style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>{item.title}</h4>
                                            <p className="text-xs text-slate-500 leading-tight" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>{item.desc}</p>
                                        </div>
                                        <StatusBadge text={item.priority} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bài học */}
                        <div className="lg:col-span-8">
                            <h3 className="text-xl font-black uppercase tracking-tighter text-green-500 flex items-center gap-2 mb-6" style={{ fontSize: 'clamp(18px, 1.5vw, 24px)' }}>
                                <BookOpen size={22} /> Bài học từ đối thủ top đầu
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {lessons.map((item, idx) => (
                                    <div key={idx} className="relative overflow-hidden bg-green-500/5 border border-green-500/10 p-5 rounded-3xl hover:border-green-500/40 transition-all group">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-2 bg-green-500/10 text-green-500 rounded-xl">
                                                {item.icon}
                                            </div>
                                            <StatusBadge text={item.impact} />
                                        </div>
                                        <h4 className="text-base font-black text-white uppercase mb-2 group-hover:text-green-400 transition-colors" style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>{item.title}</h4>
                                        <p className="text-sm text-slate-400 leading-relaxed mb-4" style={{ fontSize: 'clamp(12px, 1vw, 15px)' }}>{item.desc}</p>
                                        <div className="flex items-center gap-2 text-xs font-bold" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>
                                            <span className="text-slate-600 uppercase tracking-widest">From:</span>
                                            <span className="text-green-500 italic">{item.from}</span>
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
