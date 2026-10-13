import { useNavigate } from 'react-router-dom'
import { searchOptions } from '../data/site'
import { Arrow } from './Icons'

/**
 * Property search. The site has no property database, so this turns the
 * selection into a pre-filled enquiry on the Contact page.
 */
export default function SearchForm() {
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams(new FormData(e.currentTarget))
    navigate(`/contact?${params.toString()}#enquiry`)
  }

  const Select = ({ id, name, label, options }) => (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name}>{options.map((o) => <option key={o}>{o}</option>)}</select>
    </div>
  )

  return (
    <form onSubmit={onSubmit} aria-label="Property search"
      className="grid gap-4 border-t-[3px] border-bronze bg-white p-5 shadow-[0_30px_60px_-28px_rgba(0,0,0,.45)] sm:grid-cols-2 sm:p-7 lg:grid-cols-[repeat(4,1fr)_auto] lg:items-end">
      <Select id="s-need" name="need" label="Looking to" options={searchOptions.need} />
      <Select id="s-type" name="type" label="Property type" options={searchOptions.type} />
      <Select id="s-loc" name="location" label="Location" options={searchOptions.location} />
      <div className="field">
        <label htmlFor="s-bud">Budget (optional)</label>
        <input id="s-bud" name="budget" type="text" placeholder="e.g. 1.5 Cr" />
      </div>
      <button type="submit" className="btn justify-center sm:col-span-2 lg:col-span-1">Search <Arrow /></button>
    </form>
  )
}
