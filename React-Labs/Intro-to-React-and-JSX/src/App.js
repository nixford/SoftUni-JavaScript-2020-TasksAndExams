import Header from './components/Header';
import Footer from './components/Footer';
import Lorem, { someValue } from './components/Lorem';
import './App.css';

function App() {
    let message = 'Hello From App Component';

    return (
        <div className="site-wrapper">
            <Header>{message}</Header>

            <main>
                <Lorem />
                <Lorem />
                <Lorem />
            </main>

            <Footer />
        </div>
    );
}

export default App;
