// Code goes here
function myPow(x, n, d) {
  var temp = Math.pow(x, n);
  var res = temp % d;
  if(d<0) {
    return ;
  }
  else
  {
    return res;
  }
}
myPow(2,3,2);
