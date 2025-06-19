import React, {useState} from 'react';
import {InboxOutlined} from '@ant-design/icons';
import type {UploadProps} from 'antd';
import {message, Upload} from 'antd';
import {useTheme} from "@/contexts/ThemeContext";

const {Dragger} = Upload;

export const FileUpload: React.FC<{ text?: string, setFile: (file: File | null) => void }> = ({setFile, text}) => {
    let theme = useTheme();
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

    console.log(theme)

    return <Dragger {...props}itemRender={(originNode, file, fileList, actions) => (
        <div className="flex justify-between items-center p-2 border border-gray-300 rounded-md my-1 bg-white dark:bg-gray-700 dark:border-gray-600">
      <span className="text-sm text-gray-800 dark:text-gray-100 truncate max-w-[70%]">
        {file.name}
      </span>
            <button
                onClick={() => actions.remove()}
                className="text-red-500 hover:text-red-700 text-sm"
            >
                O‘chirish
            </button>
        </div>
    )}>
        <p className="ant-upload-drag-icon">
            <InboxOutlined/>
        </p>
        <p className="text-xl dark:text-white text-gray-800 mb-2 flex justify-center">Click or drag file to this area to upload</p>
        <p className="text-gray-700 dark:text-gray-300 text-center">
            {
                text ?? "Support for a single or bulk upload. Strictly prohibited from uploading company data or other\n" +
                "            banned files."
            }
        </p>
    </Dragger>
};