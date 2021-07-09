// 1 > attributes > childNodes > 0 > textContent
var node = document.getElementsByClassName('Box-sc-5gsflb-0 Text-qbt5xm-0 dDhReN')[1];
console.log(node.textContent)

// https://www.legacy.com/us/obituaries/chicagotribune/name/betty-barnum-obituary?id=5931983
// July 4, 2021

// https://www.legacy.com/us/obituaries/chicagotribune/name/anthony-christofaro-obituary?id=5935828
// 2021

// https://www.legacy.com/us/obituaries/chicagotribune/name/michael-callahan-obituary?id=5805149
// 2021


var node = document.getElementsByClassName("Box-sc-5gsflb-0 Text-qbt5xm-0 kLoMdS")[0];
var string = node.innerText.split(' ');
console.log(string.slice(-1)[0].slice(0, -1))

// https://www.legacy.com/us/obituaries/chicagotribune/name/gerard-bungert-obituary?id=5854568
// 2021
