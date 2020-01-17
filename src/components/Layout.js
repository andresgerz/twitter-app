import Head from 'next/head'
import NavbarWeb from './NavbarWeb'
import Footer from './Footer'


const Layout = (props) => (

    <div>
        <Head>
        <title>Twitter app</title>
        
        <link rel="icon" href="/favicon.ico" />

        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
        />

        </Head>
        <NavbarWeb />
        <div className="main">
            {props.children}
        
        </div>
        <Footer />

        <style jsx> {
            `
            .main {
                height: 400px;        
                background: #1c92d2;  /* fallback for old browsers */
                background: -webkit-linear-gradient(to top, #f2fcfe, #1c92d2);  /* Chrome 10-25, Safari 5.1-6 */
                background: linear-gradient(to top, #f2fcfe, #1c92d2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            }
            `
        }
        
        </style>
    </div>
)

export default Layout