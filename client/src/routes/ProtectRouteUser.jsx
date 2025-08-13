import React, { useState, useEffect } from 'react'
import useSinixstore from '../store/sinix-store'
import { currentUser } from '../api/auth'
import LoadingToRedirect from './LoadingToRedirect'

const ProtectRouteUser = ({ element }) => {
    const [ok, setOk] = useState(false)
    const user = useSinixstore((state) => state.user)
    const token = useSinixstore((state) => state.token)

    useEffect(() => {
        if (user && token) {
            // send to backend
            currentUser(token)
                .then((res) => setOk(true))
                .catch((err) => setOk(false))
        }
    }, [])

    return ok ? element : <LoadingToRedirect />
}

export default ProtectRouteUser