import React, {useState} from 'react';
import {InboxOutlined} from '@ant-design/icons';
import type {UploadProps} from 'antd';
import {message, Upload} from 'antd';

const {Dragger} = Upload;

export const FileUpload: React.FC<{ text?: string, setFile: (file: File | null) => void }> = ({setFile, text}) => {
    const [fileList, setFileList] = useState<any>([])
    const props: UploadProps = {
        name: 'file',
        multiple: true,
        accept: "audio/*",
        fileList,
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        customRequest: ({onSuccess}) => {
            onSuccess("ok")
        },
        onChange(info) {
            let file = info.file;
            if (file && file?.status !== "removed") {
                file["status"] = "done"
                setFileList([file])
                setFile(file?.originFileObj)
            }
        },
        onRemove: () => {
            setFileList([]);
            setFile(null)
        },
        onDrop(e) {
            let files = e.dataTransfer.files;
            console.log('Dropped files', files);
            if (files?.length) {
                let item = files?.item(0);
                if (item?.type?.startsWith("audio")) {
                    setFile(item);
                } else {
                    message.error("File type invalid!");
                }
            }
        },
    };

    return <Dragger {...props}>
        <p className="ant-upload-drag-icon">
            <InboxOutlined/>
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
            {
                text ?? "Support for a single or bulk upload. Strictly prohibited from uploading company data or other\n" +
                "            banned files."
            }
        </p>
    </Dragger>
};