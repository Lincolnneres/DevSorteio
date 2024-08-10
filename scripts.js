function generateNumber() {
  let min = Math.ceil(document.querySelector(".input-min").value);
  let max = Math.floor(document.querySelector(".input-max").value);

  if (max > min) {
    let result = Math.floor(Math.random() * (max - min + 1) + min);

    alert(result);
  } else {
    alert("o valor minimo tem que MENOR que o valor máximo.");
  }
}
