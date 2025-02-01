
import { useRouteLoaderData, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";
export default function EventDetailPage() {
    const { event } = useRouteLoaderData('event-detail');
    return (
        <EventItem event={event} />
    );
}

export async function loader({ params }) {
    const response = await fetch(`http://localhost:8080/events/${params.id}`);
    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Could not fetch detail for the selected event' }), { status: 500 });
    } else {
        const resData = await response.json();
        return resData;
    }
}

export async function action({ request, params }) {
    const response = await fetch(`http://localhost:8080/events/${params.id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Could not delete the selected event' }), { status: 500 });
    } else {
        return redirect('/events');
    }
}