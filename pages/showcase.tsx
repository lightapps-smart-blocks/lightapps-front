import Header from '../components/Header';
import Footer from '../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export default function Showcase() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-24">
        <div className="h-1/2 w-3/4 flex items-center justify-center">
          <Carousel autoPlay infiniteLoop className="h-full w-full">
            <div className="h-full w-full flex items-center justify-center">
              <img src="/carousel/demo-01.jpeg" className="object-cover h-full w-full" />
              <p className="legend">Imagem 1</p>
            </div>
            <div className="h-full w-full flex items-center justify-center">
              <img src="/carousel/demo-02.jpeg" className="object-cover h-full w-full" />
              <p className="legend">Imagem 2</p>
            </div>
            <div className="h-full w-full flex items-center justify-center">
              <img src="/carousel/demo-03.jpeg" className="object-cover h-full w-full" />
              <p className="legend">demo-01.jpeg 3</p>
            </div>
          </Carousel>
        </div>
      </main>
      <Footer />
    </div>
  );
}