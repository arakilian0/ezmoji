// CSS Imports
import '../styles/reset.css'
import '../styles/config.css'
import '../styles/styles.css'
import '../styles/global.css'
import '../styles/break.css'

// JS Import
import { SearchProvider } from '../context/Search'
import Layout from '../comps/Layout'

// Next App
export default function MyApp({ Component, pageProps }) {
    return(
        <SearchProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SearchProvider>
    )
}