import Link from 'next/link'; import {ArrowRight} from 'lucide-react';
export default function Button({href='#',children,variant='gold'}:{href?:string,children:React.ReactNode,variant?:'gold'|'outline'}){return <Link href={href} className={`btn ${variant==='gold'?'btn-gold':'btn-outline'}`}>{children}<ArrowRight size={16}/></Link>}
