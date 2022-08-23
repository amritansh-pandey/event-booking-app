import React, { useEffect, useState } from 'react';
import BannerCarousel from "../../component/bannerCarousel/bannerCarousel";
import EventList from "../../component/eventList/eventList";
import FilterPanel from '../../component/filterPanel/filterPanel';
import EmptyView from '../../component/emptyView/emptyview';
import SearchBar from '../../component/searchBar/searchBar';
import { eventsList } from "../../event";
import "./home.css";


const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([100, 4500]);

  // const [cities, setCities] = useState([
  //   { id: 1, checked: false, label: 'New Delhi' },
  //   { id: 2, checked: false, label: 'Gurgaon' },
  //   { id: 3, checked: false, label: 'Noida' },
  // ]);

  const [list, setList] = useState(eventsList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  // const handleChangeChecked = (id) => {
  //   const citiesStateList = cities;
  //   const changeCheckedCities = citiesStateList.map((item) =>
  //     item.id === id ? { ...item, checked: !item.checked } : item
  //   );
  //   setCities(changeCheckedCities);
  // };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const applyFilters = () => {
    let updatedList = eventsList;

    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // Category Filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    // City Filter
    // const citiesChecked = cities
    //   .filter((item) => item.checked)
    //   .map((item) => item.label.toLowerCase());

    // if (citiesChecked.length) {
    //   updatedList = updatedList.filter((item) =>
    //     citiesChecked.includes(item.cities)
    //   );
    // }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, searchInput, selectedPrice]);

  return (
    <>
      <BannerCarousel />
      <div className='homeContainer'/>
      <div className='home'>
        {/* Search Bar */}
        <SearchBar
          value={searchInput}
          changeInput={(e) => setSearchInput(e.target.value)} />
        <div className='home_panelList-wrap'>
          {/* Filter Panel */}
          <div className='home_panel-wrap'>
            <FilterPanel
              selectedCategory={selectedCategory}
              selectCategory={handleSelectCategory}
              selectedRating={selectedRating}
              selectedPrice={selectedPrice}
              selectRating={handleSelectRating}
              // cities={cities}
              // changeChecked={handleChangeChecked}
              changePrice={handleChangePrice} />
          </div>
          {/* List & Empty View */}
          <div className='home_list-wrap'>
            {resultsFound ? <EventList list={list} /> : <EmptyView />}
          </div>
        </div>
      </div></>
  );
};

export default Home;