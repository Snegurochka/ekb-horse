import Card from '../../components/Card';
import { fetchEvents } from '../../lib/events';

export default function HorseEvents(props) {
    const { events } = props;
   
    return (
        <div>
            <title>Events</title>
            <meta name="description" content="Events" />

            <main>
                <h1>Events</h1>

                {events.length > 0 && (
                    events.map((event) => <Card
                    key={event.eventId}
                    name={event.title}
                    imgUrl={event.imgUrl}
                    href={`/events/${event.eventId}`} />)
                )}
            </main>
        </div>
    )
}

export async function getStaticProps(context) {
    const events = await fetchEvents();

    return {
        props: {
            events,
        },
    };
}