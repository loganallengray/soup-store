import { ISoup } from "../../../modules/interfaces";

type Props = {
    soup: ISoup
}

const SoupCard = ({ soup }: Props) => {
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
            <button className="button b-yellow">Details</button>
        </div>
    )
}

export default SoupCard;