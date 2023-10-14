import HomePage from '../pages/Homepage';
import CompanyPage from '../pages/CompanyPage';
import CVPage from '../pages/CVPage';
import BlogPage from '../pages/BlogPage';
import LoginPage from '../pages/Loginpage';
import RegisterPage from '../pages/RegisterPage';
import CompanyDetail from '../pages/CompanyDetail';
import JobPage from '../pages/JobPage';
import JobDetail from '../pages/JobDetail';
import ProfilePage from '../pages/ProfilePage';

const publicRoutes = [
    { path: '/', component: HomePage },

    { path: '/company/123', component: CompanyDetail },
    { path: '/company', component: CompanyPage },

    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },

    { path: '/job', component: JobPage },
    { path: '/job/123', component: JobDetail },

    { path: '/cv', component: CVPage },
    { path: 'blog', component: BlogPage },
];

const privateRoutes = [{ path: '/profile', component: ProfilePage }];

export { publicRoutes, privateRoutes };
