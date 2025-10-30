"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="relative bg-gray-800 dark:bg-gray-800/50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
            >
              <span className="sr-only">Open main menu</span>

              {/* Icon when mobile menu is closed */}
              {!mobileOpen && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="size-6"
                >
                  <path
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}

              {/* Icon when mobile menu is open */}
              {mobileOpen && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="size-6"
                >
                  <path
                    d="M6 18 18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo + desktop menu */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {["Dashboard", "Team", "Projects", "Calendar"].map(
                  (item, i) => (
                    <a
                      key={i}
                      href="#"
                      className={`rounded-md px-3 py-2 text-sm font-medium ${
                        i === 0
                          ? "bg-gray-900 text-white dark:bg-gray-950/50"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="block sm:hidden px-2 pt-2 pb-3 space-y-1">
          {["Dashboard", "Team", "Projects", "Calendar"].map((item, i) => (
            <a
              key={i}
              href="#"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                i === 0
                  ? "bg-gray-900 text-white dark:bg-gray-950/50"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
