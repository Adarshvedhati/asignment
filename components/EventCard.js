function EventCard({ event }) {
    try {
        return (
            <div className="event-card p-4" data-name="event-card">
                <h3 className="text-xl font-semibold mb-2" data-name="event-title">{event.title}</h3>
                <p className="text-gray-600 mb-3" data-name="event-description">{event.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500" data-name="event-details">
                    <span data-name="event-date">
                        <i className="fas fa-calendar-alt mr-1"></i> {event.date}
                    </span>
                    <span data-name="event-location">
                        <i className="fas fa-map-marker-alt mr-1"></i> {event.location}
                    </span>
                </div>
            </div>
        );
    } catch (error) {
        console.error('EventCard component error:', error);
        reportError(error);
        return null;
    }
}
