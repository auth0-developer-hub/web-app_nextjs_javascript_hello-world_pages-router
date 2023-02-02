import { UserProvider } from "@auth0/nextjs-auth0/client";
import Head from "next/head";
import "../styles/styles.css";

function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Auth0 Next.js Sample</title>
      </Head>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default App;
