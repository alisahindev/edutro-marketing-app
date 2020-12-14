import http from "./httpService";

class TenantService {
    async getTenantById(id) {
        let result = await http.get(`api/tenant/get-details/by-id?id=${id}`);
        return result;
    }

    async getEducatorById(id) {
        let result = await http.get(`api/educator/get-educator/by-id?educatorId=${id}`);
        return result;
    }
}

export default new TenantService();