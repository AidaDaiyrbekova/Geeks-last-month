import { useNavigate } from "react-router-dom"
import { Button, Card, Form, Input, Typography, App as AntdApp } from "antd"

export const RegisterForm = () => {
  const { message } = AntdApp.useApp()
  const nav = useNavigate()

  const onFinish = ({ username, email, password, avatar }) => {
    const users = JSON.parse(localStorage.getItem("users")) || []

    const exist = users.some((u) => u.email === email)

    if (exist) {
      message.error("User already exists!")
      return
    }

    const newUser = { username, email, password, avatar }
    localStorage.setItem("users", JSON.stringify([...users, newUser]))

    message.success("Account created!")
    nav("/login", { replace: true })
  }
return (
   <Card style={{maxWidth: 480, margin1: '40px auto' }}>
   <Typography.Title level={4}>Create account </Typography.Title>
   <Form layout='vertical' onFinish={onFinish} initialValues={{username: 'aida'}}>

    <Form.Item name="username" label= "Username" rules={[{required: true}]}>
        <Input placeholder = 'username' />
    </Form.Item>


    <Form.Item name="email" label= "Email" rules={[{required: true, type:'email' }]}>
        <Input placeholder = 'you@example.com' />
    </Form.Item>

    <Form.Item name="password" label= "Password" rules={[{required: true, min:6 }]}>
         <Input.Password placeholder='******' />
    </Form.Item>


     <Form.Item name="avatar" label= "Avatar (URL)">
         <Input placeholder='https://...' />
    </Form.Item>


    <Form.Item>
         <Button type='primary' htmlType='submit' block>Register</Button>
    </Form.Item>

    </Form>
   </Card>
  )
}