import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSoup } from "../../../modules/fetch/soupManager";
import { ISoup } from "../../../modules/interfaces";

const SoupDetails = () => {
    const [notFound, setNotFound] = useState(false);
    const [soup, setSoup] = useState({});

    const params = useParams();
    const strId: string = params.id!;

    function isNum(str: string) {
        return /\d/.test(str);
    }

    useEffect(() => {
        if (isNum(strId)) {
            const numId = parseInt(strId);

            getSoup(numId)
                .then(res => {
                    if (Object.keys(res).length !== 0) {
                        setSoup(res)
                    } else {
                        setNotFound(true);
                    }
                })
        } else {
            setNotFound(true);
        }
    }, []);

    console.log(soup);

    if (notFound) {
        return <div>Not Found</div>
    }

    return (
        <div>Details</div>
    )
}

export default SoupDetails;