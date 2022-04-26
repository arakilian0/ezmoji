import Link from 'next/link'
import Logo from './Logo'
import Searchbar from './Searchbar'
import SearchIcon from './Icon/Search'

function Header(props) {
    return(
        <header className="flex between center pd-lg white text-black header">
            <div className="flex between center">
                <Logo />
                <nav>
                    <ul className="flex bottom">
                        <li><Link href="/README"><a className="link"><span className="link-highlight">README</span></a></Link></li>
                        <li><a className="link" href="https://github.com/arakilian0/ezmoji" target="_blank"><span className="link-highlight">GITHUB</span></a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <SearchIcon width="22" height="22" stroke="1.5" />
                <Searchbar />
            </div>
            <div className="leveler"></div>
        </header>
    )
}

export default Header