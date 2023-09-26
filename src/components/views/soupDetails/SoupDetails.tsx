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
        description: "",
        price: 0,
        servingSize: "",
        calories: 0,
        satFat: 0,
        polyFat: 0,
        monoFat: 0,
        cholesterol: 0,
        sodium: 0,
        dietaryFiber: 0,
        sugars: 0,
        protein: 0,
        vitaminD: 0,
        calcium: 0,
        iron: 0,
        potassium: 0,
        caffeine: 0,
        imageUrl: ""
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
        <div id="soup-details-page">
            <div id="soup-details-body">
                <div id="soup-details-info">
                    <div id="soup-details-info-body">
                        <h2 id="soup-details-name">{soup.name}</h2>
                        <p id="soup-details-description">{soup.description}</p>
                    </div>
                    <div id="soup-details-info-side">
                        <NutritionLabel soup={soup} />
                    </div>
                </div>
                <div id="soup-details-options">
                    <div className="order-options">
                        <input className="input" type="number" placeholder="1" />
                        <div className="input">${soup.price}</div>
                    </div>
                    <button className="button b-yellow">Order</button>
                    <button className="button b-yellow">Nutrition Details</button>
                </div>
                {/* <NutritionLabel soup={soup} /> */}
            </div>
            <img id="soup-details-image" src={soup.imageUrl} />
        </div>
    )
}

export default SoupDetails;