export const getBackgroundColor = (number) => {
    if(number%3 === 0 && number%5 === 0) return 'green';

    if(number%3 === 0) return 'red';

    if(number%5 === 0) return 'yellow';

    return '';
}

export const getText = (number) => {
    if(number%3 === 0 && number%5 === 0) return 'FizzBuzz';

    if(number%3 === 0) return 'Fizz';

    if(number%5 === 0) return 'Buzz';

    return number;
}