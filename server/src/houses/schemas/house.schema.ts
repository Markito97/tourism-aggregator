import { Schema } from '@nestjs/mongoose'
import { Prop } from '@nestjs/mongoose/dist'
@Schema()
export class House {
  @Prop()
  price: number
  @Prop()
  name: string
  @Prop()
  description: string
  @Prop()
  location: string
  @Prop()
  image: string
}
