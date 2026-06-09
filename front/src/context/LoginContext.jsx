import { useAlertContext } from "./AlertContext";
import { loginApi } from "../helpers/session/login.api.js";
import { createContext, useContext, useState } from "react";
import { logoutApi } from '../helpers/session/logout.api.js';
import { currentApi } from "../helpers/session/current.api.js";
import { registerApi } from '../helpers/session/register.api.js';

import { userUpdateApi } from "../helpers/users/userUpdate.api.js"; // Elimiar #############
import { postSessionApi } from "../helpers/session/postSession.api.js";

const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

const LoginProvider = ({ children }) => {

    const { showAlert, setLoading } = useAlertContext();
    const [user, setUser] = useState({ data: null, logged: false });

    const postSessionCtx = async (values) => {
        const response = await postSessionApi(values);
        if (response.status === 'success') setUser({ data: response.result, logged: true });
        else {
            showAlert(response.error, 'error');
            setUser({ data: null, logged: false });
        };
    };

    const register = async (user) => {
        const response = await registerApi(user);
        if (response.status === 'success') {
            setUser({ data: response.result, logged: true });
            showAlert('Registro exitoso');
        } else {
            showAlert(response.error, 'error');
            setUser({ data: null, logged: false });
        };
    };

    const current = async () => {
        const response = await currentApi();
        if (response.status === 'success') setUser({ data: response.result, logged: true });
        else showAlert(response.error, 'error');
    };

    const logout = async () => {
        const response = await logoutApi();
        console.log(response);
        
        if (response.status === 'success') {
            setUser({ data: null, logged: false });
            showAlert('Hasta la próxima....', 'info');
        } else showAlert(response.error, 'error');
    };

    const login = async (user) => {
        const response = await loginApi(user);
        if (response.status === 'success') setUser({ data: response.result, logged: true });
        else {
            showAlert(response.error, 'error');
            setUser({ ...user, error: response.error });
        };
    };

    const updateUser = async (user) => { // esto se va ##########################################
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
            value={{ user, register, current, logout, login, updateUser, postSessionCtx }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;