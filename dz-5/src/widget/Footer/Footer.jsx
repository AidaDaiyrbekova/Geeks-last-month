import { Layout } from "antd"


export function Header () {

    return (
        <Layout.Footer style={{textAlign: 'center', opacity: .7}}>
            {new Date().getFullYear()} Market - lesson scaffold
        </Layout.Footer>
    )
}
