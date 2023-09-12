import React from 'react'

const DownloadResume = async () => {
    try {
        const response = await fetch('/resume');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Beredo_Resume.docx';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    } catch (error) {
        console.error(error)
    }
}

export default DownloadResume
