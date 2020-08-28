interface props {
    link:string;
    alt:string;
}
function Img( {link = 'content/images/githubReadme.png', alt}:props ) {
    console.log(link);
    
    return (
        <section>
            <img src={link} alt={alt}/>
        </section>
    )
}
export default Img