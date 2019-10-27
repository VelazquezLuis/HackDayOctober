function convertString() {
   let n1 = document.getElementById("exampleInputEmail1");
   let n2 = document.getElementById("exampleInputEmail2");
   let n3 = document.getElementById("exampleInputEmail3");
   let result = convert(n1.value, "DNA");
   let result2 = convert(n1.value, "RNA");
   n2.value = result;
   n3.value = result2;
}

function convert(inputStr, strandType) {    
    let bases = strandType == "DNA" ? ['C', 'G', 'A', 'T'] : ['C', 'G', 'A', 'U'];
    const dnaMap = generateMap(bases);
    
    const dnaString = inputStr.split("").map(
      (letter, i) => dnaMap[inputStr.charCodeAt(i)-32]).join("");
    
      return dnaString;
}
    
    function complement(inputStrand) {
        const comps = {"a":"t", "t":"a", "c":"g", "g":"c",
                        "A":"T", "T":"A", "C":"G", "G":"C"};

        let complement = "";

        for (i = 0; i < inputStrand.length; i++) {
            if (comps[inputStrand[i]]) {
                complement += comps[inputStrand[i]];
            } else {
                complement = "Invalid input strand";
                break;
            }
        }

        return complement;
    }

function generateMap(bases) {
    let dnaMap = [];

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
      (letter, i) => dnaMap[inputStr.charCodeAt(i)-32]).join("");
    
      return dnaString;
}
    
    function complement(inputStrand) {
        const comps = {"a":"t", "t":"a", "c":"g", "g":"c",
                        "A":"T", "T":"A", "C":"G", "G":"C"};

        let complement = "";

        for (i = 0; i < inputStrand.length; i++) {
            if (comps[inputStrand[i]]) {
                complement += comps[inputStrand[i]];
            } else {
                complement = "Invalid input strand";
                break;
            }
        }

        return complement;
    }

module.exports = convert();

function generateMap() {

}

    return dnaMap;
}
