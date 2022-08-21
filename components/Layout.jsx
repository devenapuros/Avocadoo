import { Topbar } from "@components/Topbar";
import { Footer } from "@components/Footer";

export const Layout = ({ children }) => {
    return (
        <>
            <Topbar />
            {children}
            <Footer />
        </>
    );
};
