import React from 'react';
import './card.css';
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../features/slice'

export default function Card() {
  const addedItems = useSelector(state => state.list.addeditems);
  const dispatch = useDispatch();


  return (
    <>
      {addedItems.length === 0 ? (
        <div className="messaging">Cart Is Empty !</div>
      ) : (
        <div className="all">
          {addedItems.map((element) => (
            <div className="group" key={element.id}>
              <div className="cardd">
                <div className="elementt">
                  <img src={element.photo} alt="" />
                  <div className="texts">
                    <h2>{element.title}</h2>
                    <h1>{element.price}</h1>
                  </div>

                  <button id="k1">Check Out</button>
                  <button id="k2" onClick={() => dispatch(removeItem(element.id))}>
                    <FaTrash size={40} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
