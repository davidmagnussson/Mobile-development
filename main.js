console.log("main js works");

if ('serviceWorker' in navigator) {  // Är service worker aktiverat????
    navigator.serviceWorker.register('/service-worker.js')
    .then(function () {console.log("serviceWorker is ookok");});
}
