import type { ReactNode } from 'react';
import { lazy } from 'react';
import Header from '../UI/Header';
const Footer = lazy(() => import('../UI/Footer'));

const Layout = ({ children }: { children: ReactNode }) => (
    <>
        <Header />
        { children }
        <Footer />
    </>
);

export default Layout;