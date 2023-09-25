import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSoup } from "../../../modules/fetch/soupManager";
import { ISoup } from "../../../modules/interfaces";
import NutritionLabel from "./NutritionLabel";

const SoupDetails = () => {
    const [notFound, setNotFound] = useState(false);
    const [soup, setSoup] = useState<ISoup>({
        id: 0,
        name: "",
        price: 0,
        servingSize: "",
        calories: 0,
        totalFat: 0,
        satFat: 0,
        polyFat: 0,
        monoFat: 0,
        cholesterol: 0,
        sodium: 0,
        totalCarbs: 0,
        dietaryFiber: 0,
        sugars: 0,
        protein: 0,
        vitaminD: 0,
        calcium: 0,
        iron: 0,
        potassium: 0,
        caffeine: 0
    });

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
                        setSoup(res[0])
                    } else {
                        setNotFound(true);
                    }
                })
        } else {
            setNotFound(true);
        }
    }, []);

    if (notFound) {
        return <div>Not Found</div>
    }

    return (
        <div id="soup-details-card">
            <div id="soup-details-info">
                <h2>{soup.name}</h2>
                <NutritionLabel soup={soup} />
            </div>
            <img></img>
        </div>
    )
}

export default SoupDetails;