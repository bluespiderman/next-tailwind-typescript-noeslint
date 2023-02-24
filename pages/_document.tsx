import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <base href={process.env.PUBLIC_URL} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700,800,900"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700,800,900"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,800,900"
        />
      </Head>
      <body className="bg-[#141A1A] font-sans text-white font-normal" >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
