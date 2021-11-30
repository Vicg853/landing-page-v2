import Image from 'next/image'
import type { ImageProps } from 'next/image'

//TODO Add Unsplash API loader integration (also later for blog page header)
//TODO Add variable image value for src or component

export type ImageBackgroundProps = {
   imgSource: any
   customPlaceholder?: ImageProps['placeholder'],
   customBlurDataURL?: ImageProps['blurDataURL'],
   bgAlt?: string
}

import DefaultImg from '@p-images/index/test.jpg'

const HeaderImgBackground = ({imgSource, customPlaceholder, customBlurDataURL, bgAlt}: ImageBackgroundProps) => (
   <Image 
      id="background"
      src={imgSource ? imgSource : DefaultImg} 
      alt={bgAlt? bgAlt : 'Background do cabeçalho de pagina do site da Alpes Capital.'}
      layout="fill"
      objectFit="cover"
      loading='lazy' 
      placeholder={customPlaceholder ? customPlaceholder : 'blur'}
      blurDataURL={customBlurDataURL ? customBlurDataURL : undefined}
      quality={100} />
)

export default HeaderImgBackground