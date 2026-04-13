export async function loginService(data){
    const user = {
        email: data.email,
        password: data.password,
    };

    console.log("loginService called");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auths/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    const loggedUser = await res.json();

    console.log(loggedUser);

    return loggedUser;
}
