import './App.css'
import Footer from './Common/Footer'
import PageHeader from './Common/PageHeader'
import { ThemeProvider } from 'next-themes'
import CarouselComponent from './Carousel.component.tsx';
import Fashion from './Pages/Fashion.tsx';
import Accessory from './Pages/Accessory.tsx';
import Digital from './Pages/Digital.tsx';

function App() {

  return (
    <ThemeProvider>
      <PageHeader />
      <CarouselComponent />
      <div>
        <Fashion />
        <Accessory />
        <Digital />
      </div>
      <Footer />
    </ThemeProvider>
  )
}

export default App
