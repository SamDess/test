import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from "next-auth/react"
import { CartProvider } from "react-use-cart";

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  return (
  <CartProvider>
    <SessionProvider session={session}>
      <ThemeProvider defaultTheme="system" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  </CartProvider>
  )
}
export default MyApp
