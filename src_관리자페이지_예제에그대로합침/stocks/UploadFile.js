import React, { useState } from 'react';
import axios from 'axios';
import './UploadFile.css';

function UploadFile() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onUpload = async () => {
    if (!file) {
      setMessage('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8090/bisang/admin/stocks/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data);
    } catch (error) {
      setMessage('Failed to upload file.');
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="UploadFile">
      <h1>Upload Inventory File</h1>
      <input type="file" accept=".xlsx" onChange={onFileChange} />
      <button onClick={onUpload}>Upload</button>
      <p>{message}</p>
    </div>
  );
}

export default UploadFile;
