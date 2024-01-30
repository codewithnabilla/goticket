import 'tailwindcss/tailwind.css';

import Hero from '../components/hero';
import EventList from '../components/event-list';
import eventList from '../event-list';
import Category from '../components/category';
import categoryList from '../catgory-list';

export default function Home() {
  return (
    <div>
      <Hero />
      <Category categories={categoryList} />
      <EventList events={eventList} />
    </div>
  );
}
