import Header from '../components/Header';

export default function Contact() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center p-24">
        <h1>Contact Us</h1>
        <p className="mt-4 text-xl">Name: Daniel</p>
        <p className="mt-2 text-xl">Email: email@com</p>
      </main>
    </div>
  );
}