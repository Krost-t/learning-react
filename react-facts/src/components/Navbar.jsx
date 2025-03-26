import ImgLogo from "../img/react-logo.png"

export default function Navbar() {
    return (
        <header>
            <nav>
                <img src={ImgLogo} alt="React logo" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}