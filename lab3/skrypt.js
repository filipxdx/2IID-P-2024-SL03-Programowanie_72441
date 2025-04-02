function zmienTekst() {
    alert("Witaj na mojej stronie!");
    for (let i = 0; i <= 100; i += 2) {
        console.log(i);
      }
    }

function dodajLiczby() {
    const l1 = parseInt(prompt("podaj liczbe:"), 10);
    const l2 = parseInt(prompt("podaj kolejna liczbe:"), 10);
    if (isNaN(l1) || isNaN(l2)) {
      alert("wpisz poprawne liczby");
    } else {
      const suma = l1 + l2;
      alert("Wynik wynosi: " + suma);
    }
  }

  let randomNumber = Math.floor(Math.random() * 101);
  let attempts = 0;
  function lko() {
      const lk = parseInt(document.getElementById('lk').value);
      attempts++;

      if (lk < randomNumber) {
          document.getElementById('mk').textContent = "za mala liczba";
      } else if (lk > randomNumber) {
          document.getElementById('mk').textContent = "za duza liczba";
      } else {
          document.getElementById('mk').textContent = `udalo ci sie w ${attempts} probach`;
          setTimeout(function() {
              alert('udalo ci sie');
              location.reload();
          }, 1000);
      }
  }
  document.getElementById('checkButton').addEventListener('click', lko);
