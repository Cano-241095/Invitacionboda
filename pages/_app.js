import '../styles/globals.css'
import AOS from 'aos';
import styles from '../styles/App.scss'
import { useLocation  } from 'react-router-dom'
import 'aos/dist/aos.css';
function MyApp({ Component, pageProps }) {
  
  return <Component {...AOS} />
}

export default MyApp
