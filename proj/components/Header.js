function Header() {
    try {
        const [currentPath, setCurrentPath] = React.useState(window.location.hash || '#home');

        React.useEffect(() => {
            const handleHashChange = () => setCurrentPath(window.location.hash || '#home');
            window.addEventListener('hashchange', handleHashChange);
            return () => window.removeEventListener('hashchange', handleHashChange);
        }, []);

        return (
            <header className="header py-4" data-name="header">
                <div className="container flex items-center justify-between">
                    <div className="flex items-center gap-2" data-name="logo-container">
                        <i className="fas fa-church text-indigo-600 text-2xl"></i>
                        <h1 className="text-xl font-bold text-gray-800">Communion</h1>
                    </div>
                    <nav data-name="navigation">
                        <a href="#home" 
                           className={`nav-link ${currentPath === '#home' ? 'active' : ''}`}
                           data-name="home-link">
                            Home
                        </a>
                        <a href="#events" 
                           className={`nav-link ${currentPath === '#events' ? 'active' : ''}`}
                           data-name="events-link">
                            Events
                        </a>
                    </nav>
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
