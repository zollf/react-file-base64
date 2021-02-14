import React from 'react';
interface Base64FileType {
    name: string;
    type: string;
    kb: number;
    base64: string;
    file: File;
}
interface SingleFileProp extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type' | 'onChange' | 'multiple'> {
    onChange: (fp: Base64FileType) => void;
    multiple?: never;
}
interface MultipleFileProp extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type' | 'onChange' | 'multiple'> {
    onChange: (fp: Base64FileType[]) => void;
    multiple: true;
}
declare type Props = SingleFileProp | MultipleFileProp;
declare const ReactFileBase64: ({ onChange, multiple, ...props }: Props) => JSX.Element;
export { Base64FileType };
export default ReactFileBase64;
