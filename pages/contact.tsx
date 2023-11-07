import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-24">
        <h1>Contact Us</h1>
        <p className="mt-4 text-xl">Name: Daniel</p>
        <p className="mt-2 text-xl">Email: email@com</p>
      </main>
      <Footer />
    </div>
  );
}