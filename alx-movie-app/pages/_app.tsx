import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '../lib/fontawesome';


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
