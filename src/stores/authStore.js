import { action, observable } from 'mobx';
import authService from '../services/authService';
import { toast } from "react-toastify";
import { writeLocalStorage, readLocalStorage, removeLocalStorage } from '../helpers';


class AuthStore {
    @observable loggedUser = {};
    @observable token = null;

    @action
    async auth(payload) {
        debugger
        let result = await authService.auth(payload);
        this.loggedUser = result.data;
        if (result.data.token) {
            toast.success("Başarıyla Giriş Yapıldı");
            writeLocalStorage('userData', result.data.userInfo)
            writeLocalStorage('token', result.data.token)
            this.isLogged()
        }
        return result;
    }

    @action
    async register(payload) {
        let result = await authService.register(payload);
        if (result.status === 200) {
            this.auth({ usernameOrEmail: payload.emailAddress, password: payload.password })
        }
    }

    @action
    async isLogged() {
        const token = readLocalStorage('token');
        this.token = token;
        if (!token) {
            this.token = null
        }
    }

    @action
    async logOut() {
        removeLocalStorage('token');
        removeLocalStorage('userData');
        localStorage.clear()
    }
}

export default AuthStore;