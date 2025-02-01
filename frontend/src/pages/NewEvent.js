import { redirect } from 'react-router-dom';
import EventForm from '../components/EventForm';
export default function NewEventPage() {
    return <EventForm event={{}} />;
}


export async function action({ request }) {
    const data = await request.formData();
    const title = data.get('title');
    const image = data.get('image');
    const date = data.get('date');
    const description = data.get('description');
    const fromData = { title, image, date, description };
    const response = await fetch(`http://localhost:8080/events`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fromData),
        });
    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Could not create a new event' }), { status: 500 });
    } else {
        return redirect('/events');
    }

}