import AppContext from "../../../modules/context/app-context";
import { useContext, useEffect, useState } from 'react';
import { getAllSoup } from "../../../modules/fetch/soup";
import SoupCard from "./SoupCard";

const SoupList = () => {
    const [soupList, setSoupList] = useState([]);

    const cxt = useContext(AppContext);

    useEffect(() => {
        getAllSoup()
            .then(res => setSoupList(res))
    }, [])

    return (
        <div>
            {soupList.map(soup => (
                <SoupCard soup={soup} />
            ))}
        </div>
    )
}

export default SoupList;