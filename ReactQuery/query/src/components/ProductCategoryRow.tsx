type Props = {
    category: string
}

const ProductCategoryRow = ({category}: Props) => {
  return (
    <tr>
        <th colSpan={2}>{ category }</th>
    </tr>
  )
}

export default ProductCategoryRow