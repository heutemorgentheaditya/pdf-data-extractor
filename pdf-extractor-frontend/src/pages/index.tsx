import FileUpload from '../components/FileUpload';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">PDF Data Extractor</h1>
      <FileUpload />
    </div>
  );
}