import Context from "./Context";
import { useEffect, useState } from "react"


//xmysql -h localhost -o 3306 -u root -d conekting
const Provider = ({ children }) => {

    const [usuario, setUsuario] = useState(null)

    useEffect(() => {
        const usuarioStorage = sessionStorage.getItem('usuario')
        usuarioStorage ? setUsuario(JSON.parse(usuarioStorage)) : setUsuario(null)
    }, [])

    console.log(usuario)

    return (
        <Context.Provider value={{ usuario, setUsuario }}>
            {children}
        </Context.Provider>
    )
}

export default Provider;