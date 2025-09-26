import { BrowserRouter } from "react-router-dom";

export function RouterRoot({children}) {
    return <BrowserRouter>{children}</BrowserRouter>
}