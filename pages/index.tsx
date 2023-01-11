import Head from 'next/head'
import HomePage from '../Components/HomePage'

import { Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jenny Klein</title>
        <meta name="description" content="Jenny Klein's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <HomePage/>
      </main>
    </>
  )
}
