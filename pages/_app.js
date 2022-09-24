import '../styles/globals.css'
import styles from '../styles/App.scss'
import { useLocation  } from 'react-router-dom'
function MyApp({ Component, pageProps }) {
  
  return <Component {...styles} />
}

export default MyApp
