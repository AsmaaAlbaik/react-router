import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import EventsPage, { loader as EventLoader } from './pages/Events';
import EventDetailPage, { loader as EventDetailsLoader, action as EventDeleteAction } from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import { action as actionEvent } from './components/EventForm';
import RootEvents from './pages/RootEvents';
import Error from './pages/Error';
// import EventDetailLayout from './pages/EventDetailLayout';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';


const router = createBrowserRouter([
  {
    path: "/", element: < RootLayout />, errorElement: <Error />, children: [
      { index: true, path: "", element: < HomePage /> },
      {
        path: "events", element: <RootEvents />, children: [
          {
            index: true, path: "", element: < EventsPage />, loader: EventLoader
          },
          {
            path: ":id",
            id: 'event-detail',
            // element: <EventDetailLayout />,
            loader: EventDetailsLoader, children: [
              { index: true, element: <EventDetailPage />, action: EventDeleteAction },
              { path: "edit", element: <EditEventPage />, action: actionEvent },
            ]
          },
          { path: "new", element: < NewEventPage />, action: actionEvent },
        ]
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ]
  },
])
function App() {
  return <RouterProvider router={router} />
}

export default App;
