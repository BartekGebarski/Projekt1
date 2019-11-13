let bases = 'ACGT';
//let sequenceLength = 256;
let inputSeq;
console.log(inputSeq)
//let randomseq = toRanSeq();
let reverseSequence = reverse(inputSeq);
let newSeq = '';
let chopLength = 50;
let lastOligo;
let chopped;
let create = document.getElementById('create');

create.addEventListener('click', function () {
  inputSeq = document.getElementById('inSeq').value;
  return inputSeq;
}, false);


/*function toRanSeq() {
  for (let i = 0; i < sequenceLength; i++) {
      inputSeq += bases[Math.floor(Math.random() * bases.length)];
    }
  }*/
  
  function reverse(str){
      return str.split('').reverse().join('').toUpperCase();
      } 
  
  console.log(inputSeq);
  console.log(inputSeq.length);

toComplementSequence = function(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'A') {
      newSeq += 'T';
    }
    if (str[i] === 'C') {
      newSeq += 'G';
    }
    if (str[i] === 'G') {
      newSeq += 'C';
    } 
    if (str[i] === 'T') {
      newSeq += 'A';
    }
  }
  return newSeq;
};

toLastOligo = function (str, val) {
    if (str.length % val !== 0) {
       lastOligo = str.slice(-val);
      }
      return lastOligo;
  };

stringChop = function(str, size) {
    if (str == null) return [];
    str = String(str);
    size = ~~size;
chopped = size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
return chopped;
}




shortOligoRemoval = function (str, str2, val) {
    for (let i = 0; i < str.length; i++) {
      if (str[i].length < val) {
       str.splice([i],1);
      }
  } 
  return str.push(str2);
};

toComplementSequence(reverseSequence);
toLastOligo(newSeq, chopLength);
console.log(newSeq);
console.log(newSeq.length);
console.log(lastOligo);
stringChop(newSeq, chopLength);
shortOligoRemoval(chopped, lastOligo, chopLength);
console.log(chopped);


