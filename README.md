# React File Base 64

Converts file in the a base64

Extends normal HTML input element with omissions

## How to use

```tsx
import React from 'react';
import ReactBase64Image, { Base64FileType } from '../src';

const App = () => {
  const [file, setFile] = useState<Base64FileType>();
  const [files, setFiles] = useState<Base64FileType[]>();

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
```

## Base64 File Type
```tsx
interface Base64FileType {
  name: string;
  type: string;
  kb: number;
  base64: string; // <- Converted Base64 File
  file: File;
}
```

## License
MIT

## Author
Zollf