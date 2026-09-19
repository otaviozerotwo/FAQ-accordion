import Card from './components/Card';
import Footer from './components/Footer';

const App = () => (
  <>
    <div className='bg-container' />
    <main className='flex flex-col grow items-center py-16'>
      <Card />
    </main>

    <Footer />
  </>
);

export default App;
