// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import EventsPage, { loader as EventLoader } from './pages/Events';
import EventDetailPage, { loader as EventDetailsLoader } from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import RootEvents from './pages/RootEvents';
import Error from './pages/Error';
// import EventDetailLayout from './pages/EventDetailLayout';

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
              { index: true, element: <EventDetailPage /> },
              { path: "edit", element: <EditEventPage /> },
            ]
          },
          { path: "new", element: < NewEventPage /> },
        ]
      }
    ]
  },
])
function App() {
  return <RouterProvider router={router} />
}

export default App;
