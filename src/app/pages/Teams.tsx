"use client";

import { useEffect, useState } from "react";
import { footballApi } from "@/app/lib/api";

export function TeamsPage() {
  const [teams, setTeams] = useState<any[]>([]);

  useEffect(() => {
    footballApi<{ response: any[] }>("/teams", {
      league: 39,
      season: 2025,
    })
      .then((data) => {
        console.log("API response:", data);
        setTeams(data.response?.map((t) => t.team) ?? []);
      })
      .catch((err) => console.error("Failed to load teams:", err));
  }, []);

  return (
    <div>
      <h1>Premier League lag</h1>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <img src={team.logo} alt={team.name} width={50} height={50} />
            {team.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
