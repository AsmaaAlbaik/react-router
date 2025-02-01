import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";
export default function RootEvents() {
    return (
        <>
            <EventsNavigation />
            <main>
                <Outlet />
            </main>
        </>
    )
};