import { motion } from 'framer-motion'

function Alert(props) {
    let closeAlert = function() { document.getElementById("alert").style.display = "none" }

    return(
        <motion.div 
            onClick={closeAlert}
            id="alert"
            className="alert-box"
            initial="pageInitial" 
            animate="pageAnimate" 
            transition={{ duration: 1 }} 
            variants={{
                pageInitial: { 
                    display: 'block'
                },
                pageAnimate: { 
                    display: 'none'
                }
            }}>
                <div className="alert">
                    <div id="alert-text" className="alert-text">{props.message}</div>
                    <div className="alert-close">X</div>
                </div>
        </motion.div>
    )
}

export default Alert