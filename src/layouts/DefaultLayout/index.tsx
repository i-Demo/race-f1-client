import Footer from "./Footer";
import Header from "./Header";

interface DefaultLayoutType {
    children: JSX.Element;
}
function DefaultLayout({ children }: DefaultLayoutType) {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 flex flex-col">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
