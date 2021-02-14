import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactBase64Image, { Base64FileType } from '../src';

const App = () => {
  const [file, setFile] = React.useState<Base64FileType>();
  const [files, setFiles] = React.useState<Base64FileType[]>();

  return (
    <div>
      <div>
        <h2>Single Image</h2>
        {file?.name}
        <ReactBase64Image onChange={setFile}/>
      </div>
      <div>
        <h2>Multiple Images</h2>
        {files?.map((image: Base64FileType) => (<p>{image.name}</p>))}
        <ReactBase64Image multiple onChange={setFiles}/>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
