const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateAverage(){
    rl.question('Enter values separated by spaces: ', input => {
        const rawArray = input.split(' ');
        const numArray = rawArray.filter(item => !isNaN(item));

        if (numArray.length === 0) {
            console.log('Please enter at least one number');
            calculateAverage();
        } else {

            const sum = numArray.reduce((total, num) => total + Number(num), 0);

            const average = sum / numArray.length;

            console.log(`Average: ${average}`);

            rl.close();
        }
    })
}

calculateAverage();