function Events() {
    try {
        const [events, setEvents] = React.useState([
            {
                id: 1,
                title: "Community Prayer Meeting",
                description: "Join us for our weekly community prayer meeting.",
                date: "2024-02-01",
                location: "Main Hall"
            },
            {
                id: 2,
                title: "Interfaith Discussion",
                description: "An open dialogue about different faith traditions.",
                date: "2024-02-15",
                location: "Conference Room"
            }
        ]);
        const [searchTerm, setSearchTerm] = React.useState('');

        const handleAddEvent = (newEvent) => {
            setEvents([...events, { ...newEvent, id: events.length + 1 }]);
        };

        const filteredEvents = events.filter(event =>
            event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
            <div className="container py-8" data-name="events-page">
                <h1 className="text-3xl font-bold mb-8" data-name="page-title">Community Events</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-name="content-grid">
                    <div className="md:col-span-2" data-name="events-list-section">
                        <div className="mb-6" data-name="search-section">
                            <input
                                type="text"
                                placeholder="Search events..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="filter-input w-full"
                                data-name="search-input"
                            />
                        </div>
                        <div className="space-y-4" data-name="events-list">
                            {filteredEvents.map(event => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                    </div>
                    
                    <div className="md:col-span-1" data-name="add-event-section">
                        <EventForm onSubmit={handleAddEvent} />
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Events page error:', error);
        reportError(error);
        return null;
    }
}
