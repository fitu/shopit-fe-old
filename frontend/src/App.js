import './App.css';

import { Provider as AlertProvider, positions, transitions } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from './components/router/AppRouter';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

import { Roles } from './models/roles';

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
                <div className="App">
                    <Header />
                    <AppRouter />
                    {!loading && user?.role !== Roles.ADMIN && <Footer />}
                </div>
            </Router>
        </AlertProvider>
    );
}

export default App;
