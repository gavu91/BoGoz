(() => {
    const viewerElement = document.getElementById('viewer');
    window.WebViewer({
        path: './public/lib',
        initialDoc: pdfUrl + window.localStorage.getItem("pdfUrl"),
    }, viewerElement).then(instance => {})
})()