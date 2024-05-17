import axios from "axios";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap"
import { object, string } from "yup";

interface UserLogin{
    email:string,
    password:string
}

const Login = () => {

    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [errors,setErrors] = useState<string[]>([]);

    const handleSubmit = async (event:any) =>{
        event.preventDefault();
        
        let UserLoginSchema = object().shape({
            email:string().required("email required!"),
            password:string().required("password required!").min(6,"your password has to be at 6 char ")
        });

        const user:UserLogin = {
            email:email,
            password:password
        };
        
        try{
            await UserLoginSchema.validate(user,{abortEarly:false});

            const response = await axios.post<any>('https://localhost:7270/api/UserContoller/Login', user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log("response: ",response);
            localStorage.setItem("token",response.data.token.accessToken);
    }
        catch(error:any){

            if(error.name ==="ValidationError"){
                const validationErrors:string[] = error.inner.map((item:any) => (item.message) );
                setErrors(validationErrors);
            }else{
                console.log("An Error Occured in Backend");
                setErrors(["An Error Occured in Backend"]);
            }

        }finally{
            setEmail("");
            setPassword("");

        }
    }

    return (
    <>
    
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '80%', backgroundImage: `url("../src/assets/mor.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Form style={{ width: '35%', height: '84vh' }} onSubmit={handleSubmit}>

                 

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    {errors && errors.map((err:any,index:any)=>(
                        <div key={index} >
                            <Form.Text  style={{ color: 'red' }}>{err}</Form.Text>
                        </div>
                    ))}
                    <br/>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
    </>
  )



}

export default Login