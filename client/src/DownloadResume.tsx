import React from 'react'
// import file from './assets/Beredo_Resume.docx'

// const DownloadResume = async () => {

//     console.log("output:", file)

// }
import file from './assets/Beredo_Resume.docx';

const DownloadResume = () => {
    const a = document.createElement('a');
    a.href = file;
    a.download = 'Beredo_Resume.docx';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

export default DownloadResume
// try {
//     const response = await fetch('/resume');
//     const blob = await response.blob();
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'Beredo_Resume.docx';
//     a.style.display = 'none';
//     document.body.appendChild(a);
//     a.click();
//     window.URL.revokeObjectURL(url);
//     document.body.removeChild(a);
// } catch (error) {
//     console.error(error)
// }