import { ISoup } from "../../../modules/interfaces";

type Props = {
    soup: ISoup
}

const NutritionLabel = ({ soup }: Props) => {
    return (
        <div id="nutri-label">
            <header>
                <h3 className="bold">Nutrition Facts</h3>
                <div className="divider"></div>
                <p className="no-divider">8 servings per container</p>
                <p className="bold no-divider">Serving size <span className="right">2/3 cup (55g)</span></p>
            </header>
            <div className="divider large"></div>
            <div className="calories-info">
                <p className="bold small-text no-divider">Amount per serving</p>
                <h3>Calories <span className="right">230</span></h3>
            </div>
            <div className="divider medium"></div>
            <div className="daily-value small-text">
                <p className="d-value-title bold no-divider">% Daily Value *</p>
                <div className="divider"></div>
                <p><span className="bold b-title">Total Fat</span> 8g<span className="bold right">10%</span></p>
                <p className="indent no-divider">Saturated Fat 1g <span className="bold right">5%</span></p>
                <div className="divider"></div>
                <p className="indent no-divider">Polysaturated Fat 1g <span className="bold right">5%</span></p>
                <div className="divider"></div>
                <p className="indent no-divider">Monosaturated Fat 1g <span className="bold right">5%</span></p>
                <div className="divider"></div>
                <p><span className="bold b-title">Cholesterol</span> 8g<span className="bold right">10%</span></p>
                <p><span className="bold b-title">Sodium</span> 8g<span className="bold right">10%</span></p>
                <p><span className="bold b-title">Total Carbohydrates</span> 8g<span className="bold right">10%</span></p>
                <p className="indent no-divider">Dietary Fiber 1g <span className="bold right">5%</span></p>
                <div className="divider"></div>
                <p className="indent no-divider">Sugars Fat 1g <span className="bold right">5%</span></p>
                <div className="divider"></div>
                <p className="no-divider"><span className="bold b-title">Protein</span> 8g<span className="bold right">10%</span></p>
                <div className="divider large"></div>
                <p>Vitamin D 2mcg <span>10%</span></p>
                <p>Vitamin D 2mcg <span>10%</span></p>
                <p className="no-divider">Vitamin D 2mcg <span>10%</span></p>
                <div className="divider large"></div>
                <p className="no-divider"><span className="bold b-title">Total Carbohydrates</span> 8g<span className="bold right">10%</span></p>
                <div className="divider medium"></div>
                <p className="note">* The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</p>
            </div>
        </div>
    )
}

export default NutritionLabel;