const input = prompt('Enter values separated by spaces:');
const elements = input.split(' ');

const averageData = elements.reduce(
    (acc, item) => {
      const num = Number(item);
      if (!isNaN(num)) {
        acc.sum += num;
        acc.count++;
      }
      return acc;
    },
    { sum: 0, count: 0 }
  );
  
  if (averageData.count === 0) {
    alert("Numbers not entered");
  } else {
    const average = averageData.sum / averageData.count;
    alert("Average: " + average);
  }