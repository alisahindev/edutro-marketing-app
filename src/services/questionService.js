import http from "./httpService";
import { readLocalStorage } from "../helpers";

class QuestionService {
    async createQuestion(payload) {
        let result = await http.post(`api/question/create-question`, payload);
        return result;
    }

    async createAnswer(payload) {
        let result = await http.post(`api/question/create-answer`, payload);
        return result;
    }

    async getUserQuestions() {
        const userData = readLocalStorage('userData');
        let result = await http.get(`api/question/get-user-questions?userId=${userData.id}`);
        return result;
    }

    async getQuestionDetail(id) {
        let result = await http.get(`api/question/get-question-detail?id=${id}`);
        return result;
    }
}

export default new QuestionService();