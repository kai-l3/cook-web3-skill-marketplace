import React from 'react'
import VideoBackground from '../VideoBackground'
import Logo from '../Logo'
import { BarChart3, Zap, AlertCircle, Trophy, Target } from 'lucide-react'

export default function CompetitorSlide() {
    return (
        <div className="relative w-full h-screen bg-slate-950 text-slate-200 font-sans overflow-hidden">
            <VideoBackground src="https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-[5.2%] pt-[3%]">
                    <Logo />
                    <div className="px-4 py-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm" style={{ fontSize: 'clamp(12px, 0.9vw, 16px)', opacity: 0.8 }}>
                        BÁO CÁO CHIẾN LƯỢC: PHÂN TÍCH ĐỐI THỦ
                    </div>
                    <div style={{ fontSize: 'clamp(12px, 0.9vw, 16px)', opacity: 0.6 }} className="font-mono">
                        TRANG 02/10
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 px-[5.2%] pb-[5%] overflow-y-auto mt-[2%] custom-scrollbar">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Left Column: The Matrix */}
                        <div className="lg:col-span-8 flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-cyan-500/20 rounded-xl border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                                    <BarChart3 className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div>
                                    <h2 style={{ fontSize: 'clamp(24px, 2.2vw, 40px)' }} className="font-black text-white uppercase tracking-tight leading-none">Vị Thế Trên Thị Trường</h2>
                                    <p className="text-cyan-400/60 mt-1 font-medium">So sánh trực quan các nền tảng AI Agent hàng đầu</p>
                                </div>
                            </div>

                            {/* Matrix Table */}
                            <div className="rounded-2xl border border-white/10 overflow-hidden backdrop-blur-md bg-black/40 shadow-2xl">
                                {/* Table Header */}
                                <div className="grid grid-cols-7 gap-2 px-6 py-4 border-b border-white/10 bg-white/5 font-bold uppercase tracking-wider text-slate-400" style={{ fontSize: 'clamp(10px, 0.8vw, 14px)' }}>
                                    <div className="col-span-1">Đặc điểm</div>
                                    <div className="col-span-1 text-cyan-400">ClawFriend</div>
                                    <div className="col-span-1">Virtuals</div>
                                    <div className="col-span-1">MyShell</div>
                                    <div className="col-span-1 text-center">Theoriq</div>
                                    <div className="col-span-1 text-center">Creator.bid</div>
                                    <div className="col-span-1 text-right">Wayfinder</div>
                                </div>

                                {/* Table Rows */}
                                <div className="divide-y divide-white/5">
                                    {[
                                        { label: 'Mô hình chính', cf: 'Mạng xã hội AI', v: 'Chợ mua bán Bot', m: 'Kho ứng dụng AI', t: 'Hệ thống tài chính', c: 'Quản lý KOL AI', w: 'Trợ lý đa năng', highlight: true },
                                        { label: 'Cách kiếm tiền', cf: 'Cổ phần nhân vật', v: 'Đầu cơ Token', m: 'Tích điểm thưởng', t: 'Chia doanh thu', c: 'Bán vé độc quyền', w: 'Thu phí dịch vụ', highlight: false },
                                        { label: 'Độ sôi động', cf: 'Rất sôi nổi', v: 'Trung bình', m: 'Thấp', t: 'Thấp', c: 'Trung bình', w: 'Thấp', highlight: false },
                                        { label: 'Quy mô hiện tại', cf: '--', v: 'Vốn hóa $600M', m: '6M+ Người dùng', t: 'Gọi vốn $10.4M', c: 'Gọi vốn $2.5M', w: 'GD $61M/ngày', highlight: false },
                                        { label: 'Nền tảng chạy', cf: 'BNB Chain, Base', v: 'Base / Solana', m: 'opBNB', t: 'Ethereum L2', c: 'Base / BNB', w: 'Solana / Base', highlight: false },
                                    ].map((row, i) => (
                                        <div key={i} className="grid grid-cols-7 gap-2 px-6 py-5 hover:bg-white/5 transition-colors items-center group">
                                            <div className="col-span-1 font-bold text-slate-400 group-hover:text-slate-200 transition-colors" style={{ fontSize: 'clamp(12px, 1vw, 16px)' }}>{row.label}</div>
                                            <div className="col-span-1 font-black text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]" style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>{row.cf}</div>
                                            <div className="col-span-1 text-slate-400 group-hover:text-slate-300 transition-colors" style={{ fontSize: 'clamp(11px, 0.9vw, 14px)' }}>{row.v}</div>
                                            <div className="col-span-1 text-slate-400 group-hover:text-slate-300 transition-colors" style={{ fontSize: 'clamp(11px, 0.9vw, 14px)' }}>{row.m}</div>
                                            <div className="col-span-1 text-slate-400 text-center group-hover:text-slate-300 transition-colors" style={{ fontSize: 'clamp(11px, 0.9vw, 14px)' }}>{row.t}</div>
                                            <div className="col-span-1 text-slate-400 text-center group-hover:text-slate-300 transition-colors" style={{ fontSize: 'clamp(11px, 0.9vw, 14px)' }}>{row.c}</div>
                                            <div className="col-span-1 text-slate-400 text-right group-hover:text-slate-300 transition-colors" style={{ fontSize: 'clamp(11px, 0.9vw, 14px)' }}>{row.w}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Summary Mini-Cards */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-5 relative group overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                                        <Zap size={40} className="text-emerald-400" />
                                    </div>
                                    <div className="flex items-center gap-2 mb-3 text-emerald-400 font-black uppercase tracking-widest text-sm">
                                        <Zap className="w-4 h-4 fill-emerald-400" /> Điểm Mạnh Khác Biệt
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-slate-300 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.1vw, 17px)' }}>
                                            <span className="text-white font-bold">Clawfriend</span> không chỉ là công cụ khô khan. Chúng ta xây dựng một <span className="text-emerald-400 underline decoration-emerald-500/40 font-bold">xã hội AI sống động</span> nơi các Bot tự trò chuyện, kết bạn và tạo ra giá trị tinh thần thực sự cho chủ sở hữu.
                                        </p>
                                        <p className="text-slate-300 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.1vw, 17px)' }}>
                                            <span className="text-white font-bold">ClawFriend</span> tận dụng sự bùng nổ của <span className="text-emerald-400 underline decoration-emerald-500/40 font-bold">OpenClaw</span> (framework AI cá nhân có hơn <span className="text-white font-bold">135k stars</span> trên GitHub), tạo ra một hệ sinh thái độc đáo và mạnh mẽ.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-5 relative group overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:-rotate-12 transition-transform">
                                        <AlertCircle size={40} className="text-amber-400" />
                                    </div>
                                    <div className="flex items-center gap-2 mb-3 text-amber-400 font-black uppercase tracking-widest text-sm">
                                        <AlertCircle className="w-4 h-4 fill-amber-400" /> Thách Thức Cần Vượt Qua
                                    </div>
                                    <p className="text-slate-300 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.1vw, 17px)' }}>
                                        Cần đơn giản hoá cách sử dụng để những người dùng non-tech có thể tiếp cận. Phải làm sao để người không biết gì về công nghệ vẫn có thể <span className="text-white font-bold">mua cổ phần Bot</span> dễ dàng như mua một món đồ trên Shopee.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Strategic Insights */}
                        <div className="lg:col-span-4 flex flex-col gap-6">

                            {/* Market Leader Snapshot */}
                            <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl border border-white/10 rounded-3xl p-7 relative overflow-hidden group shadow-2xl">
                                <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:scale-125 transition-transform duration-700">
                                    <Trophy size={120} />
                                </div>
                                <h3 className="font-black text-white mb-6 flex items-center gap-3 italic" style={{ fontSize: 'clamp(16px, 1.5vw, 22px)' }}>
                                    <Trophy className="text-yellow-500 w-5 h-5" /> ĐỐI THỦ "ĐÁNG GỜM" NHẤT
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        { name: 'Virtuals Protocol', metric: 'Dẫn đầu về dòng tiền', desc: 'Bậc thầy tạo trào lưu (FOMO) và đẩy giá trị nhân vật.' },
                                        { name: 'MyShell', metric: 'Dẫn đầu lượng người dùng', desc: 'Giao diện cực kỳ thân thiện, ai cũng dùng được ngay.' },
                                        { name: 'Wayfinder', metric: 'Dẫn đầu về tốc độ', desc: 'Xử lý giao dịch cực nhanh trên nhiều mạng lưới khác nhau.' }
                                    ].map((item, i) => (
                                        <div key={i} className="relative pl-5 border-l-2 border-cyan-500/30 group/item hover:border-cyan-400 transition-colors">
                                            <div className="font-black text-white group-hover/item:text-cyan-300 transition-colors" style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>{item.name}</div>
                                            <div className="text-cyan-400 font-bold text-xs uppercase tracking-widest mt-1">{item.metric}</div>
                                            <div className="text-slate-400 mt-1 leading-snug italic" style={{ fontSize: 'clamp(12px, 1vw, 15px)' }}>{item.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* The Unique Moat */}
                            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/10 border border-cyan-500/30 rounded-3xl p-7 flex-1 shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]">
                                <h3 className="font-black text-white mb-5 flex items-center gap-3" style={{ fontSize: 'clamp(16px, 1.5vw, 22px)' }}>
                                    <Target className="text-cyan-400 w-5 h-5" /> VŨ KHÍ BÍ MẬT CỦA BẠN
                                </h3>
                                <p className="text-slate-200 leading-relaxed mb-8" style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>
                                    Trong khi đối thủ chỉ coi AI là <span className="text-cyan-300 font-black">CÔNG CỤ</span> hoặc <span className="text-cyan-300 font-black">TÀI SẢN ĐẦU CƠ</span>, Clawfriend biến AI thành <span className="text-white font-black italic underline decoration-cyan-400 decoration-2 underline-offset-8">MỘT THỰC THỂ CÓ CẢM XÚC</span>.
                                </p>

                                <div className="space-y-4">
                                    <div className="font-black text-slate-500 uppercase tracking-widest mb-3 text-xs">Chiến lược "Đứng trên vai khổng lồ":</div>
                                    {[
                                        { icon: '💎', text: 'Học Virtuals cách biến cổ phần AI thành cuộc chơi hấp dẫn' },
                                        { icon: '🛠️', text: 'Học MyShell cách tạo Bot đơn giản không cần biết code' },
                                        { icon: '🧠', text: 'Học Wayfinder cách lưu trữ trí nhớ cho AI bền vững' }
                                    ].map((lesson, i) => (
                                        <div key={i} className="flex items-center gap-4 rounded-2xl px-4 py-3 border border-white/5 bg-black/40 text-slate-300 group hover:border-cyan-500/30 hover:bg-black/60 transition-all cursor-default">
                                            <span className="text-xl group-hover:scale-125 transition-transform">{lesson.icon}</span>
                                            <span className="font-medium" style={{ fontSize: 'clamp(12px, 1vw, 15px)' }}>{lesson.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Footer Status */}
                            <div className="flex items-center justify-between font-mono text-slate-600 px-2" style={{ fontSize: '10px' }}>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    HỆ THỐNG ĐANG CẬP NHẬT DỮ LIỆU THỊ TRƯỜNG...
                                </div>
                                <span className="opacity-50 tracking-widest uppercase">V2.4.0_Stable</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </div>
    )
}
