import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-gray-100 py-12">
      <div className="text-center">
        <Image
          src="/spotter-in-the-snow.png"
          alt="Spotter in the Snow"
          width={400}
          height={300}
          className="mx-auto mb-8 rounded-lg"
          style={{ height: "auto" }}
          loading="eager"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to ThoughtSpot
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Explore your data with powerful analytics and insights. Navigate to
          Liveboards or use Spotter for natural language queries.
        </p>
      </div>
    </div>
  );
}
