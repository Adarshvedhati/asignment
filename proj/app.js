function App() {
    try {
        const [currentPage, setCurrentPage] = React.useState(window.location.hash || '#home');

        React.useEffect(() => {
            const handleHashChange = () => setCurrentPage(window.location.hash || '#home');
            window.addEventListener('hashchange', handleHashChange);
            return () => window.removeEventListener('hashchange', handleHashChange);
        }, []);

        return (
            <div data-name="app">
                <Header />
                <main data-name="main-content">
                    {currentPage === '#home' && <Home />}
                    {currentPage === '#events' && <Events />}
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
