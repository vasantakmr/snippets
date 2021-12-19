import Head from 'next/head'
import Link from 'next/link'
import ListBox from '@components/ListBox'

export default function Components() {
  return (
    <>
      {/* Keep the existing code here */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="container">
        <aside className="bg-gray-700 card">
          <ListBox />
        </aside>
        <section className="bg-gray-200 ml-3 mt-3">
          <p>Lorem ipsum dolor </p>
        </section>
    </main>
      </div>
      
    </>
  )
}