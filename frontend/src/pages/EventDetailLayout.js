import { Outlet, useLoaderData } from 'react-router-dom';

function EventDetailLayout() {
  const eventData = useLoaderData();

  return <Outlet context={eventData} />;
}

export default EventDetailLayout;