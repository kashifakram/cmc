import { useState } from "react"
import { Product } from "../types"
import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar"
import ImmerPerson from "./ImmerPerson"

type Props = {
    products: Product[]
  }

const FilterableProductTable = ({ products }: Props) => {

    const [ filterText, setFilterText ] = useState('')
    const [ inStockOnly, setinStockOnly ] = useState(false)

    return (
    <div>
        <SearchBar 
        filterText={ filterText } 
        inStockOnly={ inStockOnly } 
        onFilterTextChange={ setFilterText } 
        onStockOnlyChange={ setinStockOnly } >
            Child Node
        </SearchBar>

        <ProductTable products={ products } filterText={ filterText } inStockOnly={ inStockOnly } />

        <ImmerPerson />
    </div>
)}

export default FilterableProductTable