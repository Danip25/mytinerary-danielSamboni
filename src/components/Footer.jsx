import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
        <h2 className="text-2xl font-bold">MyTinerary</h2>
        <p className="font-serif">Find your perfect trip, designed by insiders who know and love their cities!</p>
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
                <Link to="/">Join Us</Link>
            </li>
        </ul>
        <hr className="my-4" />
        <p>&copy; 2024 My Trips. All rights reserved.</p>
        <hr className="my-4" />
        <div className="flex flex-col gap-2">
        <h3>Contact Us</h3>
        <section className="flex justify-center gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook.png" width={20} alt="facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter.png" width={20} alt="twitter" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png" width={20} alt="instagram" />
            </a>
            <a href="https://www.pinterest.com" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/pinterest.png" width={20} alt="pinterest" />
            </a>
        </section>
        </div>
    </footer>
  )
}

export default Footer