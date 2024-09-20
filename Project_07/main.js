// Programa que converte Celsius para Fahrenheit, porem informando o resultado em 3 locais diferentes (Alert, Console e na Pagina)

let celsius = parseFloat(prompt('Digite a temperatura em graus celsius (Use "." ao inves de "," para marcar a casa decimal'))

console.log('A temperatura informada em celsius, foi de: ' + celsius + '°')

let fahrenheit = (celsius * 1.8) + 32

console.log('Em Fahrenheit: ' + fahrenheit.toFixed(1))

document.getElementById('celsius').innerHTML = ('A temperatura informada em celsius, foi de: ' + celsius + '°. ' + 'Em Fahrenheit: ' + fahrenheit.toFixed(1) + '°')

alert(celsius + '° em Fahrenheit: ' + fahrenheit.toFixed(1) + '°')
