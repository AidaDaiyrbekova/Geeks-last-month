import { Button, Card, Form, Input, Typography, App as AntdApp } from "antd"
import { useLocation, useNavigate, Link } from "react-router-dom"

export const LoginForm = () => {
  const { message } = AntdApp.useApp()
  const nav = useNavigate()
  const loc = useLocation()

  const onFinish = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem("users")) || []

    const user = users.find(
      (u) => u.email === email && u.password === password
    )

    if (user) {
      localStorage.setItem("isAuth", "true")
      localStorage.setItem("currentUser", JSON.stringify(user))

      message.success(`Welcome back, ${user.username}!`)

      const to = loc.state?.from?.pathname || "/"
      nav(to, { replace: true })
    } else {
      message.error("Invalid credentials")
    }
  }

  return (
   <Card style={{maxWidth:420, margin1: '40px auto' }}>
   <Typography.Title level={4}>Sign in</Typography.Title>
   <Form layout='vertical' onFinish={onFinish} initialValues={{email: 'aida@gmail.com'}}>
    <Form.Item name="email" label= "Email" rules={[{required: true, type:'email' }]}>
    <Input placeholder = 'you@example.com' />
    </Form.Item>

    <Form.Item name="password" label= "Password" rules={[{required: true, min:6 }]}>
    <Input.Password placeholder='******' />
    </Form.Item>

    <Form.Item>
      <Button type='primary' htmlType='submit' block>Sign in</Button>
    </Form.Item>
    <div style={{textAlign: 'center', opacity:8}}>
      No account ? <Link to="/register">Register</Link>
    </div>

    </Form>
   </Card>
  )
}
