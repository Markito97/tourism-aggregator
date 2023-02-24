import { useEffect, useState } from 'react'
import { CardField, IProduct } from '../components/CardField/CardField'
import { SeacrhPanel } from '../components/SearchPanel/SearchPanel'
import { productsFirsLake, productsSecondLake } from '../store/stote'
import { useParams } from 'react-router-dom'

export const Hotels = (): JSX.Element => {
  const [products, setProducts] = useState<IProduct[]>(productsFirsLake)
  const { lake } = useParams()

  useEffect(() => {
    if (lake === 'first') {
      setProducts([...productsFirsLake])
    }
    if (lake === 'second') {
      setProducts([...productsSecondLake])
    }
    if (lake === undefined) {
      setProducts([...productsFirsLake, ...productsSecondLake])
    }
  }, [lake])

  return (
    <div>
      {/* <SeacrhPanel /> */}
      <CardField products={products} />
    </div>
  )
}
