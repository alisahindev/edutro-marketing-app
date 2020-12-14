import DashboardStore from "./dashboardStore";
import CourseStore from "./courseStore";
import LocationStore from "./locationStore";
import TenantStore from "./tenantStore";
import QuestionStore from "./questionStore";
import AuthStore from "./authStore";
import LoaderStore from "./loaderStore";

export default function initializeStores() {
    return {
        dashboardStore: new DashboardStore(),
        courseStore: new CourseStore(),
        locationStore: new LocationStore(),
        tenantStore: new TenantStore(),
        questionStore: new QuestionStore(),
        authStore: new AuthStore(),
        loaderStore: new LoaderStore()
    };
}