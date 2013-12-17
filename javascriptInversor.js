

function inverter(s) {
  var i, ret;
  ret = "";
  i = s.length - 1;
  while (i >= 0) {
    ret += s.substr(i, 1);
    i--;
  }
  return ret;
}



