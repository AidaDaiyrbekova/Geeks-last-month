import { ConfigProvider, theme } from "antd";

export function AntdProvider ({children}) {
    return (
        <ConfigProvider
        theme={{
            algorithm:theme.darkAlgorithm,
            token: {colorPrimary: '#6366F1', borderRadius: 12} 
        }}
        >
            {children}
        </ConfigProvider>
    )
}