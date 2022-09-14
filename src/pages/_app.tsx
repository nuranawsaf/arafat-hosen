import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/index.css'
import { Provider } from 'react-redux'
import { store } from '../redux/store/store'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    
    <Head>
        <title>Arafat Hosen</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;1,400&family=Poppins&display=swap" rel="stylesheet"/>
      </Head>
      <Provider store={store}>
        <Layout>
        <Component {...pageProps} />
       </Layout>
        
        </Provider>
    </>
  )
}

export default MyApp