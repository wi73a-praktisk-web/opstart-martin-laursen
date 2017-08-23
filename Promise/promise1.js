let secondPromise = new Promise(function (resolve, reject) {
    // her kunne der være masser af kode der skulle udføres
    // og derefter afsluttes med at resolve eller reject
    // alt efter om alting lykkedes eller ej
    if (false) {
       resolve('success');
    } else {
       reject('Det var ikke en succes');
    }
 });
 
 secondPromise.then(successMessage => {
    console.log(successMessage);
 }).catch(errorMessage => {
    console.log(errorMessage);
 });