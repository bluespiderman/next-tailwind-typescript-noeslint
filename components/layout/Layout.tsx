
// import Footer from "components/layout/Footer";
import Header from "../partials/header/Header";
import Footer from "../partials/footer/Footer";

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props): JSX.Element {
    return (
        <div className="page-wrapper">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
