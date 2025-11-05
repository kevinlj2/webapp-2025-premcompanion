import { fixturesList } from "@/app/lib/fixtures";

export default function Fixtures() {
  return (
    <div className="teams-grid">
      {fixturesList.map((fixture) => (
        <div key={fixture.id} className="team-card">
          <h3>
            {fixture.homeTeam} vs {fixture.awayTeam}
          </h3>
          <p>
            {fixture.date} - {fixture.time}
          </p>
          <p>{fixture.stadium}</p>
          <button>View Tickets</button>
        </div>
      ))}
    </div>
  );
}
