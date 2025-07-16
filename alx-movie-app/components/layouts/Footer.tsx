import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171D22] text-white py-10 px-6 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <h2 className="text-xl md:text-4xl font-semibold mb-4 md:mb-0">
          Cine<span className="text-[#E2D609]">Seek</span>
        </h2>
        <nav className="flex justify-center space-x-6 mb-4 md:mb-0">
          <Link href="/" className="hover:text-[#E2D609]">Home</Link>
          <Link href="/movies" className="hover:text-[#E2D609]">Movies</Link>
          <Link href="/contact" className="hover:text-[#E2D609]">Contact</Link>
          <Link href="/privacy" className="hover:text-[#E2D609]">Privacy Policy</Link>
        </nav>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-[#E2D609]"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className="hover:text-[#E2D609]"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#" className="hover:text-[#E2D609]"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
      <p className="mt-8 text-center text-sm text-gray-400">
        &copy; 2024 CineSeek. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
