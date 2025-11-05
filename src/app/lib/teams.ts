import { StaticImageData } from "next/image";
import Arsenal from "./images/Arsenal.png";
import AstonVilla from "./images/AstonVilla.png";
import Bournemouth from "./images/Bournemouth.png";
import Brentford from "./images/Brentford.png";
import Brighton from "./images/Brighton.png";
import Burnley from "./images/Burnley.png";
import Chelsea from "./images/Chelsea.png";
import CrystalPalace from "./images/CrystalPalace.png";
import Everton from "./images/Everton.png";
import Fulham from "./images/Fulham.png";
import Leeds from "./images/Leeds.png";
import Liverpool from "./images/Liverpool.png";
import ManchesterCity from "./images/ManchesterCity.png";
import ManchesterUnited from "./images/ManchesterUnited.png";
import Newcastle from "./images/Newcastle.png";
import Nottingham from "./images/Nottingham.png";
import Sunderland from "./images/Sunderland.png";
import Tottenham from "./images/Tottenham.png";
import WestHam from "./images/WestHam.png";
import Wolves from "./images/Wolves.png";

interface teams {
  id: number;
  name: string;
  stadium: string;
  logo: string | StaticImageData;
}

const teamsList: teams[] = [
  { id: 1, name: "Arsenal", stadium: "Emirates Stadium", logo: Arsenal },
  { id: 2, name: "Aston Villa", stadium: "Villa Park", logo: AstonVilla },
  {
    id: 3,
    name: "Bournemouth",
    stadium: "Vitality Stadium",
    logo: Bournemouth,
  },
  {
    id: 4,
    name: "Brentford",
    stadium: "Gtech Community Stadium",
    logo: Brentford,
  },
  { id: 5, name: "Brighton", stadium: "Falmer Stadium", logo: Brighton },
  { id: 6, name: "Burnley", stadium: "Turf Moor", logo: Burnley },
  { id: 7, name: "Chelsea", stadium: "Stamford Bridge", logo: Chelsea },
  {
    id: 8,
    name: "Crystal Palace",
    stadium: "Selhurst Park",
    logo: CrystalPalace,
  },
  { id: 9, name: "Everton", stadium: "Goodison Park", logo: Everton },
  { id: 10, name: "Fulham", stadium: "Craven Cottage", logo: Fulham },
  { id: 11, name: "Leeds", stadium: "Elland Road", logo: Leeds },
  { id: 12, name: "Liverpool", stadium: "Anfield", logo: Liverpool },
  {
    id: 13,
    name: "Manchester City",
    stadium: "Etihad Stadium",
    logo: ManchesterCity,
  },
  {
    id: 14,
    name: "Manchester United",
    stadium: "Old Trafford",
    logo: ManchesterUnited,
  },
  {
    id: 15,
    name: "Newcastle United",
    stadium: "St. James' Park",
    logo: Newcastle,
  },
  {
    id: 16,
    name: "Nottingham Forest",
    stadium: "City Ground",
    logo: Nottingham,
  },
  { id: 17, name: "Sunderland", stadium: "Stadium of Light", logo: Sunderland },
  {
    id: 18,
    name: "Tottenham Hotspur",
    stadium: "Tottenham Hotspur Stadium",
    logo: Tottenham,
  },
  { id: 19, name: "West Ham United", stadium: "London Stadium", logo: WestHam },
  {
    id: 20,
    name: "Wolverhampton Wanderers",
    stadium: "Molineux Stadium",
    logo: Wolves,
  },
];

export { teamsList };
