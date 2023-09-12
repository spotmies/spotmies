// import HomePage from "@/components/homePage";
import Privacy from "@/components/privacy";
import Head from "next/head";

export default function PrivacyPolicies() {
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
      

      <Privacy />
    </div>
  );
}
