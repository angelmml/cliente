dni= prompt("Introduce o dni");
nome = prompt("Introduce o nome");
localStorage.setItem(dni, nome);
console.log(localStorage.getItem(dni));