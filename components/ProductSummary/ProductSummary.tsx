import React from 'react';
import { Item, Label } from 'semantic-ui-react';
import ProductAttributes from '@components/ProductSummary/ProductAttributes';
import AddToCart from '@components/ProductSummary/AddToCart';

type ProductSummaryProps = {
  product: TProduct
} 

const ProductSummary = ({product}: ProductSummaryProps) => {

  return (
    <>
    <Item.Group as="section">
      <Item style={{ alignItems: 'center' }}>
        <Item.Image size="medium">
          <img src={product.image} alt={product.name} />
        </Item.Image>
        <Item.Content>
          <Item.Header as="h1">{product.name}</Item.Header>
          <Item.Description>
            <p>$ {product.price}</p>
            <Label>{`SKU: ${product.sku}`}</Label>
          </Item.Description>
          <Item.Extra>
            {/* <AddToCart product={product} /> */}
            <AddToCart />
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
    <ProductAttributes {...product.attributes} />
  </>
  )
}

export default ProductSummary