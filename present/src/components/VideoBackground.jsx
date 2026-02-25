import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

export default function VideoBackground({ src }) {
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
        <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
        />
    )
}
