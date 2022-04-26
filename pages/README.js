import Head from '../comps/Head'
import { motion } from 'framer-motion'
import { marked } from 'marked'
import DOMPurify from 'isomorphic-dompurify'

const headProps = {
    title: "README - ezmoji",
    description: "ezmoji aims to be a consistent API for Unicode Emojis. The project sprung from the need of a Web based Emoji API.",
    keywords: [
        "ezmoji",
        "html",
        "javascript",
        "emoji",
        "api",
        "unicode"
    ]
}

function READMEPage() {
    let notSanitized
    let isSanitized

    fetch("https://raw.githubusercontent.com/arakilian0/ezmoji/master/README.md")
        .then(response => response.text())
        .then(text => {
            notSanitized = marked.parse(text, {})
            isSanitized = DOMPurify.sanitize(notSanitized)
            document.getElementById("markdown").innerHTML = isSanitized
        })
    
    return(
        <div>
            <Head {...headProps} />
            <motion.div
                id="markdown"
                initial="pageInitial" 
                animate="pageAnimate" 
                transition={{ duration: 0.75 }} 
                variants={{
                    pageInitial: { opacity: 0 },
                    pageAnimate: { opacity: 1 }
            }}>
            </motion.div>
        </div>
    )
}

export default READMEPage
