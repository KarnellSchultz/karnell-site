interface props {
  link: string;
  alt: string;
}
function Img({
  link = 'content/images/githubReadme.png',
  alt,
}: props) {
  console.log(link);

  return (
    <section>
      <img src={link} alt={alt} width={300} />
    </section>
  );
}
export default Img;
