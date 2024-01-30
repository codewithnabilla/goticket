export default function Description({ description, setDescription }) {
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold">Description</h1>
      <p className="text-sm">Description your event.</p>
      <input
        type="text"
        className="w-full h-32 py-2 pl-2 mt-4 text-sm text-gray-800 bg-white focus:outline-[#1e0a3c] focus:bg-white focus:text-gray-900 border border-gray-300 placeholder-top"
        placeholder="Write your event description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
}
