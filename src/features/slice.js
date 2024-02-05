import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  listitems: [
    { id: nanoid(), photo: "https://i.ibb.co/fXXTqpn/Untitled-design-11.png", title: "Razer Mouse", price: "DH "+700,type :"Accesories" },
    { id: nanoid(), photo: "https://i.ibb.co/BzygDmY/Untitled-design-4.png", title: "Laptop Amd", price: "DH "+ 8000,type :"Laptop" },
    { id: nanoid(), photo: "https://i.ibb.co/Y2tLcyx/Untitled-design-9.png", title: "Rtx 3060 Ti", price: "DH "+ 12000,type :"Gpu" },
    { id: nanoid(), photo: "https://i.ibb.co/d6yVYzM/Untitled-design-7.png", title: "Gaming Pc", price: "DH "+ 2500,type :"Gamming Pc" },
  ],
  addeditems :[],
};

const listSlice = createSlice({
  name: 'list',
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: nanoid(),
        photo: action.payload.photo,
        title: action.payload.title,
        price: action.payload.price,
      };
      state.addeditems.push(newItem);
    },
    removeItem: (state, action) => {
     if (window.confirm('vous êtes sûr de supprimer ?')){
      const itemId = action.payload;
      state.addeditems = state.addeditems.filter(item => item.id !== itemId);}
    },
  },
});

export const { addItem, removeItem } = listSlice.actions;
export default listSlice.reducer;
