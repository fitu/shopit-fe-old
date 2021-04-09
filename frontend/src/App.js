import { Provider as AlertProvider, positions, transitions } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from './router/AppRouter';
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';

import { Role } from './models/role';

const alertOptions = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER,
    transtion: transitions.SCALE,
};

function App() {
    const { user, loading } = useSelector((state) => state.auth);
    return (
        <AlertProvider template={AlertTemplate} {...alertOptions}>
            <Router>
                <div className="app">
                    <Header />
                    <div className="main--container">
                        <AppRouter />
                    </div>
                    {!loading && user?.role !== Role.ADMIN && <Footer />}
                </div>
            </Router>
        </AlertProvider>
    );
}

export default App;
