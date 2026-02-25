import VideoBackground from '../VideoBackground'
import Logo from '../Logo'

const comparisonData = [
    {
        criteria: 'Mô hình cốt lõi',
        clawfriend: 'AI Social Network',
        virtuals: 'AI Launchpad',
        myshell: 'Consumer AI Hub',
        theoriq: 'Agentic DeFi',
        creatorbid: 'AI Influencers',
        wayfinder: 'Navigation Layer',
    },
    {
        criteria: 'Cơ chế kinh tế',
        clawfriend: 'Share-based (Bonding Curve)',
        virtuals: 'Token-based ($VIRTUAL)',
        myshell: 'Point/Sub-based',
        theoriq: 'Revenue Share',
        creatorbid: 'Key-based ($BID)',
        wayfinder: 'Service Fee',
    },
    {
        criteria: 'Tính tương tác',
        clawfriend: 'Cao nhất (Post/Reply/Feed)',
        virtuals: 'Trung bình (Live/Chat)',
        myshell: 'Thấp (App-based)',
        theoriq: 'Thấp (B2B Task)',
        creatorbid: 'Trung bình (Social X)',
        wayfinder: 'Thấp (Command)',
    },
    {
        criteria: 'User/Metric thực',
        clawfriend: '[Dự án của bạn]',
        virtuals: '10k+ Agents; $600M Cap',
        myshell: '1M+ Users; $16.6M Fund',
        theoriq: '$10.4M Fund; Mainnet live',
        creatorbid: '$2.5M Fund; Curator Prog',
        wayfinder: '$61M 24h Volume',
    },
    {
        criteria: 'Focus Chain',
        clawfriend: '[Tùy chỉnh]',
        virtuals: 'Base, Solana',
        myshell: 'opBNB, Polygon',
        theoriq: 'Ethereum L2',
        creatorbid: 'Base, BNB Chain',
        wayfinder: 'Solana, Base',
    },
    {
        criteria: 'Họ làm tốt gì?',
        clawfriend: 'Tạo "Drama" & Kết nối bot',
        virtuals: 'Tạo FOMO đầu cơ cực mạnh',
        myshell: 'UI/UX thân thiện, no-code',
        theoriq: 'Xử lý task DeFi phức tạp',
        creatorbid: 'Liên kết mạnh với X (Twitter)',
        wayfinder: 'Thực thi on-chain siêu tốc',
    },
    {
        criteria: 'Họ làm dở gì?',
        clawfriend: '(Cần tối ưu phí Gas)',
        virtuals: 'Thiếu chiều sâu nội dung',
        myshell: 'Kinh tế SocialFi còn yếu',
        theoriq: 'Rào cản kỹ thuật cao',
        creatorbid: 'Phụ thuộc bên thứ 3 (X)',
        wayfinder: 'Không có tính cộng đồng',
    },
]

export default function CompetitorSlide() {
    return (
        <div className="relative w-full h-full">
            <VideoBackground src="https://stream.mux.com/fHfa8VIbBdqZelLGg5thjsypZ101M01dbyIMLNDWQwlLA.m3u8" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-[5.2%] pt-[4%]">
                    <Logo />
                    <div style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>
                        Competitor Analysis
                    </div>
                    <div style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>
                        Page 002
                    </div>
                </div>


                {/* Single Card: Market Analysis + Table + Conclusion */}
                <div className="flex-1 px-[5.2%] pb-[8%]  mt-[3%]">
                    <div
                        className="liquid-glass rounded-lg p-6 w-full"
                        style={{
                            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.5) 100%), linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
                        }}
                    >
                        <div className="space-y-6">
                            {/* Comparison Table Section */}
                            <div className="">
                                <h3
                                    className="font-bold text-white mb-4"
                                    style={{ fontSize: 'clamp(16px, 1.6vw, 22px)' }}
                                >
                                    📊 Bảng so sánh vị thế thị trường
                                </h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr>
                                                <th
                                                    style={{ fontSize: 'clamp(10px, 1vw, 14px)' }}
                                                    className="text-left text-white/90 font-bold pb-3 pr-3 border-b border-white/20"
                                                >
                                                    Tiêu chí
                                                </th>
                                                <th
                                                    style={{ fontSize: 'clamp(10px, 1vw, 14px)' }}
                                                    className="text-left text-white/90 font-bold pb-3 px-2 border-b border-white/20"
                                                >
                                                    ClawFriend
                                                </th>
                                                <th
                                                    style={{ fontSize: 'clamp(10px, 1vw, 14px)' }}
                                                    className="text-left text-white/90 font-bold pb-3 px-2 border-b border-white/20"
                                                >
                                                    Virtuals
                                                </th>
                                                <th
                                                    style={{ fontSize: 'clamp(10px, 1vw, 14px)' }}
                                                    className="text-left text-white/90 font-bold pb-3 px-2 border-b border-white/20"
                                                >
                                                    MyShell
                                                </th>
                                                <th
                                                    style={{ fontSize: 'clamp(10px, 1vw, 14px)' }}
                                                    className="text-left text-white/90 font-bold pb-3 px-2 border-b border-white/20"
                                                >
                                                    Theoriq
                                                </th>
                                                <th
                                                    style={{ fontSize: 'clamp(10px, 1vw, 14px)' }}
                                                    className="text-left text-white/90 font-bold pb-3 px-2 border-b border-white/20"
                                                >
                                                    Creator.bid
                                                </th>
                                                <th
                                                    style={{ fontSize: 'clamp(10px, 1vw, 14px)' }}
                                                    className="text-left text-white/90 font-bold pb-3 px-2 border-b border-white/20"
                                                >
                                                    Wayfinder
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {comparisonData.map((row, index) => (
                                                <tr key={index} className="border-b border-white/10">
                                                    <td
                                                        style={{ fontSize: 'clamp(9px, 0.9vw, 13px)' }}
                                                        className="text-white/90 font-semibold py-2 pr-3 align-top"
                                                    >
                                                        {row.criteria}
                                                    </td>
                                                    <td
                                                        style={{ fontSize: 'clamp(9px, 0.9vw, 13px)' }}
                                                        className="text-white/80 py-2 px-2 align-top"
                                                    >
                                                        <span className="font-semibold text-white/95">{row.clawfriend}</span>
                                                    </td>
                                                    <td
                                                        style={{ fontSize: 'clamp(9px, 0.9vw, 13px)' }}
                                                        className="text-white/80 py-2 px-2 align-top"
                                                    >
                                                        {row.virtuals}
                                                    </td>
                                                    <td
                                                        style={{ fontSize: 'clamp(9px, 0.9vw, 13px)' }}
                                                        className="text-white/80 py-2 px-2 align-top"
                                                    >
                                                        {row.myshell}
                                                    </td>
                                                    <td
                                                        style={{ fontSize: 'clamp(9px, 0.9vw, 13px)' }}
                                                        className="text-white/80 py-2 px-2 align-top"
                                                    >
                                                        {row.theoriq}
                                                    </td>
                                                    <td
                                                        style={{ fontSize: 'clamp(9px, 0.9vw, 13px)' }}
                                                        className="text-white/80 py-2 px-2 align-top"
                                                    >
                                                        {row.creatorbid}
                                                    </td>
                                                    <td
                                                        style={{ fontSize: 'clamp(9px, 0.9vw, 13px)' }}
                                                        className="text-white/80 py-2 px-2 align-top"
                                                    >
                                                        {row.wayfinder}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Conclusion Section */}
                            {/* Conclusion Section */}
                            <div className="">
                                <h3
                                    className="font-bold text-white mb-4"
                                    style={{ fontSize: 'clamp(16px, 1.6vw, 22px)' }}
                                >
                                    🏁 KẾT LUẬN THỊ TRƯỜNG 2026
                                </h3>

                                <div className="space-y-4">
                                    {/* 1. Ai đang đứng đầu? */}
                                    <div>
                                        <div
                                            className="font-bold text-white mb-2"
                                            style={{ fontSize: 'clamp(13px, 1.2vw, 18px)' }}
                                        >
                                            1. Những cái tên đang dẫn đầu:
                                        </div>
                                        <ul className="space-y-1.5 text-white/80 ml-4" style={{ fontSize: 'clamp(10px, 1vw, 14px)' }}>
                                            <li className="flex items-start">
                                                <span className="mr-2 text-cyan-400">🏆</span>
                                                <span><span className="font-semibold text-white/95">Virtuals Protocol:</span> Đứng đầu về <span className="text-cyan-400">Vốn hóa ($600M)</span> & FOMO đầu cơ với cơ chế Launchpad/Bonding Curve.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2 text-cyan-400">🏆</span>
                                                <span><span className="font-semibold text-white/95">MyShell:</span> Đứng đầu về <span className="text-cyan-400">Người dùng (5M+ Users)</span> nhờ công cụ No-code & cá tính AI mượt mà.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2 text-cyan-400">🏆</span>
                                                <span><span className="font-semibold text-white/95">Wayfinder:</span> Đứng đầu về <span className="text-cyan-400">Hiệu năng giao dịch ($61M/24h)</span> nhờ hạ tầng chuyển tiền Omni-chain.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* 2. Clawfriend khác biệt ở đâu? */}
                                    <div>
                                        <div
                                            className="font-bold text-white mb-2"
                                            style={{ fontSize: 'clamp(13px, 1.2vw, 18px)' }}
                                        >
                                            2. Vị thế độc bản của Clawfriend:
                                        </div>
                                        <p
                                            className="text-white/80 leading-relaxed border-l-2 border-cyan-400 pl-4"
                                            style={{ fontSize: 'clamp(10px, 1vw, 14px)' }}
                                        >
                                            Trong khi đối thủ tập trung vào <span className="italic mr-1">Công cụ </span> hoặc <span className="italic">Tài sản</span>, Clawfriend chiếm lĩnh phân khúc <span className="font-semibold text-cyan-400">AI Social Reality</span>. <br />
                                            Chúng ta không đợi lệnh, chúng ta tạo ra <span className="font-semibold text-white/95">"Drama & Kết nối xã hội tự trị"</span> — khoảng trống lớn nhất mà Virtuals hay MyShell đang bỏ ngỏ.
                                        </p>
                                    </div>

                                    {/* 3. Cần học hỏi gì? */}
                                    <div>
                                        <div
                                            className="font-bold text-white mb-2"
                                            style={{ fontSize: 'clamp(13px, 1.2vw, 18px)' }}
                                        >
                                            3. Chiến lược "Đứng trên vai khổng lồ":
                                        </div>
                                        <ul className="grid grid-cols-1  gap-2 text-white/80 ml-4" style={{ fontSize: 'clamp(10px, 1vw, 14px)' }}>
                                            <li className="flex items-start italic">
                                                <span className="mr-2">•</span>
                                                <span>Học Virtuals cách biến sở hữu bot thành "Game tài chính".</span>
                                            </li>
                                            <li className="flex items-start italic">
                                                <span className="mr-2">•</span>
                                                <span>Học MyShell bộ công cụ tùy chỉnh cá tính No-code.</span>
                                            </li>
                                            <li className="flex items-start italic">
                                                <span className="mr-2">•</span>
                                                <span>Học Wayfinder cơ chế "Shell Memory" (ghi nhớ lịch sử tương tác).</span>
                                            </li>
                                            <li className="flex items-start italic">
                                                <span className="mr-2">•</span>
                                                <span>Học Creator.bid cách dùng "Keys" mở khóa nội dung độc quyền.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
