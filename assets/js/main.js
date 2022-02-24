//Lev1_1

console.log('Start Warten für 3 Sekunden...');
setTimeout(function start() {
    console.log('Erledigt. Du hast 3 Sekunden verschwendet.');
}, 3000);

let timeleft = 10;
setTimeout(function start2() {
    let countdown = setInterval(function countD() {
        if (timeleft < 1) {
            clearInterval(countdown);
            console.log('%c Endlich Feierabend!', 'font-weight: 900;');
        } else {
            console.log(`%c ${timeleft}`, 'color: green;');
        }
        timeleft--;
    }, 1000)
}, 6000)

// 3+6+10+3 = 22 Sekunden -> 22000

setTimeout(function start3() {
    setInterval(() => {
        let timeDate = new Date()
        console.log(timeDate.toLocaleTimeString('de-DE'))
    }, 1000);
}, 18000)


//Lev1_2
let percentCount = 100;
let percentput = document.querySelector('.zeit');
let btnStart = document.getElementById('btn');

btnStart.addEventListener('click', function () {
    let pC = setInterval(() => {
        if (percentCount < 0) {
            clearInterval(pC);
            // console.log('test');
        } else {
            percentput.innerHTML = `${percentCount} %`;
            // console.log(percentCount);
        }
        percentCount--;
    }, 50);
})

//Lev1_3

// Browsername --> .innerHTML = navigator.appName
// Betriebssystem-Architektur --> .innerHTML = navigator.platform;
// Browser-Version -->  .innerHTML = navigator.appVersion;
// Window Auflösung --> innerHTML = navigator.
// Innenhöhe und -breite des Dokuments
// colorDepth -> bitDepth = window.screen.colorDepth;
// pixelDepth -> let depth = screen.pixelDepth;

console.log(window.navigator);
console.log(navigator.platform);

console.log('screen height:' + window.screen.height + 'px')
console.log('screen width:' + window.screen.width + 'px')

console.log(window.screen.availHeight)
console.log(window.screen.availWidth)

let btn3 = document.getElementById('getData');
let out = document.querySelector('#out');


btn3.addEventListener('click', function () {
    let browserName = navigator.appName;
    let bArchitecture = navigator.platform;
    let browserVersion = navigator.appVersion;
    let windowAufl = `${window.screen.height} px Height + ${window.screen.width} px Width`;
    let innerWinH = window.screen.availHeight;
    let innerWinB = window.screen.availWidth;
    let colDepth = window.screen.colorDepth;
    let pixDe = window.screen.pixelDepth;
    console.log('test');
    out.innerHTML = `BrowserName: ${browserName}<br> Betriebssystem-Architektur: ${bArchitecture}<br>Browser-Version: ${browserVersion}<br> Window Auflösung ges.: ${windowAufl}<br>Innere Breite des Dokuments: ${innerWinB}<br> Innere Höhe des Dokuments: ${innerWinH}<br> Color Depth: ${colDepth}<br> Pixel Depth: ${pixDe}<br>`
})