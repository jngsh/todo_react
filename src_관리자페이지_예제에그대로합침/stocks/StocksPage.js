import React from 'react';
import DragAndDrop from './DragAndDrop';
import UploadFile from './UploadFile';
import DownloadButton from './DownloadButton';

function StocksPage() {
    return (
        <div className="StocksPage">
            <h2>Download Inventory File</h2>
            <DownloadButton />
            <h2>Upload Inventory File - Drag And Drop</h2>
            <DragAndDrop />
            <br />
            <h2>Upload Inventory File - File Select</h2>
            <UploadFile />
        </div>
    );
}

export default StocksPage;
