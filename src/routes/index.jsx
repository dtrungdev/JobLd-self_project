import HomePage from '../pages/Homepage';
import CompanyPage from '../pages/CompanyPage';
import CVPage from '../pages/CVPage';
import BlogPage from '../pages/BlogPage';
import LoginPage from '../pages/Loginpage';
import RegisterPage from '../pages/RegisterPage';
import CompanyDetail from '../pages/CompanyDetail';
import FindjobPage from '../pages/FindjobPage';
import JobDetail from '../pages/JobDetail';
import JobPage from '../pages/JobPage';
import ProfilePage from '../pages/ProfilePage';
import RecruiterPage from '../pages/RecruiterPage';
import RecruiterLogin from '../pages/RecruiterLogin';
import RecruiterRegister from '../pages/RecruiterRegister';
import RecruiterApp from '../pages/RecruiterApp';

const publicRoutes = [
    { path: '/', component: HomePage },

    { path: '/recruiter', component: RecruiterPage },
    { path: '/recruiter/app', component: RecruiterApp },
    { path: '/recruiter/login', component: RecruiterLogin },
    { path: '/recruiter/register', component: RecruiterRegister },

    { path: '/company/123', component: CompanyDetail },
    { path: '/company', component: CompanyPage },

    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },

    { path: '/find-job', component: FindjobPage },
    { path: '/job', component: JobPage },
    { path: '/job/123', component: JobDetail },

    { path: '/cv', component: CVPage },
    { path: 'blog', component: BlogPage },
];

const privateRoutes = [{ path: '/profile', component: ProfilePage }];

export { publicRoutes, privateRoutes };
