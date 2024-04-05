// Layout.tsx
import { Outlet } from 'react-router-dom';
import Header from "./components/Header/Header";
import Slider from "./components/Panel/Slider/Slider";
import Footer from "./components/Footer/Footer";

const Layout = () => (
    <>
        <Header/>
        <Slider/>
        <main style={{ width: '90%', margin: '0 auto', maxWidth: 2100 }}>
            <Outlet />
        </main>
        <Footer/>
    </>
);

export default Layout;
