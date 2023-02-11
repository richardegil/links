import React from 'react'

interface PageLinkProps {
  name: string;
  url: string;
}
const PageLink = ({name, url}: PageLinkProps) => {
  return (
    <a className='flex items-center justify-center px-8 py-4 w-full max-w-[500px] bg-slate-50 text-slate-900' href={url}>
      {name}
    </a>
  )
}

export default PageLink;