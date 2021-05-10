//Arrive sur URL

//Clique sur créer partie
//initPlate()
//printPlate(plate); SI 2 joueurs sur même URL

//au clique
//setSign(plate, x, y, sign)
//isThereAWinner(plate);
//isGameNull(plate);

const html = window.open('../src/game.html')

function initButton()
{
  var a0 = html.document.getElementById("a0");
  var a1 = html.document.getElementById("a1");
  var a2 = html.document.getElementById("a2");

  var b0 = document.getElementById("b0");
  var b1 = document.getElementById("b1");
  var b2 = document.getElementById("b2");

  var c0 = document.getElementById("c0");
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");

  // NOTE: showAlert(); ou showAlert(param); NE fonctionne PAS ici.
  // Il faut fournir une valeur de type function (nom de fonction déclaré ailleurs ou declaration en ligne de fonction).
  a0.onclick = showAlert;
  a1.onclick = showAlert;
  a2.onclick = showAlert;

  b0.onclick = showAlert;
  b1.onclick = showAlert;
  b2.onclick = showAlert;

  c0.onclick = showAlert;
  c1.onclick = showAlert;
  c2.onclick = showAlert;
}

function showAlert()
{
  alert("Evènement de click détecté");
}