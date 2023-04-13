import { Product } from "../types"
import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

type Props = {
  products: Product[],
  filterText: string,
  inStockOnly: boolean
}

const ProductTable = ({ products, filterText = '', inStockOnly }: Props) => {

  const rows: any = []
  let lastCategory = ''

  products.forEach(product => {
    if ( product.name.toLocaleLowerCase().indexOf(filterText.toLowerCase()) === -1 || (inStockOnly && !product.stocked) ) return

    if (product.category !== lastCategory)
      rows.push(
         <ProductCategoryRow category={ product.category } key={ product.category } />
      )
    
    rows.push(
      <ProductRow product={ product } key={ product.name } />
    )

    lastCategory = product.category
  })

  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Price</th>
      </thead>
      <tbody>{ rows }</tbody>
    </table>
  )
}

export default ProductTable