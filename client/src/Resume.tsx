import React from 'react'
// import mammoth from 'mammoth'
// import resumeDoc from './assets/Beredo_ResumeHTML.html'


const Resume = async () => {
    try {
        // const response = await fetch(resumeDoc)
        // const arrayBuffer = await response.arrayBuffer()
        // const conversionResult = await mammoth.convertToHtml({ arrayBuffer });
        // const convertedHtml = conversionResult.value;

        // const blob = new Blob([convertedHtml], { type: 'text/html' });
        // const url = URL.createObjectURL(blob);
        // const a = document.createElement('a');
        // a.href = url;
        // a.download = 'Beredo_Resume.html';
        // a.click();
        // URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error downloading Resume', error);
    }
}

export default Resume
