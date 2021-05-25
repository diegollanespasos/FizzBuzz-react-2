import './FizzBuzz.css';
import { getBackgroundColor, getText } from './FizzBuzz.utils';

const FizzBuzz = ({ number }) => {
    return(
        <div className={`fizzbuzz ${getBackgroundColor(number)}`}>
        {
            <h1>{getText(number)}</h1>
        }       
        </div>
    )
}

export default FizzBuzz;