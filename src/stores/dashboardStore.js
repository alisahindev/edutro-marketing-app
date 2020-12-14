import { action, observable } from 'mobx';
import dashboardService from '../services/dashboardService';

class DashboardStore {
    @observable popularCourses = [];

    @action
    async getPopularCourses() {
        let result = await dashboardService.getPopularCourses();
        this.popularCourses = result.data.results;
    }
}

export default DashboardStore;