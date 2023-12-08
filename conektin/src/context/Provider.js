import Context from "./Context";


const Provider = ({ children }) => {

    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}

export default Provider;