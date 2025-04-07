import React from 'react';
import { useSignOut } from '@clerk/clerk-react';
import { Button } from 'react-bootstrap';

function Header() {
  const { signOut } = useSignOut();
  return (
    <header className="header">
      <h1>Game Store</h1>
      <Button variant="outline-danger" onClick={() => signOut()}>Sign Out</Button>
    </header>
  );
}

export default Header;