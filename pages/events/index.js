import EventCard from '../../components/EventCard/EventCard';
import Layout from '../../components/Layout/Layout';
import { fetchEvents } from '../../lib/events';

export default function HorseEvents(props) {
    const { events } = props;

    return (
        <div>
            <title>Events</title>
            <meta name="description" content="Events" />

            <Layout header="Events">
                {events.length > 0 && (
                    events.map((event) => <EventCard
                        key={event.eventId}
                        name={event.title}
                        imgUrl={event.imgUrl}
                        href={`/events/${event.eventId}`} />)
                )}
            </Layout>
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