import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import logo from "@assets/images/F1.svg";

function Header() {
    return (
        <div>
            <header className="h-16 md:h-[71px] text-sm md:text-base w-full bg-secondary flex justify-between sm:justify-start items-center relative">
                <Link to="/">
                    <img src={logo} alt="Logo" className="text-white max-w-[120px] w-[80px] md:w-[120px] ml-6" />
                </Link>

                <nav className="sm:flex hidden justify-center text-white font-bold sm:w-full h-full whitespace-nowrap text-center transition-all">
                    <Link to="/races" className="hover:bg-black flex justify-center items-center h-full w-[120px] ">
                        Results
                    </Link>
                    <Link to="/drivers" className="hover:bg-black flex justify-center items-center h-full w-[120px]">
                        Drivers
                    </Link>
                    <Link to="/teams" className="hover:bg-black flex justify-center items-center h-full w-[120px]">
                        Teams
                    </Link>
                    <Link to="/awards" className="hover:bg-black flex justify-center items-center h-full w-[120px]">
                        Fastest Lap
                    </Link>
                </nav>

                <Tippy
                    interactive
                    hideOnClick
                    trigger="click"
                    offset={[0, 0]}
                    placement="bottom-end"
                    render={(attrs) => (
                        <div className="box sm:hidden" tabIndex={-1} {...attrs}>
                            <nav
                                className={`rounded-b-md border-b-2 border-red-600 bg-primary text-white font-semibold absolute right-[-62px]`}
                            >
                                <Link
                                    to="/races"
                                    className="flex justify-center items-center h-12 w-48 hover:text-red-600 hover:bg-gray-600"
                                >
                                    Results
                                </Link>
                                <Link
                                    to="/drivers"
                                    className="flex justify-center items-center h-12 w-48 hover:text-red-600 hover:bg-gray-600"
                                >
                                    Drivers
                                </Link>
                                <Link
                                    to="/teams"
                                    className="flex justify-center items-center h-12 w-48 hover:text-red-600 hover:bg-gray-600"
                                >
                                    Teams
                                </Link>
                                <Link
                                    to="/awards"
                                    className="flex justify-center items-center h-12 w-48 hover:text-red-600 hover:bg-gray-600"
                                >
                                    Fastest Lap
                                </Link>
                            </nav>
                        </div>
                    )}
                >
                    <div className="sm:hidden p-4 cursor-pointer">
                        <BiMenu className="text-3xl" />
                    </div>
                </Tippy>
            </header>
        </div>
    );
}

export default Header;
