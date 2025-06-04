import RenderRoute from "./routes/RenderRoute";
import {PageLoader} from "./components/loader";
import {useEffect} from "react";
import {useAuthStore} from "./store/authStore";
import {ACCESS_TOKEN} from "./config/constants";
import instance from "./config/axios_config";
import {message} from "antd";
import 'bootstrap/dist/css/bootstrap.css'
import 'antd/dist/reset.css'
import {HomePage} from "./pages/home";
function App() {
  const {isAuth, setUserAndAuth, loading, setLoading} = useAuthStore(s => s);


  useEffect(() => {
    (async () => {
      try {
        let token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
          setLoading(true)
          let resp = await instance({
            method: "get",
            url: "/auth/current-user"
          })
          if (resp?.data?.status === 1) {
            const data = resp?.data?.data;
            setUserAndAuth({
              isAuth: true,
              user: {
                id: data?.id,
                firstName: data?.firstName,
                username: data?.username,
                lastName: data?.lastName,
                middleName: data?.middleName,
                roles: data?.roles,
                requiredChangePassword: data?.requiredChangePassword
              },
              permissions: data?.roles?.map((item: any) => item?.permissions)?.flat()
            });
            message.success("Kirish tasdiqlandi!");
            setLoading(false)
          } else {
            setLoading(false)
            message.error("Xatolik yuz berdi!");
          }
        }
      } catch (e: any) {
        let resp = e?.response?.data?.data;
        if (resp) {
          message.error(resp?.msg)
        } else {
          message.error("Xatolik yuz berdi!")
        }
        localStorage.clear();
        setLoading(false)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return loading ? <PageLoader/> : isAuth ? <RenderRoute/> : <HomePage/>
}

export default App
