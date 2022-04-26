import Head from '../comps/Head'
import Alert from '../comps/Alert'
import { motion } from 'framer-motion'
import ezmoji from '../ezmoji.json'
import { useSearch } from '../context/Search'

const headProps = {
    title: "HTML Emojis for the Web - ezmoji",
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

function HomePage() {
    const { query, setQuery } = useSearch()

    let currentEmoji
    let newAlertMsg
    let ezmojis = []
    
    let copyEmoji = function(e) {
        let elAlert = document.getElementById("alert")
        let elAlertText = document.getElementById("alert-text")

        if(e.target.className !== "card-text") { currentEmoji = e.target.firstChild.nodeValue }
        else { currentEmoji = e.target.parentNode.firstChild.nodeValue }

        navigator.clipboard.writeText(currentEmoji)
        newAlertMsg = `copied ${currentEmoji} to your clipboard`
        elAlertText.innerText = newAlertMsg
        elAlert.style.display = "block"
    }

    for (const prop in ezmoji) { ezmojis.push(ezmoji[prop]) }

    return(
        <div>
            <Head {...headProps} />
            <motion.div
                initial="pageInitial" 
                animate="pageAnimate" 
                transition={{ duration: 0.75 }} 
                variants={{
                    pageInitial: { opacity: 0 },
                    pageAnimate: { opacity: 1 }
            }}>
                <div>
                    <p className="body-text">
                        <span className="body-text-pt1">💤 Easy HTML Emojis for the Web.</span>
                        <br className="body-text-break hide" />
                        <span className="body-text-pt2"> (Click an emoji to copy it)</span>
                        <span className="body-text-pt2-m hide"> (Click an emoji to copy it)</span>
                    </p>
                </div>
                <div className="ezmojis">
                    <ul className="cards flex center wrap">
                        {ezmojis.filter(ez => {
                            if(query === null) return ez
                            else {
                                let newCode = ez.code.replaceAll(':', '')
                                newCode = newCode.replaceAll('_', '')
                                
                                if(newCode.includes(query.toLowerCase())) { return ez }
                            }
                        }).map(ez => {
                            return(
                                <li 
                                    onClick={copyEmoji}
                                    className="card card-highlight" 
                                    key={ez.code}>
                                        {ez.emoji}
                                        <br />
                                        <span className="card-text">{ez.code}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <Alert />
            </motion.div>
        </div>
    )
}

export default HomePage
