import React from 'react';

// Import all components
const Main = React.lazy(() => import('./pages/Home/indexMain'));
const Agency = React.lazy(() => import('./pages/Agency/index'));
const Saas = React.lazy(() => import('./pages/Saas/index'));
const Apps = React.lazy(() => import('./pages/Apps/index'));
const Studio = React.lazy(() => import('./pages/Studio/index'));
const Business = React.lazy(() => import('./pages/Business/index'));
const Marketing = React.lazy(() => import('./pages/Marketing/index'));
const Hotel = React.lazy(() => import('./pages/Hotel/index'));
const ModernBusiness = React.lazy(() => import('./pages/ModernBusiness/index'));
const Coworking = React.lazy(() => import('./pages/Coworking/index'));
const CloudHosting = React.lazy(() => import('./pages/CloudHosting/index'));
const Event = React.lazy(() => import('./pages/Event/index'));
const Course = React.lazy(() => import('./pages/Course/index'));
const Personal = React.lazy(() => import('./pages/Personal/index'));
const SingleProduct = React.lazy(() => import('./pages/SingleProduct/index'));
const Enterprise = React.lazy(() => import('./pages/Enterprise/index'));
const Portfolio = React.lazy(() => import('./pages/Portfolio/index'));
const Services = React.lazy(() => import('./pages/Services/index'));
const ChangeLog = React.lazy(() => import('./pages/ChangeLog'));
const Components = React.lazy(() => import('./pages/Components'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const PageAboutUs = React.lazy(() => import('./pages/PageAboutUs'));
const PageBlog = React.lazy(() => import('./pages/PageBlog'));
const PageBlogDetail = React.lazy(() => import('./pages/PageBlogDetail'));
const PageBlogSidebar = React.lazy(() => import('./pages/PageBlogSidebar'));
const PageContactOne = React.lazy(() => import('./pages/PageContactOne'));
const PageContactThree = React.lazy(() => import('./pages/PageContactThree'));
const PageContactTwo = React.lazy(() => import('./pages/PageContactTwo'));
const PageJobApply = React.lazy(() => import('./pages/PageJobApply'));
const QuestionDetail = React.lazy(() => import('./pages/Questions/components/questionDetail'));

const PageJobDetail = React.lazy(() => import('./pages/PageJobDetail'));
const Notifications = React.lazy(() => import('./pages/Notifications'));
const Questions = React.lazy(() => import('./pages/Questions'));
const EducatorDetail = React.lazy(() => import('./pages/EducatorDetail'));
const PageJob = React.lazy(() => import('./pages/PageJob'));
const PagePricing = React.lazy(() => import('./pages/PagePricing'));
const PagePrivacy = React.lazy(() => import('./pages/PagePrivacy'));
const PageServices = React.lazy(() => import('./pages/PageServices'));
const PageTeam = React.lazy(() => import('./pages/PageTeam'));
const PageTerms = React.lazy(() => import('./pages/PageTerms'));
const PageWork = React.lazy(() => import('./pages/PageWork'));
const PageWorkDetail = React.lazy(() => import('./pages/PageWorkDetail'));
const SearchCourse = React.lazy(() => import('./pages/SearchCourse'));


const routes = [

    // public Routes
    { path: '/egitim-ara', component: SearchCourse },
    { path: '/index-saas', component: Saas },
    { path: '/index-apps', component: Apps },
    { path: '/index-agency', component: Agency },
    { path: '/index-studio', component: Studio },
    { path: '/index-business', component: Business },
    { path: '/index-marketing', component: Marketing },
    { path: '/index-hotel', component: Hotel },
    { path: '/index-modern-business', component: ModernBusiness },
    { path: '/index-coworking', component: Coworking },
    { path: '/index-cloud-hosting', component: CloudHosting },
    { path: '/index-event', component: Event },
    { path: '/index-course', component: Course },
    { path: '/index-personal', component: Personal },
    { path: '/index-single', component: SingleProduct },
    { path: '/index-enterprise', component: Enterprise },
    { path: '/index-portfolio', component: Portfolio },
    { path: '/index-services', component: Services },
    { path: '/changelog', component: ChangeLog },
    { path: '/components', component: Components },
    { path: '/sorularim/:name/:id', component: QuestionDetail, private: true },
    { path: '/documentation', component: Documentation },
    { path: '/egitmenler/:educatorName', component: PageAboutUs },
    { path: '/page-blog', component: PageBlog },
    { path: '/page-blog-detail', component: PageBlogDetail },
    { path: '/page-blog-sidebar', component: PageBlogSidebar },
    { path: '/page-contact-one', component: PageContactOne },
    { path: '/page-contact-three', component: PageContactThree },
    { path: '/page-contact-two', component: PageContactTwo },
    { path: '/egitimler/basvuru-yap', component: PageJobApply },
    { path: '/egitimler/:courseName', component: PageJobDetail },
    { path: '/page-job', component: PageJob },
    { path: '/bildirimler', component: Notifications, private: true },
    { path: '/sorularim', component: Questions, private: true },
    { path: '/page-pricing', component: PagePricing },
    { path: '/egitmen/:name', component: EducatorDetail },
    { path: '/page-privacy', component: PagePrivacy },
    { path: '/page-services', component: PageServices },
    { path: '/page-team', component: PageTeam },
    { path: '/page-terms', component: PageTerms },
    { path: '/egitimler', component: PageWork },
    { path: '/page-work-detail', component: PageWorkDetail },
    { path: '/index', component: Main }

];

export default routes;