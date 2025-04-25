function removeElement(array, item) {
    return array.filter(element => element !== item);
}

const array = [1, 3, 8, 3, 5, 7, 9];

const filteredArray = removeElement(array, 3);

alert('New array: ' + filteredArray);
