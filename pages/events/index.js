import { useRouter } from 'next/router';

import EventCard from '../../components/EventCard/EventCard';
import EventsSearch from '../../components/EventsSearch/EventsSearch';
import Layout from '../../components/Layout/Layout';
import { fetchEvents } from '../../lib/events';

export default function HorseEvents(props) {
    const { events } = props;

    const router = useRouter();
  
    function findEventsHandler(year, month) {
      const fullPath = `/events/${year}/${month}`;
      
      router.push(fullPath);
    }

    return (
        <div>
            <title>Events</title>
            <meta name="description" content="Events" />

            <Layout header="Events">
                <EventsSearch onSearch={findEventsHandler} />
                {events.length > 0 && (
                    events.map((event) => <EventCard
                        key={event.id}
                        id={event.id}
                        title={event.title}
                        imgUrl={event.imgUrl}
                        date={event.date}
                        description={event.description}
                        address={event.address}
                    />)
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