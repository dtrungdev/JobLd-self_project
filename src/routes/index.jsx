import HomePage from '../pages/Homepage';
import CompanyPage from '../pages/CompanyPage';
import Profile from '../pages/Profile';
import LoginPage from '../pages/Loginpage';
import RegisterPage from '../pages/RegisterPage';
import CompanyDetail from '../pages/CompanyDetail';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/company/123', component: CompanyDetail },
    { path: '/company', component: CompanyPage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
];

const privateRoutes = [{ path: '/profile', component: Profile }];

export { publicRoutes, privateRoutes };
