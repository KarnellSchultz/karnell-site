import Image from 'next/image';

interface ImgProps {
  link: string;
  alt: string;
  width?: number;
  height?: number;
}
function Img({ link, alt, width = 300, height = 250 }: ImgProps) {
  return (
    <section>
      <Image src={link} alt={alt} width={width} height={height} />
    </section>
  );
}
export { Img };
