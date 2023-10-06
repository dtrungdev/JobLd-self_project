import Homepage from '../pages/Homepage';
import Profile from '../pages/Profile';
import LoginPage from '../pages/Loginpage';
import RegisterPage from '../pages/RegisterPage';

const publicRoutes = [
    { path: '/', component: Homepage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
];

const privateRoutes = [{ path: '/profile', component: Profile }];

export { publicRoutes, privateRoutes };
