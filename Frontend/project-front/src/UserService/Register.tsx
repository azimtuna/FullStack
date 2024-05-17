import axios from "axios";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { object, ref, string } from "yup";

interface User {
    name: string,
    username: string,
    email: string,
    password: string,
    repassword: string
}

const Register = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [repassword, setRePassword] = useState<string>("");
    const [errors, setErrors] = useState<string[]>([]);
    const navigate = useNavigate();


    const handleSubmit = async (event: any) => {
        event.preventDefault();

        let UserSchema = object().shape({
            name: string().required("your name can not be null"),
            username: string().required("your usename can not be null").min(6, "username has to be at least 6 character"),
            email: string().required("your email can not be null"), //.email(),
            password: string().required("your password can not be null").min(6, "password has to be at least 6 character"),
            repassword: string().oneOf([ref("password"), "your re password has to be same with your password"]).required("This is rendered if you try to submit an empty password field")
        });


        const UserInstance: User = {
            name: name,
            email: email,
            username: username,
            password: password,
            repassword: repassword
        };
        try {
            await UserSchema.validate(UserInstance, { abortEarly: false });

            const response = await axios.post<any>('https://localhost:7270/api/UserContoller/Register', UserInstance, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("Response : ", response);
            navigate("/login");

        } catch (error: any) {

            if (error.name === "ValidationError") {
                const validationErrors: string[] = error.inner.map((err: any) => err.message);
                setErrors(validationErrors);
            } else {
                console.error("An error occurred while registering:", error);
                setErrors(["An error occurred while registering.", "Please try again."]);
            }

        } finally {
            // setName("");
            // setUsername("");
            // setEmail("");
            // setPassword("");
            // setRePassword("");
            // alert("Successfully registered");
            //  navigate("/login");

        }
    }

    return (
        <>

            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '80%', backgroundImage: `url("../src/assets/mor.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Form style={{ width: '35%', height: '84vh' }} onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUserName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicRePassword">
                        <Form.Label>Re-Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={repassword} onChange={(e) => setRePassword(e.target.value)} />
                    </Form.Group>

                    {errors && errors.map((errormsg:any,index:any)=>(
                        <div key={index}>
                            <Form.Text  style={{ color: 'red' }}>{errormsg}</Form.Text>
                        </div>
                    ))}

                    <br/>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    );
}

export default Register