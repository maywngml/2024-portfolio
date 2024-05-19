import { getPlaiceholder } from 'plaiceholder';
import { promises as fs } from 'fs';

const getBase64 = async (src: string) => {
  const file = await fs.readFile(`${process.cwd()}/public${src}`);

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(file, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};

export default getBase64;
