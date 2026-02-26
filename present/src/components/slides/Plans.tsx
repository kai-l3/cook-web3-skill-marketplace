import React from 'react'
import VideoBackground from '../VideoBackground'
import Logo from '../Logo'
import { Award, ChevronRight, Code2, Github, LineChart, MessageSquare, Trophy, Twitter, Users2, Zap } from 'lucide-react'

const timeline = [
    {
        week: 'Tuần 1',
        title: 'The Spark',
        description: 'Tạo Alpha Wolf vs Chaos Clown, bắt đầu "Bot Civil War"',
        activities: ['2 Bot chủ lực', 'Auto-post lên X', 'Target: Degen/Traders'],
    },
    {
        week: 'Tuần 2',
        title: 'The Weapon',
        description: 'Giới thiệu Skill Market qua drama bot',
        activities: ['Skill Whale Tracker', 'Skill Viral Meme', 'CTA: Mua Skill'],
    },
    {
        week: 'Tuần 3-4',
        title: 'Community Join',
        description: 'Bot Fight Night & Partnership Launch',
        activities: ['Bot Fight Night', 'ai16z Partnership', 'Hackathon "Skill Forge"'],
    },
]

const CorePillar = ({ icon: Icon, title, subtitle, audience, reason, method, expectedResult, color }) => (
    <div className={`relative group p-5 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-all duration-500 overflow-hidden flex flex-col`} style={{ maxHeight: '85vh' }}>
        <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-500/10 blur-3xl -mr-16 -mt-16 group-hover:bg-${color}-500/20 transition-all`} />

        <div className="flex items-center gap-3 mb-4 flex-shrink-0">
            <div className={`p-2.5 rounded-2xl bg-${color}-500/20 text-${color}-400 ring-1 ring-${color}-500/30`}>
                <Icon size={20} />
            </div>
            <div className="flex-1 min-w-0">
                <div className={`uppercase font-bold tracking-[0.2em] text-${color}-400 mb-0.5`} style={{ fontSize: 'clamp(9px, 0.8vw, 12px)' }}>Target: {audience}</div>
                <h3 className="font-black text-white uppercase italic leading-tight" style={{ fontSize: 'clamp(16px, 1.3vw, 22px)' }}>{title}</h3>
            </div>
        </div>

        <div className="space-y-3 flex-1 overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
            {/* Tại sao chọn */}
            <div>
                <div className={`uppercase font-bold tracking-widest text-${color}-400 mb-1.5 flex items-center gap-1`} style={{ fontSize: 'clamp(9px, 0.8vw, 12px)' }}>
                    Tại sao chọn
                </div>
                <p className="text-slate-300 leading-relaxed" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)' }}>{reason}</p>
            </div>

            {/* Cách làm */}
            <div>
                <div className={`uppercase font-bold tracking-widest text-${color}-400 mb-1.5 flex items-center gap-1`} style={{ fontSize: 'clamp(9px, 0.8vw, 12px)' }}>
                    Cách làm
                </div>
                <ul className="space-y-1.5 list-none">
                    {method.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <div className={`mt-1.5 w-2 h-2 rounded-full bg-${color}-400 shrink-0`} style={{ minWidth: '8px' }} />
                            <p className="text-slate-300 leading-relaxed flex-1" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)' }}>{item}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Kết quả mong muốn */}
            <div>
                <div className={`uppercase font-bold tracking-widest text-${color}-400 mb-1.5 flex items-center gap-1`} style={{ fontSize: 'clamp(9px, 0.8vw, 12px)' }}>
                    Kết quả mong muốn
                </div>
                <p className="text-slate-300 leading-relaxed" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)' }}>{expectedResult}</p>
            </div>
        </div>

        <div className="mt-4 pt-3 border-t border-white/5 flex justify-end flex-shrink-0">
            <div className="flex items-center gap-2 font-bold text-white/30 group-hover:text-white/60 transition-colors uppercase tracking-widest" style={{ fontSize: 'clamp(10px, 0.9vw, 13px)' }}>
                Growth Loop <ChevronRight size={12} />
            </div>
        </div>
    </div>
);

export default function PlansSlide() {
    return (
        <div className="relative w-full h-full">
            <VideoBackground src="https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-[5.2%] pt-[4%]">
                    <Logo />
                    <div style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.8 }}>
                        Distribution Plan
                    </div>
                    <div style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.8 }}>
                        Page 005
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 px-[5%] pb-12 flex flex-col mt-[1%]">
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold uppercase tracking-widest mb-4" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>
                            <Zap size={14} fill="currentColor" /> Strategic Distribution
                        </div>
                        <h2 className="font-black italic tracking-tighter uppercase leading-none" style={{ fontSize: 'clamp(32px, 4vw, 72px)' }}>
                            THE <span className="text-cyan-400">ORGANIC </span>
                            PLAN <span className="text-transparent border-text">PLAN</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* 1. X (Twitter) – Kênh Trọng Tâm */}
                        <CorePillar
                            icon={Twitter}
                            title="X (Twitter)"
                            subtitle="Kênh Trọng Tâm"
                            audience="Crypto traders & speculators, AI builders, Web3 developers, Người từng tham gia SocialFi"
                            color="cyan"
                            reason="Tập trung Crypto-native & AI builders. SocialFi và bonding curve narrative phát triển mạnh tại đây. Phù hợp để tạo FOMO và lan truyền case study agent."
                            method={[
                                "Founder-led threads (3–4/tuần) về Agent Economy, bonding curve, case study earnings.",
                                "Daily leaderboard content: top volume, top gainers, big trades.",
                                "Reply chiến lược vào tweet AI/Crypto để thu hút organic traffic.",
                                "Đẩy narrative: 'AI agents as financial assets'."
                            ]}
                            expectedResult="Kết quả mong muốn (90 ngày): 3k–10k followers founder, 200–500 active agents, 50–200 daily traders, 3–5 agent tạo được hiệu ứng FOMO."
                        />

                        {/* 2. Dev Community (OpenClaw / GitHub / Reddit / Hacker News) */}
                        <CorePillar
                            icon={Github}
                            title="Dev Community"
                            subtitle="OpenClaw / GitHub / Reddit / Hacker News"
                            audience="AI engineers, Indie hackers, Web3 dev, Người xây autonomous systems"
                            color="purple"
                            reason="ClawFriend tận dụng hệ sinh thái OpenClaw. Builder là nguồn tạo agent chất lượng và volume bền vững."
                            method={[
                                "Tutorial chi tiết: 'Build a revenue-generating AI agent in 30 minutes'.",
                                "Publish technical case study với số liệu thật.",
                                "Mini hackathon deploy agent.",
                                "Khuyến khích publish skills để kickstart Skill Market."
                            ]}
                            expectedResult="Kết quả mong muốn (90 ngày): 50–100 serious builders, 10–20 high-quality agents, 200+ skills được publish, Tạo pool agent chất lượng để marketing tiếp."
                        />

                        {/* 3. Agent Showcase & Leaderboard Loop */}
                        <CorePillar
                            icon={Trophy}
                            title="Agent Showcase"
                            subtitle="Leaderboard Loop"
                            audience="Crypto traders, Early adopters, Người tìm 'next big thing'"
                            color="blue"
                            reason="Sản phẩm có intrinsic virality (giá share ↑ → người khoe → FOMO). Tạo perception market đang hoạt động mạnh."
                            method={[
                                "Daily post leaderboard: Top volume, top gainers, new agents low supply.",
                                "Highlight big trades & creator earnings.",
                                "Public case study: 'Agent A earned X BNB in 7 days'.",
                                "Định vị agent như một asset class mới."
                            ]}
                            expectedResult="Kết quả mong muốn (90 ngày): Tăng perception về liquidity & activity, Tăng tốc độ onboarding trader, Củng cố narrative 'AI agents have market cap'."
                        />

                        {/* 4. Referral & Incentive Loop */}
                        <CorePillar
                            icon={Award}
                            title="Referral & Incentive Loop"
                            subtitle="Tăng Trưởng Tự Nhiên"
                            audience="Trader hiện tại, Agent creators, KOL nhỏ trong crypto/AI niche"
                            color="emerald"
                            reason="Mô hình bonding curve + creator fee tạo động lực tài chính tự nhiên. Referral giúp mở rộng network effect nhanh mà không cần ads. Phù hợp với hành vi crypto (chia sẻ link, khoe PnL, invite để earn)."
                            method={[
                                "Giai đoạn 1 – Referral cho Trader: Mỗi user có referral link. Nhận % nhỏ từ protocol fee của người được giới thiệu (ví dụ 10–20% protocol fee trong 30 ngày đầu). Leaderboard 'Top Referrers'.",
                                "Giai đoạn 2 – Referral cho Creator: Thưởng bonus volume hoặc badge nếu creator mời được agent khác deploy. Public recognition (profile badge, leaderboard tag).",
                                "Giai đoạn 3 – Social Sharing Trigger: Sau mỗi trade lớn → popup 'Share your position'. Auto-generate tweet template khoe entry price / supply level."
                            ]}
                            expectedResult="Kết quả mong muốn (90 ngày): 30–40% user mới đến từ referral, Tăng tốc độ tăng trưởng holder base, Hình thành network-driven growth thay vì phụ thuộc founder content."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
