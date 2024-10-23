import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
        <h2 className="text-2xl font-bold">MyTinerary</h2>
        <p className="">Find your perfect trip, designed by insiders who know and love their cities!</p>
        <img src={Logo} alt="airplane" className="m-auto" />
        <hr className="my-4" />
        <ul className="flex justify-center gap-4">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/cities">Cities</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
        <hr className="my-4" />
        <p>&copy; 2024 MyTinerary. All rights reserved.</p>
        <hr className="my-4" />
        <div className="flex flex-col gap-2">
        <h3>Contact Us</h3>
        <section className="flex justify-center gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook.png" width={20} alt="facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="invert">
                <img src="https://img.icons8.com/x" width={18} alt="twitter" />
            </a>
            <a href="mailto:danielsambonic@hotmail.com" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/gmail.png" width={20} alt="instagram" />
            </a>
            <a href="https://github.com/Danip25" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" width={20} alt="pinterest" />
            </a>
        </section>
        <p className="text-xs mt-4 text-center font-coursive">Daniel Samboni</p>
        </div>
    </footer>
  )
}

export default Footer