import { useSearch } from '../context/Search'
import Router from 'next/router'

function Searchbar(props) {
    const { query, setQuery } = useSearch()

    let changeRoute = function() {
        Router.push('/')
    }

    return(
        <div>
            <input 
                onChange={e => { setQuery(e.target.value); changeRoute() }}
                className="searchbar"
                type="text" 
                autoComplete="off" 
                autoCorrect="off" 
                autoCapitalize="off" 
                spellCheck="false">
            </input>
        </div>
    )
}

export default Searchbar