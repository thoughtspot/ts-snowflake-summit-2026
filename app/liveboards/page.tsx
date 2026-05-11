export default function Liveboards() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-gray-100 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Liveboards</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          This is the Liveboards page. Here you can embed and interact with
          ThoughtSpot Liveboards.
        </p>
        <div className="mt-8 p-8 bg-white rounded-lg shadow-md">
          <p className="text-gray-500">Placeholder for Liveboard embedding</p>
        </div>
      </div>
    </div>
  );
}
