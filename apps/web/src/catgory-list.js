import {
  AreaChart,
  Clapperboard,
  Gamepad2,
  Music,
  PersonStanding,
  Shirt,
} from 'lucide-react';

const categoryList = [
  {
    id: 1,
    icon: <Music size={48} strokeWidth={1.5} />,
    title: 'Music',
  },
  {
    id: 2,
    icon: <AreaChart size={48} strokeWidth={1.5} />,
    title: 'Business',
  },
  {
    id: 3,
    icon: <Clapperboard size={48} strokeWidth={1.5} />,
    title: 'Film',
  },
  {
    id: 4,
    icon: <PersonStanding size={48} strokeWidth={1.5} />,
    title: 'Kids',
  },
  {
    id: 5,
    icon: <Gamepad2 size={48} strokeWidth={1.5} />,
    title: 'Game',
  },
  {
    id: 6,
    icon: <Shirt size={48} strokeWidth={1.5} />,
    title: 'Fashion',
  },
];

export default categoryList;
