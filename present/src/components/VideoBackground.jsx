import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

export default function VideoBackground({ src, opacity = 90 }) {
    const videoRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current
        if (!video || !src) return

        if (Hls.isSupported()) {
            const hls = new Hls({
                enableWorker: true,
            })
            hls.loadSource(src)
            hls.attachMedia(video)
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                video.play().catch(() => { })
            })
            return () => {
                hls.destroy()
            }
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            // Safari native HLS
            video.src = src
            video.play().catch(() => { })
        }
    }, [src])

    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/90 z-10" />
            <video
                autoPlay
                muted
                loop
                className={`w-full h-full object-cover opacity-${opacity} scale-105`}
            >
                <source src={src} type="application/x-mpegURL" />
            </video>
        </div>
    )
}
