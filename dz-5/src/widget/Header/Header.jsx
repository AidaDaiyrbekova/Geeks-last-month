import { Layout, Space } from "antd";
import { useAuthStore } from "../../entities/user/model/authStore";
import { NavLink } from "react-router-dom";

 

 export function Header () {
    const isAuthed = useAuthStore((s) => Boolean(s.token))
    const logout = useAuthStore((s) => s.logout)
 

 return (

    <Layout.Header style={{display: 'flex', alignItems: 'center', gap: 16}}>
        <Link to="/" style={{color: 'white', fontWeight: 800, letterSpacing: .3}}>Market</Link>
        <Menu theme="dark" mode="horizontal" selectable={false} style={{flex: 1}}
            items= {[
                {key: 'home', label: <NavLink to={"/"}>Home</NavLink>},
                {key: 'catalog', label: <NavLink to={"/catalog"}>Catalog</NavLink>},
                {key: 'cart', label: <NavLink to={"/cart"}>Cart</NavLink>}
            ].filter(Boolean)}
            >
                    <Space>
                        <CartButton />
                        {isAuthed ? (
                            <Button onClick = {logout}>Logout</Button>
                        ): (
                            <Button type="primary">
                                <NavLink to ={"/login"}>Login </NavLink>
                            </Button>
                        )}
                    </Space>
        </Menu>
    </Layout.Header>
 )
 }