import './App.css';
import FizzBuzz from './components/FizzBuzz/FizzBuzz';

const App = () => {
  return (
    <div className="fizzbuzz-container">
    {
      Array(100).fill(null).map((curr,idx) => <FizzBuzz key={idx} number={idx+1} />)
    }
    </div>
  );
}

export default App;