"use client";
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import { Provider, useSelector } from 'react-redux';
import store from '../../utils/store';

const inter = Inter({ subsets: ['latin'] });

function LayoutContent({ children }) {
  // const toggle = useSelector((store) => store.video.isOpen);

  return (
    <div className="container">
      <Navbar />
      {children}
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          <LayoutContent>{children}</LayoutContent>
        </body>
      </html>
    </Provider>
  );
}
