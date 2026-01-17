import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Aqui renderizam as páginas */}
      <Footer />
      <WhatsAppButton />
    </>
  );
}