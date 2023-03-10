import Link from 'next/link'
import React from 'react'
import { Card, Image } from 'semantic-ui-react'

type ProductListProps = {
    products: TProduct[]
}


const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (

      <Card
        href={`/product/${id}`}
        as="a"
        header={name}
        image={{ children: <Image src={image} width={250} height={250} /> }}
        meta={{
          children: <Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>,
        }}
      />

  ))

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={3} stackable>
    {mapProductsToCards(products)}
  </Card.Group>
)

export default ProductList