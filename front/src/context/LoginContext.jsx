import { useAlertContext } from "./AlertContext";
import { createContext, useContext, useState } from "react";
import { userRegisterApi } from "../helpers/users/userRegister.api.js";
import { userCurrentApi } from '../helpers/users/userCurrent.api.js';
import { userLoginApi } from '../helpers/users/userLogin.api.js';
import { userUpdateApi } from "../helpers/users/userUpdate.api.js";

const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

const LoginProvider = ({ children }) => {

    const { showAlert, setLoading } = useAlertContext();
    const [user, setUser] = useState({ data: null, logged: false });

    const register = async (user) => {
        setLoading(true);
        const response = await userRegisterApi(user);
        if (response.status === 'success') {
            localStorage.setItem('token', response.accesToken);
            await current();
            showAlert('Registro exitoso');
        } else {
            showAlert(response.error, 'error');
            setUser({ data: null, logged: false });
        };
        setLoading(false);
    };

    const current = async () => {
        const response = await userCurrentApi();
        if (response) {
            if (!response.active) {
                showAlert('Error de permisos, comunicate con nosotros', 'error');
                localStorage.removeItem('token');
                setUser({ data: null, logged: false });
            } else setUser({ data: response, logged: true });
        };
    };

    const logout = () => {
        setUser({ data: null, logged: false });
        localStorage.removeItem('token');
        localStorage.removeItem('path');
        showAlert('Cerraste sesión, nos vemos pronto !!!!', 'info');
    };

    const login = async (user) => {
        setLoading(true);
        const response = await userLoginApi(user);
        if (response.status === 'success') {
            localStorage.setItem('token', response.accesToken);
            await current();
            showAlert('Iniciaste sessión !!!');
        } else {
            showAlert(response.error, 'error');
            setUser({ ...user, error: response.error });
        };
        setLoading(false);
    };

    const updateUser = async (user) => {
        setLoading(true);
        const response = await userUpdateApi(user);
        if (response.status === 'success') {
            localStorage.setItem('token', response.accesToken);
            await current();
            showAlert('Actualizacion exitosa');
        } else {
            showAlert(response.error, 'error');
            setUser({ ...user, error: response.error });
        };
        setLoading(false);
    };

    return (
        <LoginContext.Provider
            value={{ user, register, current, logout, login, updateUser }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;