"use client";

import { useState } from "react";
import { useAuth } from "./Auth";
import { fixturesList } from "../../lib/fixtures";

interface TicketContentProps {
  fixtureId: number;
}

export default function Tickets({ fixtureId }: TicketContentProps) {
  const { isAuthenticated, logout } = useAuth();

  const fixture = fixturesList.find((f) => f.id === fixtureId);

  if (!fixture) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Fixture not found</h2>
        <a href="/fixtures" className="text-blue-600 hover:underline text-sm">
          ← Back to fixtures
        </a>
      </div>
    );
  }

  const [ticketQuantity, setTicketQuantity] = useState<number | "ANY">("ANY");
  const [fanSide, setFanSide] = useState("All");
  const [priceRange, setPriceRange] = useState<[number, number]>([181, 3117]);
  const [location, setLocation] = useState("All");

  return (
    <div className="flex min-h-screen bg-gray-100 p-8">
      <main className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-1">
              {fixture.homeTeam} vs {fixture.awayTeam}
            </h1>
            <p className="text-gray-600 text-sm">
              {fixture.date} • {fixture.time}
            </p>
          </div>

          <button
            className={`${
              isAuthenticated
                ? "bg-red-600 hover:bg-red-700"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white px-4 py-2 rounded-md`}
            onClick={() => {
              if (isAuthenticated) {
                logout();
                return;
              }
              window.location.href = "/login";
            }}
          >
            {isAuthenticated ? "Logout" : "Login"}
          </button>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tottenham_Hotspur_Stadium_-_interior_1.jpg/1280px-Tottenham_Hotspur_Stadium_-_interior_1.jpg"
            alt={fixture.stadium}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">ENGLISH PREMIER LEAGUE</p>

            <h2 className="text-2xl font-semibold mb-2">
              {fixture.homeTeam} vs {fixture.awayTeam}
            </h2>

            <p className="text-gray-600">
              🗓{" "}
              {new Date(fixture.date).toLocaleDateString("en-GB", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              {fixture.time}
              <br />
              📍 {fixture.stadium}
            </p>
          </div>
        </div>

        <div className="bg-white shadow p-6 rounded-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-gray-600 font-semibold mb-2">
                Ticket Quantity
              </label>
              <div className="flex gap-2 flex-wrap">
                {["ANY", 1, 2, 3, 4, "5+"].map((q) => (
                  <button
                    key={q}
                    onClick={() => setTicketQuantity(q as any)}
                    className={`px-3 py-1 rounded border ${
                      ticketQuantity === q
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-600 font-semibold mb-2">
                Fan side
              </label>
              <select
                value={fanSide}
                onChange={(e) => setFanSide(e.target.value)}
                className="w-full border rounded px-3 py-2"
              >
                <option>All</option>
                <option>Home</option>
                <option>Away</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-600 font-semibold mb-2">
                Price range (€)
              </label>
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([Number(e.target.value), priceRange[1]])
                  }
                  className="w-20 border rounded px-2 py-1"
                />
                <span>–</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="w-20 border rounded px-2 py-1"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 font-semibold mb-2">
                Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border rounded px-3 py-2"
              >
                <option>All</option>
                <option>North Stand</option>
                <option>South Stand</option>
                <option>East</option>
                <option>West</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 text-center text-gray-600">
          Available tickets for {fixture.homeTeam} vs {fixture.awayTeam} will
          appear here.
        </div>
      </main>
    </div>
  );
}
