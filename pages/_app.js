import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'
import Navbar from '@components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            margin: '40px',
            background: '#363636',
            color: '#fff',
            zIndex: 1,
          },
          duration: 5000,
        }}
      />
    </>
  )
}

export default MyApp
