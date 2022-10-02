import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import Footer from "./Components/Footer/Footer";
import AllRoutes from "./Pages/AllRoutes"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
