import './App.css';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './components/Home';
import Login from './components/user/Login';
import ProductDetails from './components/product/ProductDetails';
import Register from './components/user/Register';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="container container-fluid">
                    <Route path="/" component={Home} exact />
                    <Route path="/search/:keyword" component={Home} />
                    <Route path="/product/:id" component={ProductDetails} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
