import './FoodDetail.css';
import LineItem from '../LineItem/LineItem';

// Used to display the details of any food, including the logged food 
export default function FoodDetail({ food, handleChangeQty, handleFoodLog }) {
  if (!food) return null;

  const lineItems = food.lineItems.map(item =>
    <LineItem
      lineItem={item}
      isLogged={food.isLogged}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />
  );

  return (
    <div className="FoodDetail">
      <div className="section-heading">
        {food.isLogged ?
          <span>FOOD <span className="smaller">{food.foodId}</span></span>
          :
          <span>NEW FOOD</span>
        }
        <span>{new Date(food.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {lineItems.length ?
          <>
            {lineItems}
            <section className="total">
              {food.isLogged ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleFoodLog}
                  disabled={!lineItems.length}
                >FOOD LOG</button>
              }
              <span>{food.totalQty}</span>
            </section>
          </>
          :
          <div className="logit">Foods to log?</div>
        }
      </div>
    </div>
  );
}