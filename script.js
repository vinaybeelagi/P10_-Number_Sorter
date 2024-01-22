// Initialize JavaScript variables and set up event listener
const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown")
  ].map((dropdown) => Number(dropdown.value));

  // Sorting logic and UI update functions will be added in subsequent steps
}

const updateUI = (array = []) => {
  // Update UI logic will be added in subsequent steps
}

sortButton.addEventListener("click", sortInputArray);

//  Implement the bubbleSort function
const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  
    return array;
  }
  //  Implement the selectionSort function
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
  
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  
    return array;
  }
  