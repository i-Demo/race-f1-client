import logo from "@assets/images/F1.svg";

function Footer() {
    return (
        <div className="bg-primary min-h-[80px] flex justify-between items-center text-[#d0d0d2] text-sm px-6">
            <div>
                <img src={logo} alt="Logo" className="w-[84px]" />
            </div>
            <div>
                <p>© 2003-2023 Formula One World Championship Limited</p>
                <p >Copyright <span className="underline">i Demo</span></p>
            </div>
        </div>
    );
}

export default Footer;
