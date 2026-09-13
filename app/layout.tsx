import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
export const metadata: Metadata={title:{default:'Transmute | Engineered for a Tougher Tomorrow',template:'%s | Transmute'},description:'High-performance ceramic-lined reinforced hose systems for demanding transfer applications.',metadataBase:new URL('https://www.terrametventures.com')};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}<Footer/></body></html>}
