const downloadLink = document.querySelector('a[download]');
downloadLink.addEventListener('click', (event) => {
    event.preventDefault();
    const fileUrl = downloadLink.getAttribute('href');
    const fileName = downloadLink.getAttribute('download');
    const downloadAnchor = document.createElement('a');
    downloadAnchor.style.display = 'none';
    downloadAnchor.href = fileUrl;
    downloadAnchor.download = fileName;

    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
});