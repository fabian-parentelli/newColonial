import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/utils/ScrollToTop.jsx";
import NavBar from "../containers/NavBar/NavBar.jsx";
import Body from "../containers/Body/Body.jsx";
import Login from "../containers/user/Login/Login.jsx";
import Footer from "../containers/Footer/Footer.jsx";
import Register from "../containers/user/Register/Register.jsx";
import WhatEmail from "../containers/user/WhatEmail/WhatEmail.jsx";
import NewPassword from "../containers/user/NewPassword/NewPassword.jsx";
import DashBoard from "../containers/DashBoard/DashBoard.jsx";
import Avatars from "../containers/layouts/Avatars/Avatars.jsx";
import Product from "../containers/layouts/products/Product/Product.jsx";
import ProdQuery from "../components/products/ProdQuery/ProdQuery.jsx";
import ProductSectPage from "../containers/layouts/products/ProductSectPage/ProductSectPage.jsx";
import Bonus from "../containers/layouts/Bonus/Bonus.jsx";
import ProductAll from "../containers/layouts/products/ProductAll/ProductAll.jsx";
import Cart from "../containers/layouts/Cart/Cart.jsx";
import BadgeBody from "../containers/layouts/BadgeBody/BadgeBody.jsx";
import FallowUp from "../containers/layouts/FallowUp/FallowUp.jsx";
import Constructions from "../containers/layouts/Constructions/Constructions.jsx";

const WrapRoutes = () => {

    return (
        <BrowserRouter>
            <ScrollToTop>

                <NavBar />

                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/what_email" element={<WhatEmail />} />
                    <Route path="/password/:token" element={<NewPassword />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                    <Route path="/avatars" element={<Avatars />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/prodquery/:type/:name" element={<ProdQuery />} />
                    <Route path="/prodsect/:type" element={<ProductSectPage />} />
                    <Route path="/bonus" element={<Bonus />} />
                    <Route path="/all" element={<ProductAll />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/fallowup/:id" element={<FallowUp />} />

                    <Route path="/*" element={<Constructions />} />
                </Routes>

                <BadgeBody />
                <Footer />

            </ScrollToTop>
        </BrowserRouter>
    );
};

export default WrapRoutes;