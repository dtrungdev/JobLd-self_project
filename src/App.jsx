import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        return <Route path={route.path} key={index} element={<route.component />} />;
                    })}
                    ||
                    {privateRoutes.map((route, index) => {
                        return <Route path={route.path} key={index} element={<route.component />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
