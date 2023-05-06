const CallToAction = ({ h2Text, buttonText }) => {
    return (
        <section className="cta--container">
            <h2 className="cta--heading">{h2Text}</h2>
            <button className="cta--button">{buttonText}</button>
        </section>
    )
}

export default CallToAction;