import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export default function Showcase() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-24">
        <Carousel autoPlay infiniteLoop>
          <div>
            <img src="/images/app1.png" />
            <p className="legend">App 1</p>
          </div>
          <div>
            <img src="/images/app2.png" />
            <p className="legend">App 2</p>
          </div>
          <div>
            <img src="/images/app3.png" />
            <p className="legend">App 3</p>
          </div>
        </Carousel>
      </main>
      <Footer />
    </div>
  );
}