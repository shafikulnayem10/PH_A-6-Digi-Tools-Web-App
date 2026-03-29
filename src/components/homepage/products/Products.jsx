import React from 'react'
import { use } from 'react'

export default function Products({ productsPromise }) {
    const products = use(productsPromise);


  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
        </div>
      ))}

    </div>
  )
}
