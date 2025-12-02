"use client";

import React from "react";

export default function Transaction() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    typeof window !== "undefined" && localStorage.getItem("auth") === "true"
  );

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    window.location.href = "/login";
  };

  const transactions = [
    {
      name: "Mr. Example",
      date: "01.01.2025",
      time: "At 8:00 PM",
      ticketId: "#123456ABC",
      amount: "£199.00",
    },
  ];

  return (
    <div className="flex flex-col flex-1 bg-gray-200">
      <header className="w-full px-8 py-6 border-b border-black flex justify-between items-center bg-gray-100">
        <h1 className="text-4xl font-bold text-black">Transaction History</h1>

        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="font-bold text-xl flex items-center space-x-2 hover:opacity-80"
            >
              <span>Logout</span>
              <span>🔓</span>
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="font-bold text-xl flex items-center space-x-2 hover:opacity-80"
            >
              <span>Login</span>
              <span>🔒</span>
            </button>
          )}
        </div>
      </header>

      <div className="flex-1 p-6 overflow-y-auto">
        <div className="w-full bg-white shadow rounded">
          <div className="grid grid-cols-4 text-xl font-bold bg-gray-700 text-white py-4 px-4 border-b border-black">
            <div>Name</div>
            <div className="text-center">Date</div>
            <div className="text-center">Ticket ID</div>
            <div className="text-right pr-4">Amount</div>
          </div>

          {isLoggedIn ? (
            <>
              {transactions.map((t, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 py-6 px-4 border-b border-gray-300 text-lg"
                >
                  <div>{t.name}</div>
                  <div className="text-center">
                    <div>{t.date}</div>
                    <div className="text-sm text-gray-600">{t.time}</div>
                  </div>
                  <div className="text-center">{t.ticketId}</div>
                  <div className="text-right pr-4 font-semibold">
                    {t.amount}
                  </div>
                </div>
              ))}

              {[...Array(5)].map((_, i) => (
                <div
                  key={"empty" + i}
                  className="grid grid-cols-4 py-8 px-4 border-b border-gray-300"
                ></div>
              ))}
            </>
          ) : (
            <div className="p-8 text-center text-gray-600 text-xl">
              You must be logged in to view your transaction history.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
