/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardBody, Image } from '@nextui-org/react';

const ImageCard = ({ url, onclick, selected = [], id }: any) => {
  return (
    <Card
      className='rounded-none relative'
      isPressable
      onClick={() => onclick(url)}>
      <div
        className={`${
          selected.includes(id)
            ? 'absolute h-[140px] w-[140px] bg-black/60 z-20'
            : ''
        }`}
      />
      <CardBody className='overflow-visible p-0 rounded-none'>
        <Image
          width='100%'
          alt=''
          className='w-full h-[140px]  object-cover rounded-sm'
          src={url}
        />
      </CardBody>
    </Card>
  );
};

export default ImageCard;
