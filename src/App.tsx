import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import PageLink from './components/PageLink'
import Footer from './components/Footer'

export type TLink = {
  id: string;
  name: string;
  url: string;
}

function App() {
  const [links, setLinks] = useState<TLink[]>([]);

  async function getLinks(url: string): Promise<TLink[]> {
    const data = await fetch(`${url}`);
    return data.json();
  }

  useEffect(() => {
    async function fetchLinks() {
      const newLinks = await getLinks(`${import.meta.env.VITE_LINKS_URL}`);
      setLinks(newLinks);
    }
    fetchLinks();
  }, [])


  return (
    <>
      <Header />
      <main className='flex flex-col gap-4 w-screen h-auto justify-start pt-[0px] pb-[0px] items-center'>
          {links && links.map((link) => (
            <PageLink
              key={link.id}
              name={link.name}
              url={link.url}
            />
          ))}
      </main>
      <Footer />
    </>
  )
}

export default App
