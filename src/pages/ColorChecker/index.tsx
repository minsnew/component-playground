import { ImageAPI } from '@/service/api/images'
import { Image } from '@/common/models/image'
import { useEffect, useState } from 'react'

const ColorCheckerPage = () => {
  const [images, setImages] = useState<Image[]>([])

  const fetchImages = async () => {
    try {
      const { data } = await ImageAPI.getImages()
      setImages(data)
    } catch (error) {
      console.error('Failed to fetch images', error)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [])

  return (
    <div className="flex flex-col items-center">
      {images.map((it) => (
        <div key={it.id} className="p-4">
          <img width={320} height={320} src={it.url} />
        </div>
      ))}
    </div>
  )
}

export default ColorCheckerPage
