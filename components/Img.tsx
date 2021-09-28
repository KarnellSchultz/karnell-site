import Image from 'next/image';

interface ImgProps {
  link: string;
  alt: string;
}
function Img({
  link = 'content/images/githubReadme.png',
  alt,
}: ImgProps) {
  console.log(link);

  return (
    <section>
      <Image src={link} alt={alt} width={300} />
    </section>
  );
}
export { Img };
