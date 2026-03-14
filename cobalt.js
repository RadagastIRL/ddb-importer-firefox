'use strict';

let getCobaltCookie = document.getElementById('CobaltCookie');

const getCobaltSessionToken = () => {
  return browser.cookies.getAll({
    name: "CobaltSession",
    domain: ".dndbeyond.com",
  }).then((cookies) => {
    if (cookies.length > 0) return cookies[0].value;
    else throw null;
  });
};

getCobaltCookie.onclick = function(element) {
  getCobaltSessionToken().then((result) => {
    navigator.clipboard.writeText(result).then(() => {
      //clipboard successfully set
    }, () => {
      console.log("Clipboard access failed!");
    });
  })
  .catch((error) => {
    console.log("No Cobalt Session cookie found yet");
  });
};
