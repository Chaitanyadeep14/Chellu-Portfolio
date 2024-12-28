import logo from "../assets/chLogo.png";
import { FaLinkedin, FaGithub} from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-15 w-20" src={logo} alt="logo" />
      </div>
      <div className="ml-auto flex items-center justify-center gap-4 text-3xl">
        <a
          href="https://in.linkedin.com/in/chaitanya-deep-chellu-4a2a32213"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Chaitanyadeep14"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:text-purple-700"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.hackerrank.com/profile/chaitanyadeepch1"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:text-green-500"
        >
          <SiHackerrank />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
