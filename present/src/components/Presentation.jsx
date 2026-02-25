import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react'

export default function Presentation({ slides }) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [showControls, setShowControls] = useState(true)
    const [controlsTimeout, setControlsTimeout] = useState(null)

    const totalSlides = slides.length

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev))
    }, [totalSlides])

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev))
    }, [])

    const toggleFullscreen = useCallback(() => {
        if (!isFullscreen) {
            document.documentElement.requestFullscreen?.()
            setIsFullscreen(true)
        } else {
            document.exitFullscreen?.()
            setIsFullscreen(false)
        }
    }, [isFullscreen])

    const showControlsTemporarily = useCallback(() => {
        setShowControls(true)
        if (controlsTimeout) {
            clearTimeout(controlsTimeout)
        }
        const timeout = setTimeout(() => {
            setShowControls(false)
        }, 3000)
        setControlsTimeout(timeout)
    }, [controlsTimeout])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
                e.preventDefault()
                nextSlide()
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault()
                prevSlide()
            } else if (e.key === 'f' || e.key === 'F') {
                e.preventDefault()
                toggleFullscreen()
            } else if (e.key === 'Escape') {
                if (isFullscreen) {
                    document.exitFullscreen?.()
                    setIsFullscreen(false)
                }
            }
        }

        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement)
        }

        const handleMouseMove = () => {
            showControlsTemporarily()
        }

        window.addEventListener('keydown', handleKeyDown)
        document.addEventListener('fullscreenchange', handleFullscreenChange)
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('fullscreenchange', handleFullscreenChange)
            window.removeEventListener('mousemove', handleMouseMove)
            if (controlsTimeout) {
                clearTimeout(controlsTimeout)
            }
        }
    }, [nextSlide, prevSlide, toggleFullscreen, isFullscreen, showControlsTemporarily, controlsTimeout])

    return (
        <div className="relative w-full h-full overflow-hidden bg-black">
            {slides.map((Slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${index === currentSlide
                        ? 'opacity-100 scale-100 z-10'
                        : index < currentSlide
                            ? 'opacity-0 scale-95 z-0'
                            : 'opacity-0 scale-105 z-0'
                        }`}
                >
                    <Slide />
                </div>
            ))}

            {/* Controls */}
            <div
                className={`fixed bottom-0 left-0 right-0 z-50 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex items-center justify-between px-[5.2%] py-4">
                    {/* Left: Slide counter */}
                    <div className="text-white/50" style={{ fontSize: 'clamp(12px, 0.9vw, 13px)' }}>
                        <span className="tabular-nums">
                            {currentSlide + 1} / {totalSlides}
                        </span>
                    </div>

                    {/* Center: Progress dots */}
                    <div className="flex items-center gap-2">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-300 ${index === currentSlide
                                    ? 'w-6 h-1.5 bg-white/90 rounded-full'
                                    : 'w-1.5 h-1.5 bg-white/30 rounded-full'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Right: Navigation buttons */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={prevSlide}
                            disabled={currentSlide === 0}
                            className="p-2 text-white/50 hover:text-white/90 hover:bg-white/10 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <div className="w-px h-6 bg-white/20" />
                        <button
                            onClick={nextSlide}
                            disabled={currentSlide === totalSlides - 1}
                            className="p-2 text-white/50 hover:text-white/90 hover:bg-white/10 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <ChevronRight size={20} />
                        </button>
                        <div className="w-px h-6 bg-white/20" />
                        <button
                            onClick={toggleFullscreen}
                            className="p-2 text-white/50 hover:text-white/90 hover:bg-white/10 rounded transition-colors"
                        >
                            {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
