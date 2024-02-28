import { CaretDown } from "@phosphor-icons/react/dist/ssr"

const Dropdown = ({ title = '', children }) => {
  return (
    <details className="group border border-black">
      <summary className="list-none flex justify-between font-medium p-4 bg-neutral-100 cursor-pointer">
        {title}
        <CaretDown size="2rem" className="ml-4 shrink-0 transition-transform group-open:rotate-180" />
      </summary>
      <div className="p-4 bg-white">{children}</div>
    </details>
  )
}

export default Dropdown