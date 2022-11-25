import React from 'react'
import Head from "next/head";

const meta = ({ title, description, content }) => {
  return (
    <Head>
    <title>{title ??  "FieldMaxPro - Field Force Automation"}</title>
    <meta name={description} content={content} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  )
}

export async function getStaticProps() {
    return {
      props: {
        title: "FieldMaxPro - Field Force Automation",
        description:
          "FieldMaxPro is an enterprise fieldforce management system designed for Sales/Marketing Managers and their Field Representatives in retail, pharmaceuticals and fmcg’s that sell consumer packaged and pharmaceutical products through a widespread retail chain.",
        content: "fieldforce management system",
      },
    };
  }
  

export default meta