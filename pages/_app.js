import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { CartProvider } from "react-use-cart";

function MyApp({ Component, pageProps: { ...pageProps }}) {
  return (
  <CartProvider>
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  </CartProvider>
  )
}
export default MyApp
