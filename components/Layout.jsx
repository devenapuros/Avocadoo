import { Topbar } from "@components/Topbar";
import { Footer } from "@components/Footer";
import { CartContextProvider } from "context/CartContext";

export const Layout = ({ children }) => {
    return (
        <CartContextProvider>
            <Topbar />
            {children}
            <Footer />
        </CartContextProvider>
    );
};
