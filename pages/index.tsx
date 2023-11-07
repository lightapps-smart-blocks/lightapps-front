import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center p-24">
        <h1>Welcome to Home Page</h1>
      </main>
    </div>
  );
}