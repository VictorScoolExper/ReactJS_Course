import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventDetailPage() {
  // useRouteLoaderData is similiar tp useLoaderData except it takes an id given in app.js
  // const data = useRouteLoaderData("event-detail");

  // this comes from "loader"
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense fallback={<p style={{textAlign: 'center'}}>Loading..</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>

      <Suspense fallback={<p style={{textAlign: 'center'}}>Loading..</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

async function loadEvents() {
  // use any JS code here, reactjs is not allowed
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //  Method 1: handle error
    // return {isError: true, message: 'Could not fetch events'};
    // Method 2
    // throw new Response(JSON.stringify({message: 'Could not fetch events'}), {status: 500})
    // Method 3: json comes from react-router-dom
    throw json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    // Method 1
    // const resData = await response.json();
    // const res = new Response('any data', {status: 201});
    // return res;
    // Method 2
    // return response;

    const resData = await response.json();
    return resData.events;
  }
}

export async function loader({ request, params }) {
  const id = params.eventId;

  // const response = await fetch("http://localhost:8080/events/" + id);
  // if (!response.ok) {
  //   throw json(
  //     { message: "Could not fetch details for selected event." },
  //     { status: 500 }
  //   );
  // } else {
  //   return response;
  // }

  return defer({
    // adding the "await" ensure that "event" gets loaded first
    event: await loadEvent(id),
    // loads after
    events: loadEvents(),
  });
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }

  return redirect("/events");
}
