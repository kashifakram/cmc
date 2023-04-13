import { Product } from "../types"

type Props = {
    product: Product
}

const ProductRow = ({product: {price, stocked, name}}: Props) => {
  const pname = stocked ? name : <span style={{color: 'red'}}>{ name }</span>
  return (
    <tr>
        <td>{ pname }</td>
        <td>{ price }</td>
    </tr>
  )
}

export default ProductRow