const Testimonial = ({ src, quote, author }) => {
    return (
        <figure className="testimonial--container">
            <img src={src} alt="" className="testimonial--author--logo"/>
            <blockquote className="testimonial--blockquote">
                <p className="testimonial--quote">{quote}</p>
                <cite className="testimonial--cite">{author}</cite>
            </blockquote>
        </figure>
    )
}

export default Testimonial;