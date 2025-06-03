import {FC, JSX, useState} from "react";
import {Button, Col, message, Popconfirm, Row} from "antd";
import {FaEdit, FaTrash} from "react-icons/fa";
import instance from "../../config/axios_config";
import {useGetAll} from "../../custom_hooks/useGetAll";
import {useAuthStore} from "../../store/authStore";
import {CreateOrEditRole} from "../../components/create_or_edit_role";

export const RolesAndPermissions: FC = (): JSX.Element => {
    const {permissions} = useAuthStore(s => s);
    const [modalData, setModalData] = useState<{ open: boolean, item: any }>({open: false, item: undefined})
    const _roles = useGetAll({url: "/roles", call: "auto", params: {}, metaData: false});
    const deleteRole = async (id: number) => {
        try {
            const resp = await instance({
                method: "delete",
                url: `/roles/${id}`
            });
            if (resp?.data?.status) {
                _roles.fetchData()
                message.success("Role o'chirildi!")
            } else {
                message.error(resp?.data?.message ?? "Xatolik yuz berdi!")
            }
        } catch (e: any) {
            message.error(e?.response?.data?.message ?? "Xatolik yuz berdi!")
        }
    }
    return <div>
        <CreateOrEditRole setRefresh={() => _roles.fetchData()} modalData={modalData}
                          setModalData={setModalData}/>
        <h3 className="d-flex justify-content-between align-items-center">
            Roles
            {permissions?.includes("create_role") ?
                <Button type="primary" onClick={() => setModalData({open: true, item: undefined})}>
                    + Add
                </Button> : ''}
        </h3>
        <Row gutter={24}>
            <Col span={24}>
                <table style={{verticalAlign: "middle"}}
                       className="table table-striped table-responsive table-bordered">
                    <thead>
                    <tr>
                        <th style={{width: "50px"}}>#</th>
                        <th>Name</th>
                        <th>Role name</th>
                        <th>Size of permissions</th>
                        {permissions?.some((item: string) => ["update_role", "delete_role"].includes(item)) ?
                            <th style={{width: "150px"}}>Harakatlar</th> : ""}
                    </tr>
                    </thead>
                    <tbody>
                    {_roles?.data?.map((item: any, index) => <tr>
                        <td>{index + 1}</td>
                        <td>{item?.prettyName}</td>
                        <td>{item?.name}</td>
                        <td>{Object.values(item?.permissions ?? {})?.flat()?.length}</td>
                        {permissions?.some((item: string) => ["update_role", "delete_role"].includes(item)) ?
                            <td>
                                {item?.id !== 1 ? <div className="d-flex justify-content-evenly">
                                    {permissions?.includes("update_role") ?
                                        <FaEdit onClick={() => setModalData({open: true, item})}
                                                className="cursor-pointer"/> : ""}
                                    {![2,3,4].includes(item.id) && permissions?.includes("delete_role") ?
                                        <Popconfirm title="Rol o'chirilsinmi!" onConfirm={() => deleteRole(item?.id)}>
                                            <FaTrash className="cursor-pointer"/>
                                        </Popconfirm> : ""}
                                </div> : ""}
                            </td> : ''}
                    </tr>)}
                    </tbody>
                </table>
            </Col>
        </Row>
    </div>
}