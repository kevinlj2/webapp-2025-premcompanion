import { fixturesList } from "@/app/lib/fixtures";

export default function Fixtures() {
  return (
    <section className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Upcoming Fixtures
      </h1>

      <div className="w-full max-w-3xl bg-white shadow rounded-lg divide-y divide-gray-200">
        {fixturesList.map((fixture) => (
          <div
            key={fixture.id}
            className="flex items-center justify-between p-4 hover:bg-gray-50 transition"
          >
            <div className="flex flex-col items-center justify-center w-16 text-gray-700 font-semibold">
              <span className="text-xs uppercase">Nov</span>
              <span className="text-2xl font-bold">
                {new Date(fixture.date).getDate()}
              </span>
              <span className="text-xs text-gray-500">
                {new Date(fixture.date).getFullYear()}
              </span>
            </div>
            <div className="flex-1 px-4">
              <p className="text-xs uppercase text-gray-500 mb-1">
                English Premier League
              </p>
              <h2 className="text-lg font-bold text-gray-900 mb-1">
                {fixture.homeTeam} <span className="text-gray-500">vs</span>{" "}
                {fixture.awayTeam}
              </h2>
              <p className="text-sm text-gray-600">
                {fixture.time} • {fixture.stadium}
              </p>
            </div>
            <div>
              <a
                href={`/tickets/${fixture.id}`}
                className="bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-green-600 transition"
              >
                View Tickets
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
