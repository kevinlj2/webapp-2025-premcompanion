// src/app/pages/components/PremFooter.tsx
"use client";

export default function PremFooter() {
  return (
    <div className="w-full bg-gray-800 text-gray-300 mt-10 shadow-inner">
      <footer className="max-w-5xl mx-auto py-10 px-6 space-y-6">
        <h2 className="text-2xl font-bold text-center text-white">
          Prem Companion
        </h2>

        <div className="text-center space-y-1">
          <p className="font-semibold text-lg">Customer Support</p>

          <p>
            Email:{" "}
            <a
              href="mailto:support@premcompanion.com"
              className="text-blue-400 hover:underline"
            >
              support@premcompanion.com
            </a>
          </p>

          <p>
            Phone:{" "}
            <a
              href="tel:+471234567890"
              className="text-blue-400 hover:underline"
            >
              +47 1234 567 890
            </a>
          </p>

          <p className="text-gray-400 mt-2 text-sm">
            Available Monday – Friday, 08:00–16:00 (UTC +1)
          </p>
        </div>

        <hr className="border-gray-700" />

        <p className="text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} Prem Companion — All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
