(() => {
    const viewerElement = document.getElementById('viewer');
    window.WebViewer({
        path: './public/lib',
        initialDoc: pdfUrl + window.localStorage.getItem("pdfUrl"),
    }, viewerElement).then(instance => {  
        console.log(instance.Annotations);
        instance.disableDownload();  
        instance.disablePrint(); 
        instance.disableElements([ 'copyTextButton','signatureToolButton' ]);
    })
})()