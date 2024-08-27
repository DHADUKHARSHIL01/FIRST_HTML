let num = 6;
let patt = "";
for (let i = 0; i < num; i++) {
  patt = "";
  for (let j = 0; j < num - i; j++) {
    patt += " ";
  }
  for (let k = 0; k <= i; k++) {
    patt += "* ";
  }
  console.log(patt);
}
