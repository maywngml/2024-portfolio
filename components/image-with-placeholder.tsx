import Image from 'next/image';
import getBase64 from '@/lib/utils/getBase64';
import type { ImageProps } from 'next/image';

async function ImageWithPlaceholder({ src, ...props }: ImageProps) {
  const { base64 } = await getBase64(src as string);

  return (
    <Image
      src={src}
      placeholder='blur'
      blurDataURL={base64}
      {...props}
    />
  );
}

export default ImageWithPlaceholder;
