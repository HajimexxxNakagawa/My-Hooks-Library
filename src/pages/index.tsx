import * as React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Counter from '../components/Counter'
import MousePosition from '../components/MousePosition'
import Toggle from '../components/Toggle'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nice Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Counter />
        <MousePosition />
        <Toggle />
      </main>
    </div>
  )
}

export default Home
