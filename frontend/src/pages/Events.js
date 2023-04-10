import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  // retrieves data sent from loader
  // const data = useLoaderData();
  // //  Method 1: handle error
  // //   if(data.isError){
  // //     return <p>{data.message}</p>
  // //   }
  // const events = data.events;

  const { events } = useLoaderData();

  return (
    //  <EventsList events={events} />
    // "Suspense" can be used as a fall back while waiting for data to arrive
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

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

// this function is here for best practices
export function loader() {
  // defers must always be used with promises
  return defer({
    // "events" is a key
    events: loadEvents(),
  });
}
