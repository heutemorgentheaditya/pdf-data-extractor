import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload: React.FC = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload logic
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    maxSize: 5 * 1024 * 1024 // 5MB limit
  });

  return (
    <div 
      {...getRootProps()} 
      className="p-8 border-2 border-dashed border-gray-300 rounded-lg text-center"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the PDF here ...</p>
      ) : (
        <p>Drag 'n' drop a PDF file, or click to select</p>
      )}
    </div>
  );
};

export default FileUpload;