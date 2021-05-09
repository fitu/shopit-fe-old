import React, { FC, ReactElement } from 'react';
import { positions, Provider as AlertProvider, transitions } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
import { Role } from './models/role';
import AppRouter from './router/AppRouter';

const alertOptions = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER,
    transtion: transitions.SCALE,
};

const App = () => {
    const { user, loading } = useSelector((state) => state.auth);
    return (
        <AlertProvider template={AlertTemplate} {...alertOptions}>
            <Router>
                <div className={'app'}>
                    <Header />
                    <div className={'main--container'}>
                        <AppRouter />
                    </div>
                    {!loading && user?.role !== Role.ADMIN && <Footer />}
                </div>
            </Router>
        </AlertProvider>
    );
};

App.displayName = 'App';

export default App;
