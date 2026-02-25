import logoImage from './images/logo-text.png'

export default function Logo() {
    return (
        <div className="w-[129px] h-[40px] flex items-center">
            <img src={logoImage} alt="ClawFriend Logo" className="w-full h-full object-contain" />
        </div>
    )
}
