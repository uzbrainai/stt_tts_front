import {Button, Checkbox, Col, Divider, Form, Input, message, Modal, Row} from "antd";
import {FC, useEffect, useState} from "react";
import {useGetAll} from "../../custom_hooks/useGetAll";
import instance from "../../config/axios_config";

export const CreateOrEditRole: FC<{
    setRefresh: () => void
    modalData: { open: boolean, item: any },
    setModalData: (modalData: { open: boolean, item: any }) => void
}> = ({
          setRefresh,
          modalData,
          setModalData
      }): JSX.Element => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [permissions, setPermissions] = useState<number[]>([])
    const _permissions = useGetAll({url: "/roles/permissions", params: {}, call: "auto", metaData: false});
    const onFinish = async (values: { headOfDepartment: boolean, firstName: string, lastName: string, middleName: string, departmentId: number, positionId: number, employeeTitleId: number, photo: any, }) => {
        if (permissions?.length) {
            try {
                setLoading(true)
                const data = new FormData();
                console.log(values)
                Object.entries(values ?? {}).forEach(([key, value]) => {
                    if (value) {
                        data.append(key, value)
                    }
                })
                data.append("permissions", permissions.join(","))
                const resp = await instance({
                    method: modalData?.item ? "put" : "post",
                    url: modalData.item ? `/roles/${modalData?.item?.id}` : "/roles",
                    data
                })
                if (resp.data?.status === 1) {
                    setModalData({open: false, item: undefined})
                    form.resetFields()
                    setRefresh()
                    setLoading(false);
                    message.success("Saqlandi!");
                } else {
                    setLoading(false)
                    message.error(resp?.data?.message);
                }
            } catch (e: any) {
                setLoading(false)
                if (e?.response?.status === 422) {
                    let messages: any = e?.response?.data?.data;
                    message.error(Object?.values(messages ?? {}).join("\n"))
                } else {
                    message.error(e?.response?.data?.message ?? "Xatolik yuz berdi!");
                }
            }
        } else {
            message.error("Bir yoki undan ko'p ruxsatni tanlang!");
        }
    }


    useEffect(() => {
        if (modalData?.item && modalData?.open) {
            setPermissions(Object.values(modalData?.item?.permissions ?? {}).flat().map((item: any) => item?.id))
            form?.setFieldsValue({
                rolePrettyName: modalData?.item?.prettyName,
                roleName: modalData?.item?.name
            })
        }
    }, [modalData?.open])

    return <Modal width={1200} footer={false} title={modalData.item ? "Edit role" : "Create role"}
                  open={modalData.open}
                  onCancel={() => {
                      form.resetFields();
                      setPermissions([])
                      setModalData({item: undefined, open: false})
                  }}>
        <Row gutter={24}>
            <Col span={24}>
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    <Form.Item label={"Name"} name="rolePrettyName"
                               rules={[{required: true, message: "Maydonni to'ldiring!"}]}>
                        <Input placeholder={"Name"}/>
                    </Form.Item>
                    <Form.Item label="ID" name="roleName"
                               rules={[{required: true, message: "Maydonni to'ldiring!"}]}>
                        <Input placeholder="ID"/>
                    </Form.Item>
                    <h5>{"Permissions"}:</h5>
                    <Checkbox
                        indeterminate={permissions?.length > 0 &&
                            Object.values(_permissions?.data ?? {}).flat().map((item: any) => item?.id)?.length > permissions?.length}
                        checked={Object.values(_permissions?.data ?? {}).flat().map((item: any) => item?.id)?.length === permissions?.length}
                        onChange={() => {
                            if (permissions?.length === Object.values(_permissions?.data ?? {}).flat().map((item: any) => item?.id)?.length) {
                                setPermissions([])
                            } else {
                                setPermissions(Object.values(_permissions?.data ?? {}).flat().map((item: any) => item?.id))
                            }
                        }}
                    >{"All"}:</Checkbox>
                    <div style={{maxHeight: 400, overflowY: "auto"}} className="mx-2 mb-3">
                        {Object?.entries(_permissions?.data ?? {}).map(([k, v]: any) => {
                            let ee: number = permissions?.filter((it: number) => v?.map((vg: any) => Number(vg?.id)).includes(it)).length;
                            let rr: number = v?.length
                            return <div key={k}>
                                <Divider/>
                                <div className="border-bottom">
                                    <Checkbox onChange={(e) => {
                                        if (e.target.checked) {
                                            setPermissions(Array.from(new Set([...permissions, ...v?.map((per: any) => per?.id)])))
                                        } else {
                                            setPermissions(permissions?.filter(perm => !v?.map((pp: any) => pp?.id).includes(perm)))
                                        }
                                    }}
                                              indeterminate={ee > 0 && ee < rr}
                                              checked={ee == rr}>
                                        <span style={{textTransform: "capitalize"}}>{k?.replaceAll("_", " ")}</span>
                                    </Checkbox>
                                </div>
                                {v?.map((item: any, index: number) => <Checkbox
                                    onChange={(ev) => {
                                        if (ev?.target?.checked) {
                                            if (!permissions?.includes(+ev.target.value)) {
                                                setPermissions([
                                                    ...permissions,
                                                    item?.id
                                                ])
                                            }
                                        } else {
                                            setPermissions(
                                                permissions?.filter((pp: number) => pp !== item?.id)
                                            )
                                        }
                                    }}
                                    checked={permissions?.includes(item?.id)} key={index}
                                    value={item?.id}>{item?.name}</Checkbox>)}
                            </div>
                        })}
                    </div>
                    <div className="d-flex justify-content-end">
                        <Button loading={loading} htmlType="button" onClick={() => {
                            form.resetFields();
                            setPermissions([])
                            setModalData({open: false, item: undefined})
                        }} type="primary" danger>{"Cancel"}</Button>
                        <Button loading={loading} htmlType="reset" onClick={() => {
                        }} type="default" className="mx-1">Clear</Button>
                        <Button loading={loading} htmlType="submit" type="primary">Save</Button>
                    </div>
                </Form>
            </Col>
        </Row>
    </Modal>
}
