import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();
    const events = data.events;
    const error = data.message;
    if (error) return <p>{error}</p>
    return (
        <div style={{ textAlign: 'center' }}>
            <EventsList events={events} />
        </div>
    );
}

export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        // eslint-disable-next-line no-throw-literal
        throw new Response(JSON.stringify({ message: 'An Error Happened !' }), { status: 500 });
        // throw json({ message: 'An Error Happened !' }, { status: 500 });
    } else {
        const resData = await response.json();
        return resData;
    }
}