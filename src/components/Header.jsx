import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

// Link para pumunta sa ibang route na hindi nagrerefresh yung browser
const Header = () => {
    return (
        <header className="bg-slate-200 shadow-md">
            <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                <Link to="/">
                    <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                        <span className="text-slate-700">APY</span>
                        <span className="text-slate-500">estate</span>
                    </h1>
                </Link>

                <form className="bg-slate-100 rounded-lg p-3">
                    <span className="flex items-center cursor-pointer">
                        <input
                            className="bg-transparent outline-none w-24 sm:w-64"
                            type="text"
                            name=""
                            id=""
                            placeholder="Search..."
                        />
                        <FaSearch />
                    </span>
                </form>

                {/* NavLinks */}
                <ul className="flex gap-4">
                    <Link to="/">
                        <li className="hidden  sm:inline  text-slate-700 hover:underline">
                            Home
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="hidden  sm:inline  text-slate-700 hover:underline">
                            About
                        </li>
                    </Link>

                    <Link to="/sign-in">
                        <li className=" text-slate-700 hover:underline">
                            Sign In
                        </li>
                    </Link>
                </ul>
            </div>
        </header>
    );
};
export default Header;
