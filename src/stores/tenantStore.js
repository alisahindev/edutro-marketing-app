import { action, observable } from 'mobx';
import tenantService from '../services/tenantService';

class TenantStore {
    @observable tenant = {};
    @observable educator = {};

    @action
    async getTenantById(id) {
        let result = await tenantService.getTenantById(id);
        this.tenant = result.data;
    }

    action
    async getEducatorById(id) {
        let result = await tenantService.getEducatorById(id);
        this.educator = result.data;
    }
}

export default TenantStore;