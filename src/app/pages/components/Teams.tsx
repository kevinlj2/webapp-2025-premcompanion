import { teamsList } from "@/app/lib/teams";

export default function Teams() {
  return (
    <section className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Premier League Clubs
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {teamsList.map((team) => (
            <div
              key={team.id}
              className="bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-center hover:shadow-lg transition"
            >
              <img
                src={team.logo as string}
                alt={team.name}
                className="w-20 h-20 object-contain mb-3"
              />
              <p className="text-sm font-medium text-gray-700 text-center">
                {team.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
