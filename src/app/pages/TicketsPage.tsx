"use client";
import { useState } from "react";
import Layout from "./components/Layout";

export function TicketsPage() {
  const [ticketQuantity, setTicketQuantity] = useState<number | "ANY">("ANY");
  const [fanSide, setFanSide] = useState("All");
  const [priceRange, setPriceRange] = useState<[number, number]>([181, 3117]);
  const [location, setLocation] = useState("All");

  return (
    <Layout>
      <div className="flex min-h-screen bg-gray-100">
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Cart</h1>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md">
              Logout
            </button>
          </div>

          {/* Match Card */}
          <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tottenham_Hotspur_Stadium_-_interior_1.jpg/1280px-Tottenham_Hotspur_Stadium_-_interior_1.jpg"
              alt="Tottenham Stadium"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">
                ENGLISH PREMIER LEAGUE
              </p>
              <h2 className="text-2xl font-semibold mb-2">
                Tottenham Hotspur vs Liverpool FC
              </h2>
              <p className="text-gray-600">
                🗓 Saturday, 20th December 2025 15:00 <br />
                📍 Tottenham Hotspur Stadium, London, United Kingdom
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white shadow p-6 rounded-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Ticket Quantity */}
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

              {/* Fan Side */}
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

              {/* Price Range */}
              <div>
                <label className="block text-gray-600 font-semibold mb-2">
                  Price range (€)
                </label>
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    min={181}
                    max={3117}
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([Number(e.target.value), priceRange[1]])
                    }
                    className="w-20 border rounded px-2 py-1"
                  />
                  <span>–</span>
                  <input
                    type="number"
                    min={181}
                    max={3117}
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], Number(e.target.value)])
                    }
                    className="w-20 border rounded px-2 py-1"
                  />
                </div>
              </div>

              {/* Location */}
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

          {/* Stadium Plan */}
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Tottenham_Hotspur_Stadium_Seating_Plan.svg/1280px-Tottenham_Hotspur_Stadium_Seating_Plan.svg.png"
              alt="Stadium seating plan"
              className="mx-auto w-full max-w-3xl"
            />
          </div>
        </main>
      </div>
    </Layout>
  );
}
