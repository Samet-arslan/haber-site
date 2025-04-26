import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="M6RfthUGQt6kLh85ghLE1-EJfShW_uscwD7V-dn-umc"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
