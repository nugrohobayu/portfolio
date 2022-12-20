import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-regular-svg-icons'
import { faHatCowboy, fas } from '@fortawesome/free-solid-svg-icons'
import '../styles/globals.css'

library.add(fas,faFontAwesome, faHatCowboy)

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
