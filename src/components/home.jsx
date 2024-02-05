import React, { useState, useEffect } from 'react';
import './home.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/slice';
export default function Home() {
  const dispatch = useDispatch();
  const listItems = useSelector((state) => state.list.listitems);
  const [category, setCategory] = useState('');
  const [filtered, setFiltered] = useState([]);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleTypeChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);

    if(selectedCategory === 'Filter'){
      setFiltered(listItems);
    }else{
    // Filter items based on the selected category
    const filter = listItems.filter((item) => item.type === selectedCategory);
    setFiltered(filter);}
  };

  useEffect(() => {
    // Set the initial filtered items to the entire list
    setFiltered(listItems);
  }, [listItems]);

  return (
    <>
      <div className="allitems">
        <div className="list">
          <select
            name=""
            id=""
            className="custom-select"
            onChange={handleTypeChange}
          >
            <option className="o1" selected>
            Filter
            </option>
            {listItems.map((item) => (
              <option key={item.id} value={item.type} className="o1">
                {item.type}
              </option>
            ))}
          </select>
        </div>
        <div className="all">
          {filtered.map((item) => (
            <div className="group1" key={item.id}>
              <div className="card1">
                <div className="element">
                  <img src={item.photo} alt={item.title} />
                  <h2>{item.title}</h2>
                  <h1>{item.price}</h1>
                  <button onClick={() => handleAddItem(item)}>Add Item</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
