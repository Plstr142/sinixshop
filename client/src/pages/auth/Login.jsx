import React, { useState } from "react"
// import axios from "axios"
import { toast } from 'react-toastify';
import useSinixstore from "../../store/sinix-store";
import { useNavigate } from "react-router-dom"

const Login = () => {

    // const {Phongs4thon} = useSinixstore();
    // console.log(Phongs4thon.name)

    const navigate = useNavigate();
    const actionLogin = useSinixstore((state) => state.actionLogin);
    const user = useSinixstore((state) => state.user);
    console.log("user form zustand", user)

    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const handleOnChange = (e) => {
        // console.log(e.target.name, e.target.value)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
        // Send to backend
        try {
            const res = await actionLogin(form)
            console.log("res", res);
            const role = res.data.payload.role;
            console.log("role", role)
            roleRedirect(role);
            toast.success("Welcome Back")
        } catch (error) {
            console.log(error)
            const errorMessage = error.response?.data?.message;
            toast.error(errorMessage)
        }
    }

    const roleRedirect = (role) => {
        if (role === "admin") {
            navigate("/admin")
        } else {
            navigate("/user")
        }
    }

    return (
        <div>
            Login
            <form onSubmit={handleSubmit}>
                Email
                <input className="border border-gray-700 rounded-sm" onChange={handleOnChange} type="text" name="email" />

                Password
                <input className="border border-gray-700 rounded-sm" onChange={handleOnChange} type="text" name="password" />

                <button className="bg-black text-white rounded-sm m-1 p-1">
                    Login
                </button>
            </form>
        </div>
    )
}
export default Login