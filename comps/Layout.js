import Header from './Header'
import { motion } from 'framer-motion'

function Layout({ children }) {
    return(
        <>
            <Header />
            <main className="content">
                <motion.div 
                    initial="pageInitial" 
                    animate="pageAnimate" 
                    transition={{ duration: 0.75 }} 
                    variants={{
                        pageInitial: { x: 200 },
                        pageAnimate: { x: 0 }
                }}>
                    {children}
                </motion.div>
            </main>
        </>
    )
}

export default Layout
