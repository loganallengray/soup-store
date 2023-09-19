import AppContext from "../../../modules/context/app-context";
import { useContext } from 'react';

const SoupList = () => {
    const cxt = useContext(AppContext);
    const testString = cxt?.test;

    return (
        <div>{testString}</div>
    )
}

export default SoupList;