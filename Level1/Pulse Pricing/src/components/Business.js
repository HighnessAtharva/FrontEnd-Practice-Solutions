import checkmark from "../images/icon-check.svg";

const Business = () => {
    return (
        <section className="business--container">
            <p className="business--recommended">RECOMMENDED</p>
            <div className="business--subcontainer">
                <div className="business--heading--price--container">
                    <h2 className="business--heading">Small Business Plan</h2>
                    <p className="business--price">$59 per month</p>
                </div>
                <a href="https://signup.pulseapp.com/plus" className="business--sign-up">Sign Up Now</a>
                <p className="business--what--you--get">YOU GET PULSE BASICS, PLUS:</p>
                <ul className="business--li">
                    <li>
                        <div>
                        <img src={checkmark} alt=""/>
                        Manage cash flow across multiple financial accounts
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={checkmark} alt=""/>
                            Invite your investors, book keeper, or management team to see reports or manage cash flow
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={checkmark} alt=""/>
                            Integrate with QuickBooks Online for more accurate cash flow
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={checkmark} alt=""/>
                            Track your actual cash flow alongside your projected cash flow
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Business;