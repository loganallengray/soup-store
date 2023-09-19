import React from "react";

interface LooseObject {
    [key: string]: any
}

const AppContext = React.createContext<LooseObject | null>(null);

export default AppContext;