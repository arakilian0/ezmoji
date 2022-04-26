import Header from './Header'
import { motion } from 'framer-motion'

function Layout({ children }) {
    return(
        <>
            <Header />
            <main className="content">
                <div>
                    {children}
                </div>
            </main>
        </>
    )
}

export default Layout
