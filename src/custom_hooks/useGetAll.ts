import {useEffect, useState} from "react";
import {message} from "antd";
import instance from "../config/axios_config";

export function useGetAll<T>({
                                 url,
                                 params,
                                 metaData,
                                 call
                             }: { url: string, params: { [key: string]: any, }, metaData: boolean, call: "auto" | "no-auto" }) {
    const [data, setData] = useState<Array<T>>([]);
    const [meta, setMeta] = useState<{ totalElements: number, page: number, size: number, totalPages: number }>({
        totalElements: 0, totalPages: 0, page: 0, size: 0
    })

    const fetchData = async () => {
        try {
            const resp = await instance({
                method: "get",
                url,
                params
            });
            if (resp?.data?.status === 1) {
                if (metaData) {
                    setData(resp?.data?.data?.items);
                    setMeta(resp?.data?.data?.meta);
                } else {
                    setData(resp?.data?.data)
                }
            } else {
                message.error("Xatolik yuz berdi!")
            }
        } catch (e) {
            message.error("Xatolik yuz berdi!");
        }
    }

    useEffect(() => {
        if (call === "auto") {
            fetchData();
        }
    }, [call])

    return {data, _meta: meta, meta, fetchData}
}