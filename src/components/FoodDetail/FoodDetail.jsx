import './FoodDetail.css';
import LineItem from '../LineItem/LineItem';
import { useContext } from 'react';
import FoodContext from '../../context/FoodContext/FoodContext';
import { Button } from '../../common';


// Used to display the details of any food, including the logged food 
export default function FoodDetail({ food }) {
  const { handleFoodLog, activeFood } = useContext(FoodContext);


  if (!food) return null;

  const lineItems = food.lineItems.map(item =>
    <LineItem
      lineItem={item}
      isLogged={food.isLogged}
      key={item._id}
    />
  );

  return (
    <div className="FoodDetail">
      <div className="section-heading">
        {food.isLogged ?
          <span>FOOD <span className="smaller">{food.foodId}</span></span>
          :
          <span>Foods to log?</span>
        }
        <span>{new Date(food.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {lineItems.length ?
          <>
            {lineItems}
            <section className="dailyLoggedFood">
              {food.isLogged ?
                <span className="right">DAILY LOGGED FOOD:&nbsp;&nbsp;</span>
                :
                <Button large
                  className="btn-sm"
                  onClick={handleFoodLog}
                  disabled={!lineItems.length}
                >LOG FOOD NOW</Button>
              }
              <span>{food.totalQty}</span>
              <br></br>
              <span className="right">&nbsp;&nbsp;&nbsp;{food.calorieTotal} cal total</span>
            </section>
          </>
          :
          <div className="logit">Add first food log</div>
        }
      </div>
    </div>
  );
}