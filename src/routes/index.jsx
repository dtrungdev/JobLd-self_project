import Homepage from '../pages/Homepage';
import Profile from '../pages/Profile';

const publicRoutes = [
    { path: '/', component: Homepage },
    { path: '/profile', component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
