function Home() {
    try {
        return (
            <div data-name="home-page">
                <section className="hero-section py-20" data-name="hero-section">
                    <div className="container text-center">
                        <h1 className="text-4xl font-bold mb-6" data-name="hero-title">
                            Welcome to Communion
                        </h1>
                        <p className="text-xl mb-8 max-w-2xl mx-auto" data-name="hero-description">
                            Connecting people of all faiths through events and community support
                        </p>
                        <a href="#events" className="btn btn-primary" data-name="cta-button">
                            Explore Events
                        </a>
                    </div>
                </section>

                <section className="py-16" data-name="features-section">
                    <div className="container">
                        <h2 className="text-3xl font-bold text-center mb-12" data-name="features-title">
                            Why Choose Communion?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-name="features-grid">
                            <div className="feature-card" data-name="feature-1">
                                <i className="fas fa-users text-3xl text-indigo-600 mb-4"></i>
                                <h3 className="text-xl font-semibold mb-2">Community Building</h3>
                                <p className="text-gray-600">Connect with like-minded individuals and build meaningful relationships.</p>
                            </div>
                            <div className="feature-card" data-name="feature-2">
                                <i className="fas fa-calendar-alt text-3xl text-indigo-600 mb-4"></i>
                                <h3 className="text-xl font-semibold mb-2">Event Management</h3>
                                <p className="text-gray-600">Easily organize and participate in faith-based events.</p>
                            </div>
                            <div className="feature-card" data-name="feature-3">
                                <i className="fas fa-hands-helping text-3xl text-indigo-600 mb-4"></i>
                                <h3 className="text-xl font-semibold mb-2">Support Network</h3>
                                <p className="text-gray-600">Find support and guidance from your spiritual community.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('Home page error:', error);
        reportError(error);
        return null;
    }
}
