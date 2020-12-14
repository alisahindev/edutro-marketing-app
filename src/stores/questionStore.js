import { action, observable } from 'mobx';
import questionService from '../services/questionService';
import { readLocalStorage } from '../helpers';

class QuestionStore {
    @observable createQuestionResponse = {};
    @observable questions = {};
    @observable selectedQuestion = {};

    @action
    async createQuestion(payload) {
        let result = await questionService.createQuestion(payload);
        this.createQuestionResponse = result.data;
    }

    async createAnswer(payload) {
        const userData = readLocalStorage('userData');
        payload.entityId = userData.id;
        await questionService.createAnswer(payload);
        this.getQuestionDetail(payload.questionId)
    }


    @action
    async getUserQuestions() {
        let result = await questionService.getUserQuestions();
        this.questions = result.data;
    }

    @action
    async getQuestionDetail(id) {
        let result = await questionService.getQuestionDetail(id)
        this.selectedQuestion = result.data;
    }
}

export default QuestionStore;