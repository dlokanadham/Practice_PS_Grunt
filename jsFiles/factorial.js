function fact(x) {
   if(x==0) {
      return 1;
   }
   return x * fact(x-1);
}

function run(number) {
	console.log('given number');
    alert(fact(parseInt(number, 10)));
}