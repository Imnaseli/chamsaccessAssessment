import { Card, Button, Alert} from '@mui/material';
import React, {  useState } from "react"
import './css/index.css'
import { useAuth } from "../services/AuthContext"
import Logo from './img/forgotpassword.png'
import {useNavigate} from "react-router-dom"


export default function Dashboard(){
    const navigate = useNavigate()
    const [loading , setLoading ] = useState(false)
    const [error , setError] = useState("")
    const { logout, currentUser } = useAuth()
    const [severity, setSeverity] = useState("")
    
    async function handleSubmit (e)  {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)

            await logout()

            setSeverity("success") 
            setError("")
            navigate('/signin')
        } catch (error) {
            setError("")
            setSeverity("error")
            setError("Failed to sign you out")

            navigate('/signin')
        }
        setLoading(false)
    }

    function alertClose(){
        setError("")
    }

    const styles = {
        alert:{
            height:"3.8ch"
        },
        button:{
            background:"#7F56D9",
            width:"40%",
        },
        textfield:{
           margin:"20px"
        },
 
    }

    return(
        <div className="screen" style={styles.screen}>
            <div className="leftscreen forgotpasswordleftscreen" >
                <div className="card">
                    <Card variant="" style={styles.card} className ="dashboardcard" >
                        <div className='hdiv'>
                            <h2>Dashboard</h2>
                            <p>Welcome to your Dashboard</p>
                            {error && <Alert style={styles.alert} onClose={alertClose} className='alertbox' severity={severity}>{error}</Alert>}
                            <p>Email: {currentUser && currentUser.email}</p>
                        </div>                        
                            <Button className='formbutton' onClick={handleSubmit} style={styles.button} variant="contained" disabled={loading} type='submit'>Sign Out</Button>
                    </Card>
                </div>
            </div>

            <div className="rightscreen">
                <div className="picturebackground">
                        <img src={Logo} alt="poster"/>                        
                </div>
            </div>
        </div>
    )
}