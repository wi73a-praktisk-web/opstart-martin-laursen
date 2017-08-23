function getData(dataURI, callback) {
    console.log('første linje i getData funktionen...');
    var timer = setTimeout(function () {
       console.log('Her der der gået 2 sekunder.');
       var dataArray = [12, 34, 56, 78, 90, 123, 456, 789];
       callback(dataArray);
    }, 2000);
 }
 
 function outputData(myData) {
    console.log('Dette er funktionen der udskriver det hentede data: ' + myData);
 }
 
 getData('http://www.domain.com/something', outputData);
 console.log("Denne kode linje burde være den sidste.");