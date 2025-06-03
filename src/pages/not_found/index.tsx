import {Button, Result} from "antd";
import {useNavigate} from "react-router";

export const PageNotFound = () => {
    const navigate = useNavigate();
    return <div style={{width:"100vw",height:"100vh"}} className="d-flex justify-content-center align-items-center w-100">
        <Result
            status="404"
            title="404"
            subTitle="Sahifa topilmadi"
            extra={<Button onClick={() => navigate(-1)} type="primary">Orqaga</Button>}
        />
    </div>
}