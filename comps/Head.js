import _Head from 'next/head'

function Head(props) {
    return(
        <_Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords} />
        </_Head>
    )
}

export default Head