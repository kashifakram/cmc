import React from "react"

type Props = {
    filterText: string,
    inStockOnly: boolean,
    onFilterTextChange: React.Dispatch<React.SetStateAction<string>>,
    onStockOnlyChange: React.Dispatch<React.SetStateAction<boolean>>,
    children: any
}

const SearchBar = ({ filterText = '', inStockOnly, onFilterTextChange, onStockOnlyChange, children }: Props) => {
  return (
    <form>
        <input type="text" placeholder="search..." value={ filterText } onChange={(e) => onFilterTextChange(e.target.value)} />
        <br />
        <label>
            <input type="checkbox" checked={ inStockOnly } onChange={e => onStockOnlyChange(e.target.checked)} />
            {' '}
            Show in stock products only
        </label>
    </form>
  )
}

export default SearchBar