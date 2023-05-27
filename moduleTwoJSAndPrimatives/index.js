// baseData
const baseData = [
  {
    id: 1,
    value: "Value for ID 1",
  },
  {
    id: 2,
    value: "Value for ID 2",
  },
  {
    id: 3,
    value: "Value for ID 3",
  },
  {
    id: 4,
    value: "Value for ID 4",
  },
  {
    id: 5,
    value: "Value for ID 5",
  },
  {
    id: 6,
    value: "Value for ID 6",
  },
];

// Add on Data

const addOnData = {
  id: 20,
  value: "I am addon data",
};

console.log("JS Loaded and ready to log!");
console.log({ baseData, addOnData });

/**
 * Your Event listners and Loggers should be added below
 */

document.getElementById("logBaseData").addEventListener("click", logData);

function logData() {
  console.log("Base Data:", baseData);
}

// =============================================

document
  .getElementById("logBaseReversed")
  .addEventListener("click", ReverseAndlogData);

// user toReversed as this does nto mutate the original
function ReverseAndlogData() {
  const reversedData = baseData.toReversed();
  //or
  // const reversedData = baseData.slice().reverse()
  console.log("baseData not changed", baseData);
  console.log("Base Data Reversed:", reversedData);
}

// =============================================

document
  .getElementById("baseDataWithoutFirst")
  .addEventListener("click", removedFirstItem);

// slice does not mutate the original array
function removedFirstItem() {
  const baseWithFirstRemoved = [...baseData.slice(1)];
  console.log("baseData not changed", baseData);
  console.log("Base With First Removed:", baseWithFirstRemoved);
}

// =============================================

document
  .getElementById("logEachEntryAsNew")
  .addEventListener("click", logEachAsNew);

function logEachAsNew() {
  baseData.forEach((item) => {
    console.log("baseData not changed", baseData);
    console.log("log each item", item);
  });
}

// =============================================

document
  .getElementById("logWithAddOnData")
  .addEventListener("click", logWithDataAdded);

function logWithDataAdded() {
  const newArrWithAddData = [addOnData, ...baseData];
  console.log("baseData not changed", baseData);
  console.log(newArrWithAddData);
}

// =============================================

document
  .getElementById("replaceAddUpdateId")
  .addEventListener("click", replaceAddUpdateIdTwo);

// change the index 2 not the id 2?
// toSpliced returns a new array with changes
// not the original array
function replaceAddUpdateIdTwo() {
  const changedAddData = { ...addOnData, id: 3 };
  const replaceAndUpdateIndex2 = baseData.toSpliced(2, 1, changedAddData);
  console.log("baseData not changed", baseData);
  console.log("item at Index 2 changed", replaceAndUpdateIndex2);
}

// =============================================
// ================= String Stuff ==============
// =============================================

const textToCount = document.getElementById("stringText").textContent;

// Counting the occurance of the word Fox
document
  .getElementById("logFoxStringCount")
  .addEventListener("click", logStringCount);

function logStringCount() {
  let count = textToCount.match(/fox/g).length;
  console.log("countForFox:", count);
}

// =============================================

// Reversing every word in string
document
  .getElementById("reverseEveryWord")
  .addEventListener("click", reverseEveryWordFunc);

function reverseEveryWordFunc() {

  let contentToChange = document.getElementById("stringText").innerHTML;

  contentToChange = contentToChange.split(/\b/g).map((word) => {
    return word.split('').reverse().join('')
  }).join('');

  document.getElementById("stringText").innerHTML = contentToChange;
}

// =============================================

// Replacing every instance of brown with sandy
document
  .getElementById("replaceBrownWithSandy")
  .addEventListener("click", replaceBrownWithSandyFunc);

  function replaceBrownWithSandyFunc() {
    
    let contentToChange = document.getElementById("stringText").innerHTML
    contentToChange = contentToChange.replace(/brown/g, "sandy")
    document.getElementById("stringText").innerHTML = contentToChange;
  }