import React from 'react';
import './Prescription.css'; // Import the CSS file

const Prescription = ({
  date,
  patientName,
  patientGenderAge,
  symptoms,
  diagnosis,
  medicine,
  followUpDate,
  note,
}) => {
  return (
    <div className="container">
      <div className="header">Prescription</div>
      
      <div className="patient-info">
        Patient's Name: {patientName} &nbsp;&nbsp;&nbsp; {patientGenderAge}
      </div>
      <div className="date">Date: {date}</div>
      
      <div className="grid">
        <div>
          <div className="section-title">Symptoms</div>
          <table>
            <tbody>
              <tr>
                <td>{symptoms || 'N/A'}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div className="section-title">Diagnosis</div>
          <table>
            <tbody>
              <tr>
                <td>{diagnosis || 'N/A'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="table-container">
        <div className="section-title">Medicine</div>
        <table>
          <thead>
            <tr>
              <th>Medicine</th>
              <th>Dosage</th>
              <th>Timing</th>
              <th>Anupana</th>
              <th>Duration</th>
              <th>External</th>
            </tr>
          </thead>
          <tbody>
            {medicine.map((med, index) => (
              <tr key={index}>
                <td>{med.name}</td>
                <td>{med.dosage}</td>
                <td>{med.timing}</td>
                <td>{med.anupana || 'N/A'}</td>
                <td>{med.duration}</td>
                <td>{med.isExternal ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="note">
        <strong>Note:</strong> {note}
      </div>
      <div className="footer">Next Follow-up Date: {followUpDate}</div>
    </div>
  );
};

export default Prescription;
