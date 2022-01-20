import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import About from './Components/About'
import News from './Components/News'
import Product from './Components/Product'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
function App() {
  return (
    <div className="App">
      <Home />
    <NavBar/>
    <Header />
    <About />
    <News />
    <Product />
    <Contact/>
  <Footer />

    </div>
  );
}

export default App;
