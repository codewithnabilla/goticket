import { Music } from 'lucide-react';

export default function Category({ categories }) {
  return (
    <div className="mt-10 mx-5">
      <h1 className="text-2xl font-bold mb-5">Category Events</h1>
      <div className="flex flex-wrap gap-y-4 gap-x-8 justify-center md:justify-between">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center justify-center w-40 h-40 hover:bg-[#f05537]/90 rounded-full border-2 border-inherit cursor-pointer"
          >
            <div className="text-center p-3">
              {category.icon}
              <p className="font-bold mt-3">{category.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
