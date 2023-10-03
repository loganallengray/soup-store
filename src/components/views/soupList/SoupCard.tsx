import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ISoup } from "../../../modules/interfaces";
import AppContext from "../../../modules/context/app-context";

type Props = {
    soup: ISoup
}

const SoupCard = ({ soup }: Props) => {
    const navigate = useNavigate();
    const cxt = useContext(AppContext);
    const addCartItem = cxt?.addCartItem;

    return (
        <div className="soup-list-card">
            <img className="soup-card-image"
                src={soup.imageUrl} />
            <h3 className="soup-card-title">{soup.name}</h3>
            <div className="soup-card-info">
                <p>${soup.price}</p>
                <p>{soup.calories} Cal</p>
            </div>
            <button className="button b-yellow" onClick={() => addCartItem(soup)}>Order</button>
            <button className="button b-border-yellow" onClick={() => navigate(`${soup.id}`)}>Details</button>
        </div>
    )
}

export default SoupCard;