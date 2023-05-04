import checkmark from "../images/icon-check.svg";

const Features = () => {
    return (
        <section className="features--container">
            <p className="features--complex">Complex business with multiple financial accounts, currencies, or auditing needs?</p>
            <div className="features--subcontainer">
                <div className="features--heading--price--container">
                    <h2 className="features--heading">Unlock Extra Features</h2>
                    <p className="features--price">$89 per month</p>
                </div>
                <a href="https://signup.pulseapp.com/premium" className="features--premium">Try Premium</a>
                <p className="features--get-all">GET IT ALL, PLUS:</p>
                <ul className="features--li">
                    <li>
                        <div>
                            <img src={checkmark} alt=""/>
                            Manage cash flow across unlimited financial accounts
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={checkmark} alt=""/>
                            Convert to any currency for localized cash flow reporting and projections
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={checkmark} alt=""/>
                            Attach invoices or contracts to your cash flow entries for accountability and auditing
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Features;