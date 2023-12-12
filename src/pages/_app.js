import React from 'react';
import 'semantic-ui-css/semantic.css';
import '@/styles/globals.css';
import { Input, Button, Menu } from 'semantic-ui-react';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Menu>
        <Menu.Item as={Link} href='/'>Home</Menu.Item>
        <Menu.Item as={Link} href='/cards'>Card Generator</Menu.Item>
        <Menu.Item as={Link} href='/mydeck'>My Deck</Menu.Item>
        <Menu.Item>
          <Input/>
          <Button>Card Search</Button>
        </Menu.Item>
      </Menu>
    
    <Component {...pageProps} />
    </>
  ) 
}