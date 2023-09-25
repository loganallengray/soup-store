import { useNavigate } from "react-router-dom";
import { ISoup } from "../../../modules/interfaces";

type Props = {
    soup: ISoup
}

const SoupCard = ({ soup }: Props) => {
    const navigate = useNavigate();

    return (
        <div className="soup-list-card">
            <img className="soup-card-image"
                src="https://images.pexels.com/photos/1707270/pexels-photo-1707270.jpeg" />
            <h3 className="soup-card-title">{soup.name}</h3>
            <div className="soup-card-info">
                <p>${soup.price}</p>
                <p>{soup.calories} Cal</p>
            </div>
            <button className="button b-yellow">Order</button>
            <button className="button b-border-yellow" onClick={() => navigate(`${soup.id}`)}>Details</button>
        </div>
    )
}

export default SoupCard;