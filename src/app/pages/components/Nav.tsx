export default function Nav() {
  return (
    <nav className="w-56 bg-gray-800 text-white flex flex-col min-h-screen py-8">
      <ul className="flex flex-col space-y-2">
        <li>
          <a
            href="/"
            className="block px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Overview
          </a>
        </li>
        <li>
          <a
            href="/teams"
            className="block px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Teams
          </a>
        </li>
        <li>
          <a
            href="/tickets"
            className="block px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Tickets
          </a>
        </li>
        <li>
          <a
            href="/history"
            className="block px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            History
          </a>
        </li>
        <li>
          <a
            href="/help"
            className="block px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Help
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="block px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Contact us
          </a>
        </li>
        <li>
          <a
            href="/profile"
            className="block px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Profile
          </a>
        </li>
      </ul>
    </nav>
  );
}
