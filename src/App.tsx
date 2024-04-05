import React, {useEffect} from 'react';
import './styles/App.css';
import {AnimatePresence} from "framer-motion";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home/Home";
import Afisha from "./pages/Afisha/Afisha";

function AnimationRouter() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const location = useLocation();
    return <AnimatePresence mode={'wait'}>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/event/:id" element={<Afisha />} />
                <Route path={'/excursions/:id'} element={<Afisha/>}/>
            </Route>
        </Routes>
    </AnimatePresence>
}

function App() {
    return <BrowserRouter>
                <AnimationRouter/>
            </BrowserRouter>
}

export default App;
