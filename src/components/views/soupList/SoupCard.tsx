import { ISoup } from "../../../modules/interfaces";

type Props = {
    soup: ISoup
}

const SoupCard = ({ soup }: Props) => {
    return (
        <div>{soup.name}</div>
    )
}

export default SoupCard;