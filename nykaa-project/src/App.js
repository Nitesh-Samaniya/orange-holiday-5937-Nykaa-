import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import ImageSlider from "./Components/Slider/ImageSlider";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;
