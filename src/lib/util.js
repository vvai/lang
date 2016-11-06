/* @flow */

export function loadStyles (url: string): Promise<> {
  return new Promise(function (resolve, reject) {
    var xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.responseType = 'text';
    xhr.onload = function () {
      let link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      document.head.appendChild(link);
      resolve();
    };
    xhr.onerror = reject;
    xhr.open('get', url);
    xhr.send();
  });
}
