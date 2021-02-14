import React from 'react';

interface Base64FileType {
  name: string;
  type: string;
  kb: number;
  base64: string;
  file: File;
}

interface SingleFileProp 
  extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type' | 'onChange' | 'multiple'>
{
  onChange: (fp: Base64FileType) => void;
  multiple?: never;
}

interface MultipleFileProp 
  extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type' | 'onChange' | 'multiple'>
{
  onChange: (fp: Base64FileType[]) => void;
  multiple: true;
}

type Props = SingleFileProp | MultipleFileProp;

const ReactFileBase64 = ({ onChange, multiple, ...props }: Props) => {
  const covertFileToBase64 = (fp: File, reader: FileReader): Promise<Base64FileType> => {
    return new Promise((resolve, reject) => {
      reader.readAsDataURL(fp);
      reader.onload = ((file: File) => {
        return () => {
          resolve({
            name: file.name,
            type: file.type,
            kb: Math.round(fp.size / 1000),
            base64: reader.result as string,
            file: file
          })
        }
      })(fp); 
      reader.onerror = reject;
    });
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (multiple && e?.target?.files?.length) {
      const base64Images: Base64FileType[] = [];
      for (let i = 0; i < e.target.files.length; i++) {
        if (e?.target?.files?.[i]) {
          const fp = e.target.files[i];
          base64Images.push(await covertFileToBase64(fp, reader));
        }
      }
      // @ts-ignore
      onChange(base64Images);
    } else {
      if (e?.target?.files?.[0]) {
        const fp = e.target.files[0];
        // @ts-ignore
        onChange(await covertFileToBase64(fp, reader));
      }
    }
  };

  return (
    <input type="file" onChange={handleChange} {...props} multiple={multiple} />
  );
};

export { Base64FileType }
export default ReactFileBase64;