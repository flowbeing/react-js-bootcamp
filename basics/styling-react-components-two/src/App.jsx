import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main className="rounded-none">
        <AuthInputs />
      </main>
    </>
  );
}
