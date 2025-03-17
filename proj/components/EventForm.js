function EventForm({ onSubmit }) {
    try {
        const [formData, setFormData] = React.useState({
            title: '',
            description: '',
            date: '',
            location: ''
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            onSubmit(formData);
            setFormData({ title: '', description: '', date: '', location: '' });
        };

        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        return (
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow" data-name="event-form">
                <h3 className="text-xl font-semibold mb-4" data-name="form-title">Add New Event</h3>
                <div className="space-y-4">
                    <div>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Event Title"
                            className="w-full p-2 border rounded"
                            required
                            data-name="title-input"
                        />
                    </div>
                    <div>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Event Description"
                            className="w-full p-2 border rounded"
                            required
                            data-name="description-input"
                        ></textarea>
                    </div>
                    <div>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                            data-name="date-input"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Location"
                            className="w-full p-2 border rounded"
                            required
                            data-name="location-input"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-full" data-name="submit-button">
                        Add Event
                    </button>
                </div>
            </form>
        );
    } catch (error) {
        console.error('EventForm component error:', error);
        reportError(error);
        return null;
    }
}
