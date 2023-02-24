import { useContext, useEffect } from 'react'
import { CardProduct } from './CardProduct'
import styles from './CardField.module.css'
import { observer } from 'mobx-react-lite'
import { ServiceContext } from '../../context/ServiceContext'

// export interface IProduct {
//   id: number
//   image: string
//   title: string
//   description: string
//   price: number
// }

export const CardField = observer((): JSX.Element => {
  const { houses } = useContext(ServiceContext)

  useEffect(() => {
    houses.getHouses()
  }, [houses])

  if (!houses.allHouses) return null

  return (
    <div className={styles.content}>
      {houses.allHouses.map((card) => (
        <CardProduct key={card.image} card={card} />
      ))}
    </div>
  )
})
