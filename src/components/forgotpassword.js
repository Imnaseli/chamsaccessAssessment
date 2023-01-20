import { Card, FormControl, FormHelperText  , TextField , Button, Alert} from '@mui/material';
import React, { useRef , useState } from "react"
import './css/index.css'
import { useAuth } from "../services/AuthContext"
import Logo from './img/forgotpassword.png'
import {Link} from "react-router-dom"

export default function ForgotPassword(){

    const emailRef = useRef()
    const [loading , setLoading ] = useState(false)
    const { resetPassword } = useAuth()
    
    const [error, setError] = useState("")
    const [severity, setSeverity] = useState("")
    
    async function handleSubmit (e)  {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)

            await resetPassword(emailRef.current.value)

            setSeverity("success") 
            setError("Email has been sent to youur email.")

        } catch (error) {
            setError("")
            setSeverity("error")
            setError("Failed to reset account password")
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
                    <Card variant="" style={styles.card} className ="forgotpasswordcard" >
                        <div className='hdiv'>
                            <h2>Reset your account password</h2>
                            <p>Everyone makes mistakes</p>
                            {error && <Alert style={styles.alert} onClose={alertClose} className='alertbox' severity={severity}>{error}</Alert>}
                        </div>
                        <form className='forgotpasswordform' onSubmit={handleSubmit}>

                            <FormControl style={styles.textfield} className='forminput forgotpasswordforminput' >
                                <TextField  inputRef={emailRef} type="email" required = {true} id="outlined-basic" label="Email Address" variant="outlined" />
                                <FormHelperText id="my-helper-text">The Email Address you used to sign up</FormHelperText>
                            </FormControl >
                            
                            <Button className='formbutton' style={styles.button} variant="contained" disabled={loading} type='submit'>Reset</Button>
                        </form>          
                        <div className='loginlink' >
                            <p> Go back to <Link className = "link" to="/signin"> Sign in</Link> </p>
                        </div>
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