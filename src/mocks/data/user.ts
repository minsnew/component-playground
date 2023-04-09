import { User } from '@/common/models/user'
import { faker } from '@faker-js/faker'

const isRandomTrue = () => {
  return faker.datatype.boolean()
}

export const generateUser = (): User => {
  const createdAt = faker.date.past()

  return {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    createdAt,
    updatedAt: createdAt,
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    avatar: isRandomTrue() ? faker.image.avatar() : undefined,
  }
}

export const generateUsers = (count = 100): User[] => {
  return Array.from(Array(count), () => {
    return generateUser()
  })
}
