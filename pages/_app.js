import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <title>MaileHereko</title>
      </Head>

      <div className="text-2xl bg-[#14182D] pb-20">
        <nav className="sticky top-0 z-50">
          <Navbar />
        </nav>
        <div className="absolute z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#0F2B44] via-[#0F2B44] to-[#0F2B44] top-32 h-96 md:h-[500px] w-60 md:w-[500px] blur-3xl rounded-full"></div>
        <div className="absolute z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#191A3E] via-[#191A3E] to-[#191A3E] -top-20 right-40 h-96 md:h-[500px] w-60 md:w-[500px] blur-3xl rounded-full"></div>
        <div className="relative z-10">
          <Component {...pageProps} />
        </div>

      </div>
    </>
  )
}

