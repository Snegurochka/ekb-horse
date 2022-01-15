import Layout from "../../components/Layout/Layout";
import { fetchEvents } from '../../lib/events';

export default function Event(props) {
    const { title, imgUrl, id, date, description, address } = props.event;
    return (
        <div>
            <title>{title}</title>
            <meta name="description" content="Events" />

            <Layout header={title}>
            </Layout>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const events = await fetchEvents();

    const event = events.find((event) => {
        return event.id.toString() === params.id; //dynamic id
    });
    return {
        props: {
            event: event ? event : {},
        },
    };
}

export async function getStaticPaths() {
    const events = await fetchEvents();

    const paths = events.map((event) => {
        return {
            params: {
                id: event.id.toString(),
            },
        };
    });
    return {
        paths,
        fallback: true,
    };
}