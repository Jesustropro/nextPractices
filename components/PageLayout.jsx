import Head from "next/head";
export default function PageLayout({ children, title = "NotiNext" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Aplicación de noticias para practicar Next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
}
