const Hero = ({ h1Text, spanText, pText, embedId }) => {
    return (
        <div className="hero--container">
            <h1 className="hero--heading">{h1Text} <span className="hero--heading--span">{spanText}</span></h1>
            <p className="hero--description">{pText}</p>
            <div className="hero--video--container">
                <iframe src={`https://www.youtube.com/embed/${embedId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded Youtube video"
                />
            </div>
        </div>
    )
}

export default Hero;