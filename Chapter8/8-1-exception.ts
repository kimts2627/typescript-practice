// Java: Exception
// // Javascript: Error
// const array = new Array(10000000000000000000000000000);
// console.log(array); --->> error!

function readFile(fileName: string) {
  if(fileName === 'not exist!') {
    throw new Error(`file not exist ${fileName}`);
  }
  return 'file contents';
}

function closeFile(fileName: string) {
  //'
}

const fileName = 'file';
// const fileName = 'not exist!'; --> error!
console.log(readFile(fileName));
closeFile(fileName);

try {
  console.log(readFile(fileName));
}
catch(error) {
  console.log('catched!!');
}
finally {
  closeFile(fileName);
  console.log('finally!!')
}