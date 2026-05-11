import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/ts-snowflake.svg"
              alt="ThoughtSpot + Snowflake"
              width={120}
              height={72}
            />
            <span className="text-xl font-bold">ThoughtSpot + Snowflake</span>
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link
            href="/liveboards"
            className="hover:text-gray-300 transition-colors"
          >
            Liveboards
          </Link>
          <Link
            href="/spotter"
            className="hover:text-gray-300 transition-colors"
          >
            Spotter
          </Link>
        </div>
      </div>
    </nav>
  );
}
