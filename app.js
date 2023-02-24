//LOOPING A TRIANGLE
let symbol = '#';

while (symbol.length < 8) {
    console.log(symbol);
    symbol += "#";
}

//OR

for (let n = '#'; n.length < 8; n += '#'){
    console.log(n);
  }

/* 
#
##
###
####
#####
######
#######
*/