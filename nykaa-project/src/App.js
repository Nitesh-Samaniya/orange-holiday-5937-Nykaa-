import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import ImageSlider from "./Components/Slider/ImageSlider";
import Footer from "./Components/Footer/Footer";
import HomeMiddlePart1 from "./Components/HomeModdle/HomeMiddlePart1";
import AllRoutes from "./Pages/AllRoutes"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes />
      <ImageSlider />
      <HomeMiddlePart1 />
      <Footer />
    </div>
  );
}

export default App;
