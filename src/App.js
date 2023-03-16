
import './App.css';
import html2pdf from 'html2pdf.js';

function App() {
  const handlePdfDownload = () => {
    const element = document.getElementById('pdf');
    const options = {
      filename: 'my_pdf_document.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <div className='App'>
      <div id="pdf">
        <h1>My Web Page</h1>
        <h1>PDF Content</h1>
        <p>This content will be included in the PDF.</p>
       
      </div>
      <button onClick={handlePdfDownload}>Download PDF</button>
    </div>
  );
}

export default App;
