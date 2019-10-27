
function convertToDNA(inputStr) {
let dnaMap = [];

let bases = ['C', 'G', 'A', 'T'];
for (let i = 32, c = [0, 0, 0, 0, 0]; i <= 127; i++) {
	let seq="";
	seq += bases[c[0]];
  seq += bases[c[1]];
  seq += bases[c[2]];
  seq += bases[c[3]];
  seq += bases[c[4]];
  
  dnaMap.push(seq);
  
	if (c[4] == 3) {
  	c[4] = 0;
    if (c[3] == 3) {
      c[3] = 0;
      if (c[2] == 3) {
        c[2] = 0;
        if (c[1] == 3) {
          c[1] = 0;
          if (c[0] == 3)	c[0] = 0;
          else c[0]++;

        } else c[1]++;
      } else c[2]++;
    } else c[3]++;
  } else c[4]++;
}

const dnaString = inputStr.split("").map(
  (letter, i) => dnaMap[str.charCodeAt(i)-32]).join("");
}