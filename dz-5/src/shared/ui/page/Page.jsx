import {Card} from "antd"

export function Page({children}) {
    return <Card style={{background:'transparent', border: '1px solid #22304a'}}>{children}</Card>
}