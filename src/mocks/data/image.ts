import { Image } from '@/common/models/image'
import { faker } from '@faker-js/faker'

export const generateImage = (): Image => {
  return {
    id: faker.datatype.uuid(),
    url: faker.image.food(undefined, undefined, true),
  }
}

export const generateImages = (count = 100): Image[] => {
  return Array.from(Array(count), () => {
    return generateImage()
  })
}
