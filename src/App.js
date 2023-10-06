import logo from './logo.svg';
import './App.css';
import Review from './Review';
import Error from './Error';

function App() {
  return (
    <div className='main'>
      <section className='container'>
        <div className='title'>
          <h2>Our Reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
      <Error/>
    </div>
  );
}

export default App;
