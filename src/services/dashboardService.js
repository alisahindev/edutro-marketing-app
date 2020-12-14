import http from "./httpService";

class DashboardService {
    async getPopularCourses() {
        let result = await http.get('api/course/get-all-courses');
        return result;
    }
}

export default new DashboardService();