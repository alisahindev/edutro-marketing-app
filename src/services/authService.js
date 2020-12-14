import http from "./httpService";

class AuthService {
    async auth(payload) {
        let result = await http.post(`api/token/post/userToken`, payload);
        return result;
    }

    async register(payload) {
        let result = await http.post('api/user/create-user', payload);
        return result;
    }
}

export default new AuthService();