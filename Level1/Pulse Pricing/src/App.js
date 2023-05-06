import "./style/general.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Basic from "./components/Basic";
import Business from "./components/Business";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import Subvert from "./images/subvert-avatar.png";
import Question from "./components/Question";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <main>
      <Hero h1Text="Try Pulse free for 30 days." pText="See why Pulse is the best way to monitor your cash flow. Sign up for any plan and try Pulse absolutely free for 30 days."/>
      <section className="options--container">
        <Basic/>
        <Business/>
        <Features/>
      </section>
      <Testimonial src={Subvert} quote='“Pulse is worth every penny because it empowers business owners with critical financial insight and knowledge.”' author="SUBVERT MARKETING, INC."/>
      <section className="faq--section">
        <h2 className="faq--heading">FAQ</h2>
        <div className="faq--container">
          <Question question="How does the 30-day free trial work?" answer="You can use Pulse absolutely free for 30 days. After 30 days, we will charge the credit card you used when you sign up. If you choose to cancel your account before your trial ends, your card will not be charged."/>
          <Question question="If I upgrade an existing account, do I get another free trial?" answer="Brand new accounts are the only ones eligible for a 30-day free trial. If you upgrade an existing account, your credit card will be billed the new amount on the date of your next billing cycle."/>
        </div>
        <div className="faq--container">
          <Question question="What is a “Financial Account”?" answer="Financial Accounts are a grouping of income and expense items that can be used for tracking or reporting purposes. They’re designed to be flexible and can be used to differentiate between bank accounts, companies, individuals or between personal and business entries."/>
          <Question question="Do I have to commit to a long-term contract?" answer="No. There is no contract when you use Pulse, other than agreeing to our Terms of Service."/>
        </div>
        <div className="faq--container">
          <Question question="Will I be able to cancel my account if I don’t use Pulse?" answer="Yes – you can cancel your account at any time. To cancel your account, go to your billing page and click on “Please cancel my account” at the bottom of the page. The account owner is the only one who can cancel an account. An email request to delete an account is not considered cancellation."/>
          <Question question="What types of payments do you accept?" answer="We accept payments made online using Visa, Mastercard, Discover, and American Express."/>
        </div>
      </section>
      </main>
      <Footer/>
      <Contact/>
    </div>
  );
}

export default App;
