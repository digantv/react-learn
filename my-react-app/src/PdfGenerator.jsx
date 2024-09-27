import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const PdfGenerator = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');

  const generatePDF = () => {
    const input = document.getElementById('pdf-content');

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('download.pdf');
    });
  };

  return (
    <div>
      <h1>PDF Generator</h1>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <button onClick={generatePDF}>Generate PDF</button>

      <div id="pdf-content" style={{ display: 'none', padding: '20px', fontFamily: 'Arial' }}>
        <h2 style={{ textAlign: 'center' }}>User Information</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Address:</strong> {address}</p>
      </div>

      <style>{`
        #pdf-content {
          page-break-after: always;
        }
        @media print {
          #pdf-content {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PdfGenerator;