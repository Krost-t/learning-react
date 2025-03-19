import ReactLogo from '../assets/react-logo.png';

export default function Navbar() {
    return (
        <header>
            <nav>
                <img src={ReactLogo} alt="React logo" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}
