import AlertProvider from "./context/AlertContext";
import CartProvider from "./context/CartContext";
import ConfigProvider from "./context/ConfigContext";
import LoginProvider from "./context/LoginContext";
import WrapRoutes from "./Routes/Routes";

const App = () => {

    return (
        <AlertProvider>
            <LoginProvider>
                <ConfigProvider>
                    <CartProvider>
                        <WrapRoutes />
                    </CartProvider>
                </ConfigProvider>
            </LoginProvider>
        </AlertProvider>
    );
};

export default App;