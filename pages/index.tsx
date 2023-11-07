import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-24">
        <h1>Welcome to Home Page</h1>
      </main>
      <Footer />
    </div>
  );
}