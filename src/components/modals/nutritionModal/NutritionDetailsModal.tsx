import { ISoup } from "../../../modules/interfaces";
import ModalBackdrop from "../ModalBackdrop";

type Props = {
    soup: ISoup,
    setShowModal: (...args: any) => any
}

const NutritionDetailsModal = ({ soup, setShowModal }: Props) => {
    const totalFat = soup.satFat + soup.polyFat + soup.monoFat;
    const totalCarbs = soup.dietaryFiber + soup.sugars;

    return (
        <>
            <ModalBackdrop setShowModal={setShowModal} />
            <div id="nutri-label">
                <header>
                    <h3 className="bold">Nutrition Facts</h3>
                    <div className="divider"></div>
                    <p className="no-divider">8 servings per container</p>
                    <p className="bold no-divider">Serving size <span className="right">{soup.servingSize}</span></p>
                </header>
                <div className="divider large"></div>
                <div className="calories-info">
                    <p className="bold small-text no-divider">Amount per serving</p>
                    <h3>Calories <span className="right">{soup.calories}</span></h3>
                </div>
                <div className="divider medium"></div>
                <div className="daily-value small-text">
                    <p className="d-value-title bold no-divider">% Daily Value *</p>
                    <div className="divider"></div>
                    <p><span className="bold b-title">Total Fat</span> {totalFat}g <span className="bold right">10%</span></p>
                    <p className="indent no-divider">Saturated Fat {soup.satFat}g <span className="bold right">5%</span></p>
                    <div className="divider"></div>
                    <p className="indent no-divider">Polysaturated Fat {soup.polyFat}g <span className="bold right">5%</span></p>
                    <div className="divider"></div>
                    <p className="indent no-divider">Monosaturated Fat {soup.monoFat}g <span className="bold right">5%</span></p>
                    <div className="divider"></div>
                    <p><span className="bold b-title">Cholesterol</span> {soup.cholesterol}g <span className="bold right">10%</span></p>
                    <p><span className="bold b-title">Sodium</span> {soup.sodium}g <span className="bold right">10%</span></p>
                    <p><span className="bold b-title">Total Carbohydrates</span> {totalCarbs}g <span className="bold right">10%</span></p>
                    <p className="indent no-divider">Dietary Fiber {soup.dietaryFiber}g <span className="bold right">5%</span></p>
                    <div className="divider"></div>
                    <p className="indent no-divider">Sugars {soup.sugars}g <span className="bold right">5%</span></p>
                    <div className="divider"></div>
                    <p className="no-divider"><span className="bold b-title">Protein</span> {soup.protein}g <span className="bold right">10%</span></p>
                    <div className="divider large"></div>
                    <p>Vitamin D {soup.vitaminD}mcg <span>10%</span></p>
                    <p>Calcium {soup.calcium}mcg <span>10%</span></p>
                    <p>Iron {soup.iron}mcg <span>10%</span></p>
                    <p className="no-divider">Potassium {soup.potassium}mcg <span>10%</span></p>
                    <div className="divider large"></div>
                    <p className="no-divider"><span className="bold b-title">Caffiene</span> {soup.caffeine}g <span className="bold right">10%</span></p>
                    <div className="divider medium"></div>
                    <p className="note">* The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</p>
                </div>
            </div>
        </>
    )
}

export default NutritionDetailsModal;