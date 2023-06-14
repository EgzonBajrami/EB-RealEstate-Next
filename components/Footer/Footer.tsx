import './Footer.css'
import logoEb from '../../public/images/logoEb.webp'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer(){
    return<>
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-3 logo-container-footer">
                    <Image src={logoEb.src} alt="Logo of EB Real Estate" width={logoEb.width} height={logoEb.height} />
                </div>
                <div className="col-md-3 links-container-footer">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/banesa">Banesa</Link></li>
                        <li><Link href="/shtepia">Shtëpia</Link></li>
                        <li><Link href="/lokale">Lokale</Link></li>
                        <li><Link href="/prona">Prona</Link></li>
                    </ul>
                </div>
                <div className="col-md-3 offset-md-2 contact-footer">
                    <div className="contact-footer-title">
                        <h6>Kontakti:</h6>
                    </div>
                    <div className="contact-details">
                        <p>bekim.i.bajrami@gmail.com</p>
                        <p>+383 049 678 698</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
}