import Image from 'next/image'
import './Header.css'
import logoEb from '../../public/images/logoEb.webp' 
import Link from 'next/link'
export default function Header(){
    return<>
    <header>
        <div className="container">
            <div className="row">
                <div className="col-3 logo-container">
                    <Link href="/">
                        <Image src={logoEb.src} height={logoEb.height} width={logoEb.width} alt="logo eb"/>
                    </Link>
                </div>
                <div className="col-5 offset-4 items-container">
                    <ul>
                        <li><Link href="/banesa">Banesa</Link></li>
                        <li><Link href="/shtepia">Shtëpia</Link></li>
                        <li><Link href="/lokale">Lokale</Link></li>
                        <li><Link href="Prona">Prona</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    </>
}