import {auth} from "../auth";

const headerToken = async () => {
    const seesion = await auth();
    console.log("headerToken", seesion?.user?.accessToken);

    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${seesion?.user?.accessToken}`,
        // Authorization: `Bearer ${seesion?.user?.token}`,
    };
};

export default headerToken;
