function pow1(){
    document.location.href = "https://github.com/";
};

function pow2(){
    document.body.style.backgroundColor = 'green'/*prompt('background color?', 'green')*/;
}

function pow3(){
var first = document.body.children[0];
  var last = document.body.children[1];

  // нет необходимости в предварительном removeChild(last)
  document.body.insertBefore(last, first); // поменять местами
}