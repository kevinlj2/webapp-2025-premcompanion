import { teamsList } from "@/app/lib/teams";

export default function Teams() {
  return (
    <div className="teams-grid">
      {teamsList.map((team) => (
        <div key={team.id} className="team-card">
          <img src={team.logo} alt={team.name} className="team-logo" />
        </div>
      ))}
    </div>
  );
}
