import Header from './sections/Header';
import Hero from './sections/Hero';
import Products from './sections/Products';
import Advantages from './sections/Advantages';
import Calculator from './sections/Calculator';
import Contacts from './sections/Contacts';
import Footer from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Products />
        <Advantages />
        <Calculator />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
