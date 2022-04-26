import Head from '../comps/Head'
import { motion } from 'framer-motion'
import { marked } from 'marked'
import DOMPurify from 'isomorphic-dompurify'

const headProps = {
    title: "README",
    description: "asdasd",
    keywords: [
        "asdasd",
        "ssssss"
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
                    pageInitial: { x: 200 },
                    pageAnimate: { x: 0 }
            }}>
            </motion.div>
        </div>
    )
}

export default READMEPage
