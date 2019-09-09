
(() => {

  const viewerElement = document.getElementById('viewer');

  window.WebViewer({
    path: './public/lib',
    initialDoc: window.localStorage.getItem("pdfUrl"),
  }, viewerElement).then(instance => {

    // Interact with APIs here.
    // See https://www.pdftron.com/documentation/web/guides/basic-functionality for more info/
  })

})()
