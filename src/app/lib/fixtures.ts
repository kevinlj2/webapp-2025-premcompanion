interface fixture {
  id: number;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  stadium: string;
}

const fixturesList: fixture[] = [
  {
    id: 1,
    homeTeam: "Brentford",
    awayTeam: "Burnley",
    date: "2025-11-29",
    time: "15:00",
    stadium: "Gtech Community Stadium",
  },
  {
    id: 2,
    homeTeam: "Sunderland",
    awayTeam: "Bournemouth",
    date: "2025-11-29",
    time: "15:00",
    stadium: "Gtech Community Stadium",
  },
  {
    id: 3,
    homeTeam: "Manchester City",
    awayTeam: "Leeds",
    date: "2025-11-29",
    time: "15:00",
    stadium: "Etihad Stadium",
  },
  {
    id: 4,
    homeTeam: "Everton",
    awayTeam: "Newcastle United",
    date: "2025-11-29",
    time: "17:30",
    stadium: "Goodison Park",
  },
  {
    id: 5,
    homeTeam: "Tottenham Hotspur",
    awayTeam: "Fulham",
    date: "2025-11-29",
    time: "20:00",
    stadium: "Tottenham Hotspur Stadium",
  },
  {
    id: 6,
    homeTeam: "Crystal Palace",
    awayTeam: "Manchester United",
    date: "2025-11-30",
    time: "12:00",
    stadium: "Selhurst Park",
  },
  {
    id: 7,
    homeTeam: "West Ham United",
    awayTeam: "Liverpool",
    date: "2025-11-30",
    time: "14:05",
    stadium: "London Stadium",
  },
  {
    id: 8,
    homeTeam: "Aston Villa",
    awayTeam: "Wolves",
    date: "2025-11-30",
    time: "14:05",
    stadium: "London Stadium",
  },
  {
    id: 9,
    homeTeam: "Nottingham Forest",
    awayTeam: "Brighton",
    date: "2025-11-30",
    time: "14:05",
    stadium: "City Ground",
  },
  {
    id: 10,
    homeTeam: "Chelsea",
    awayTeam: "Arsenal",
    date: "2025-11-30",
    time: "16:30",
    stadium: "London Stadium",
  },
];
export { fixturesList };
