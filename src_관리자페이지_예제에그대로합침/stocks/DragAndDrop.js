import React, { useState, useCallback } from 'react';
import axios from 'axios';
import './DragAndDrop.css';

function DragAndDrop() {
  const [dragging, setDragging] = useState(false);
  const [message, setMessage] = useState('');

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDrop = useCallback(async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    if (!file || file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      setMessage('Please upload a valid Excel file (.xlsx)');
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
  }, []);

  return (
    <div
      className={`dropzone ${dragging ? 'dragging' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <p>Drag and drop your Excel file here, or click to select a file</p>
      <input
        type="file"
        accept=".xlsx"
        style={{ display: 'none' }}
        onChange={(e) => handleDrop({ dataTransfer: { files: e.target.files } })}
      />
      <p>{message}</p>
    </div>
  );
}

export default DragAndDrop;
