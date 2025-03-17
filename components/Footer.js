function Footer() {
    try {
        return (
            <footer className="bg-gray-50 py-8 mt-12" data-name="footer">
                <div className="container text-center text-gray-600">
                    <p data-name="copyright">© 2024 Communion App. All rights reserved.</p>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
