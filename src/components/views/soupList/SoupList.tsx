import AppContext from "../../../modules/context/app-context";
import { useEffect, useState } from 'react';
import { getAllSoup } from "../../../modules/fetch/soup";
import SoupCard from "./SoupCard";

const SoupList = () => {
    const [soupList, setSoupList] = useState<any[]>([]);

    useEffect(() => {
        getAllSoup()
            .then(res => setSoupList(res))
    }, [])

    return (
        <div id="soup-list">
            {soupList.map(soup => (
                <SoupCard key={soup.id} soup={soup} />
            ))}
        </div>
    )
}

export default SoupList;