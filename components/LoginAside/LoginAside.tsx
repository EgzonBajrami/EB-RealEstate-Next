import './LoginAside.css'
import Image from 'next/image';
import logoEb from '../../public/images/logoEb.webp'
export default function LoginAside(){
    return<>
    <div className="login-aside">
        <div className="image-holder">
            <Image src={logoEb.src} alt="Logo eb" width={logoEb.width} height={logoEb.height} />
        </div>
    </div>
    </>
}