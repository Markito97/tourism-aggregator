import React, { useEffect, useState } from 'react'
import { CardField, IProduct } from '../components/CardField/CardField'
import { SeacrhPanel } from '../components/SearchPanel/SearchPanel'
import { productsFirsLake, productsSecondLake } from '../store/stote'
import { useParams } from 'react-router-dom'

export const Hotels = (): JSX.Element => {
  const [products, setProducts] = useState<IProduct[]>([])
  const { lake } = useParams()

  useEffect(() => {
    if (lake === 'first') {
      setProducts([...productsFirsLake])
    }
    if (lake === 'second') {
      setProducts([...productsSecondLake])
    }
    if (lake === undefined) {
      console.log(lake)
      setProducts([...productsFirsLake, ...productsSecondLake])
    }
  }, [lake])

  return (
    <>
      <SeacrhPanel />
      <CardField products={products} />
    </>
  )
}
