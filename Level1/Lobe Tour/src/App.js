import Header from "./components/Header";
import Hero from "./components/Hero";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import "./style/general.css";

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Hero h1Text="Lobe" spanText="Tour" pText="Build your first machine learning model in ten minutes. No code or experience required." embedId="Mdcw3Sb98DA"/>
        <CallToAction h2Text="Train your app with Lobe" buttonText="Download"/>
      </main>
      <Footer/>
    </div>
  )
}

export default App;