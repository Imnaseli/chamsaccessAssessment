import { Card, FormControl, FormHelperText  , TextField , Button} from '@mui/material';
import React, { useRef , useState } from "react"
import './css/index.css'
import SignupLogo from './img/signup.png'

export default function Signup(){

    const firstnameRef = useRef()
    const lastnameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [loading ] = useState(false)
    //setLoading

    async function handleSubmit (e)  {
        e.preventDefault()
        console.log(passwordRef.current.value , emailRef.current.value)
    }

    const styles = {
        card:{
            height:"100vh",
        },

        button:{
            background:"#7F56D9",
            width:"40%",
        },
 
    }

    return(
        <div className="screen" style={styles.screen}>

            <div className="leftscreen" >
                <div className="card">
                    <Card variant="" style={styles.card}>
                        <div className='hdiv'>
                            <h2>Sign Up</h2>
                            <p>We would never share your details</p>
                        </div>
                        <form className='mainform' onSubmit={handleSubmit}>
                            <FormControl className='forminput' >
                                <TextField inputRef={firstnameRef} required = {true} id="outlined-basic" label="Firstname" variant="outlined" />
                                <FormHelperText id="my-helper-text">Your Firstname</FormHelperText>
                            </FormControl>

                            <FormControl className='forminput' >
                                <TextField inputRef={lastnameRef} id="outlined-basic" label="Lastname" variant="outlined" />
                                <FormHelperText id="my-helper-text">Your Lastname</FormHelperText>
                            </FormControl>

                            <FormControl className='forminput' >
                                <TextField inputRef={emailRef} type="email" required = {true} id="outlined-basic" label="Email Address" variant="outlined" />
                                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                            </FormControl >

                            <FormControl className='forminput' >
                                <TextField  inputRef={passwordRef} required={true} id="outlined-basic" type="password" label="Password" variant="outlined" />
                                <FormHelperText id="my-helper-text">Minimum of 8 characters, at least one uppercase letter, and at least one special character</FormHelperText>
                            </FormControl >

                            <FormControl className='forminput confirmpasswordinput' >
                                <TextField  inputRef={passwordConfirmRef} required={true} id="outlined-basic" type="password" label="Password confirmation" variant="outlined" />
                                <FormHelperText id="my-helper-text">Confirm your Password</FormHelperText>
                            </FormControl >
                            
                            <Button style={styles.button} variant="contained" disabled={loading} type='submit'>Submit</Button>
                        </form>          
                        <div className='loginlink' >
                            Already have an account? Log In
                        </div>
                    </Card>
                </div>
            </div>

            <div className="rightscreen">
                <div className="picturebackground">
                        <img src={SignupLogo} alt="poster"/>                        
                </div>
            </div>

        </div>
    )


}