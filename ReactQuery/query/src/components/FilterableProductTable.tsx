import { useState } from "react"
import { Product } from "../types"
import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar"

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
        onStockOnlyChange={ setinStockOnly } />
        
        <ProductTable products={ products } filterText={ filterText } inStockOnly={ inStockOnly } />
    </div>
)}

export default FilterableProductTable