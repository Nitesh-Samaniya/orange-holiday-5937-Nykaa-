export const loginSuccessAction = (token)=>(
    {
        type: "LOGIN_SUCCESS",
        payload: token
    }
);

export const loginFailureAction = (token)=>(
    {
        type: "LOGIN_FAILURE",
        payload: token
    }
);