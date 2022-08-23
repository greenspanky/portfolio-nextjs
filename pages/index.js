import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Games from "../components/Games";
import Partners from "../components/Partners";


export default function Home() {
  return (
    <div>
      <Head>
        <title> Bigtime Warriiors Gaming Guild </title>{" "}
        <meta
          name="description"
          content="We are excited to start our web3 gaming guild with a team of competent people willing to take our community the best it can be! Join us in making history for the best gaming guild!"
        />
        <link rel="icon" href="" />
      </Head>{" "}
      <Main />
      <About />
      <Partners />
      <Games />
      <Contact />
    </div>
  );
}
