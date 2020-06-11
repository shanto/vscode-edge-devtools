function fetchJsonFromUrl(url){
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var Httpreq = new XMLHttpRequest();
  Httpreq.open("GET", url, false);
  Httpreq.send(null);
  return Httpreq.responseText;
}

function fetchDownloadUrl(platform) {
  const jsonString = fetchJsonFromUrl("https://thirdpartysource.microsoft.com/downloads");
  const jsonObjects = JSON.parse(jsonString);
  for (let object of jsonObjects) {
    if (object.product === 'Microsoft Edge DevTools' && object.release === '81.0.416.72' && object.platform === platform) {
      console.log(object.url);
    }
  }
}

function retrievePlatform() {
  const arg = process.argv.slice(2)[0];
  switch (arg.toLowerCase()) {
    case 'mac':
      return 'Mac OS x64';
    default:
      return 'Windows x64';
  }
}

const platform = retrievePlatform();
fetchDownloadUrl(platform);