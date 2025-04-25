import HomePage from "@/components/homePage";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spotmies</title>
        <meta
          name="description"
          content="Spotmies is a leading provider of innovative solutions for Product Designing & Blockchain. With a team of experienced professionals & a commitment to excellence, we are dedicated to helping our clients achieve their goals and stay ahead of the competition. Our mission is to provide high-quality services & products that deliver tangible results and drive business success."
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      {/* Facebook Pixel Script */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1674970513183525');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1674970513183525&ev=PageView&noscript=1"
          alt="facebook-pixel"
        />
      </noscript>

      {/* Google Analytics Script */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-NQF1FJCBN7`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NQF1FJCBN7', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <HomePage />
    </div>
  );
}
