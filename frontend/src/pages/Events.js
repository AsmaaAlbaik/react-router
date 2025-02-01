import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();
    const events = data.events;
    const error = data.message;
    if (error) return <p>{error}</p>
    return <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={events}>
            {(loadedEvent) => <EventsList events={loadedEvent} />}
        </Await>
    </Suspense>
}

export default EventsPage;

export async function eventLoader() {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        // eslint-disable-next-line no-throw-literal
        throw new Response(JSON.stringify({ message: 'An Error Happened !' }), { status: 500 });
        // throw json({ message: 'An Error Happened !' }, { status: 500 });
    } else {
        const resData = await response.json();
        return resData.events;
    }
}
export function loader() {
    return {
        events: eventLoader()
    }
}