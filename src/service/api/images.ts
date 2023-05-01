import { Image } from '@/common/models/image'
import Service from '..'

export const ImageAPI = {
  getImages: async () => {
    const response = await Service.get<Image[]>('/images')
    return response
  },
}
