import { useEffect } from 'react'

/** Sets the document title + meta description per page (SEO). */
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title
    if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
}
