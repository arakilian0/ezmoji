import Image from 'next/image'
import Link from 'next/link'

function Logo(props) {
    return(
        <div className="logo">
            <div className="logo1">
                <Link href="/"><a>
                    <Image className="logo-desktop"
                        src="/logo.png" 
                        alt="" 
                        width="100"
                        height="100" />
                    </a></Link>
            </div>
            <div className="logo2 hide">
                <Link href="/"><a>
                    <Image className="logo-desktop"
                        src="/logo-mobile.png" 
                        alt="" 
                        width="100"
                        height="100" />
                    </a></Link>
            </div>
        </div>
    )
}

export default Logo