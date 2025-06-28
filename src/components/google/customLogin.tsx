import {useGoogleLogin} from "@react-oauth/google";
import {FC} from "react";

export const CustomLogin: FC<{ onSuccess: (a: any) => void, onError: (errorResponse: any) => void }> = ({
                                                                                                            onSuccess,
                                                                                                            onError
                                                                                                        }) => {
    const login = useGoogleLogin({
        onSuccess: onSuccess,
        onError: onError,
    });

    return (
        <button onClick={() => login()}>
            Google bilan kirish
        </button>
    );
}