import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
export const metadata: Metadata={
    title:{default:'Transmute | Engineered for a Tougher Tomorrow',template:'%s | Transmute'},
    description:'High-performance ceramic-lined reinforced hose systems for demanding transfer applications.',
    metadataBase:new URL('https://www.transmuteindia.com')};
export default function RootLayout({children}:{children:React.ReactNode}){
    return (
    <html lang="en">
        <body>
            <Header/>
            {children}
            <Footer/>
        </body>
    </html>
    )
}
