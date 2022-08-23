import FilterListToggle from '../filterListToggle/filterListToggle';
import { categoryList, ratingList } from '../../event.js';

import "./filterPanel.css";
// import CheckboxProton from '../checkBoxProton/checkBoxProton';
import SliderProton from '../sliderProton/sliderProton';
const FilterPanel = ({
  selectedCategory,
  selectCategory,
  selectedRating,
  selectedPrice,
  selectRating,
  // cities,
  // changeChecked,
  changePrice,
}) => (
  <div>
    <div className='input-group'>
      <p className='label'>Category</p>
      <FilterListToggle
        options={categoryList}
        value={selectedCategory}
        selectToggle={selectCategory}
      />
    </div>
    {/* <div className='input-group'>
      <p className='label'>City</p>
      {cities.map((city) => (
        <CheckboxProton
          key={city.id}
          city={city}
          changeChecked={changeChecked}
        />
      ))}
    </div> */}
    <div className='input-group'>
      <p className='label-range'>Price Range</p>
      <SliderProton value={selectedPrice} changePrice={changePrice} />
    </div>
    <div className='input-group'>
      <p className='label'>Star Rating</p>
      <FilterListToggle
        options={ratingList}
        value={selectedRating}
        selectToggle={selectRating}
      />
    </div>
    <button className="FilterButton">
      <a href='/home' style={{textDecoration:'none', color:'white'}}>
        Clear Filter
      </a>

    </button>
  </div>
);

export default FilterPanel;