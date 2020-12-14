import { action, observable } from 'mobx';
import courseService from '../services/courseService';

class CourseStore {
    @observable course = {};
    @observable searchCourseResult = [];

    @action
    async getCourseById(courseId) {
        let result = await courseService.getCourseById(courseId);
        this.course = result.data;
    }

    @action
    async searchCourses(search) {
        let result = await courseService.searchCourses(search);
        this.searchCourseResult = result.data.results;
    }
}

export default CourseStore;