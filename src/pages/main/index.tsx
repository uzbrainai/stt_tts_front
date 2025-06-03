import {Col, message, Row, Spin, Switch} from "antd";
import {FC, useState} from "react";
import AudioRecorder from "react-use-audio-recorder";
import "react-use-audio-recorder/dist/index.css";
import instance from "../../config/axios_config";

export const Dashboard: FC<any> = (): JSX.Element => {
    const [fileType, setFileType] = useState<"voice" | "file">("file");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<string>("")

    const setFile = async (blob: Blob | File) => {
        try {
            setLoading(true)
            let file = fileType === "file" ? blob : new File([blob], "voiceData.wav", {type: blob.type});
            let data = new FormData();
            data.append("file", file);
            let resp = await instance({
                url: "/transcribe",
                method: "post",
                data
            });
            if (resp?.data?.status === 1) {
                setData(resp?.data?.data?.transcription);
            } else {
                message.error(resp?.data?.message)
            }
            setLoading(false)
        } catch (e: any) {
            console.log(e);
            message.error("Error!");
            setLoading(false);
        }
    }
    return <Row gutter={24}>
        <Col span={24} className="p-2">
            <Spin spinning={loading}>
                <div className="d-flex justify-content-center">
                    <Switch checked={fileType === "file"}
                            onChange={(checked) => setFileType(checked ? "file" : "voice")}
                            unCheckedChildren={"Ovoz yozish"} checkedChildren={"Fayl yuklash"}/>
                </div>
                <div className="d-flex justify-content-center">
                    {fileType === "voice" ? <AudioRecorder onStop={(blob) => setFile(blob)}/> :
                        <input onChange={(e) => {
                            if (e?.target?.files?.length && e?.target?.files?.length > 0) {
                                setFile(e?.target?.files?.[0])
                            }
                        }} type={"file"} accept="audio/*"/>}
                </div>
            </Spin>
        </Col>
        <Col span={24}>
            <h6>
                {data}
            </h6>
        </Col>
    </Row>
}