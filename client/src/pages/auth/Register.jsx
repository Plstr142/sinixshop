import React, { useState } from "react"
import axios from "axios"
import { toast } from 'react-toastify';

const Register = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmPassword: ""
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
        if (form.password !== form.confirmPassword) {
            return alert("Confirm Password is not match!");
        }
        console.log(form)
        // Send to backend
        try {
            const res = await axios.post("http://localhost:5000/api/register", form);

            console.log(res.data)
            toast.success(res.data)
        } catch (error) {
            const errorMessage = error.response?.data?.message
            toast.error(errorMessage)
            console.log(error)
        }
    }

    return (
        <div>
            Register
            <form onSubmit={handleSubmit}>
                Email
                <input className="border border-gray-700 rounded-sm" onChange={handleOnChange} type="text" name="email" />

                Password
                <input className="border border-gray-700 rounded-sm" onChange={handleOnChange} type="text" name="password" />

                Confirm Password
                <input className="border border-gray-700 rounded-sm" onChange={handleOnChange} type="text" name="confirmPassword" />
                <button className="bg-black text-white rounded-sm m-1 p-1">
                    Register
                </button>
            </form>
        </div>
    )
}
export default Register