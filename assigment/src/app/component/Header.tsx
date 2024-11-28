// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-slate-700 p-4">
      <nav className="flex justify-between">
        <h1 className="text-white text-2xl">Governor Sindh</h1>
        <ul className="flex gap-4">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/Apply">Apply</Link>
          </li>
          <li>
            <Link href="/jobs">Jobs</Link>
          </li>
          <li>Cources</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
