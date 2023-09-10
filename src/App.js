import "./App.css";
import Footer from "./component/Footer/Footer";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";
import List from "./component/List/List";
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [originalData, setOriginalData] = useState([]); 

  let manageData = (item) => {
    setItems((items) => [...items, item]);
    setOriginalData((data) => [...data, item]);
  };
  



  let selectSort = (value) => {
    if (value === "1") {
      setItems([...originalData]); 
    }else if(value ==="2"){
      setItems([...originalData]); 
    }else{
      let packedSort = originalData.filter((arr) => arr.packed === true);
      setItems([...packedSort,{...packedSort-originalData } ]);
    }
  };


  




  let clearItem = () => {
    setItems([]);
    setOriginalData([]);
  };
  





  let deleteItem = (id) => {
    setOriginalData((data) => data.filter((value) => value.id !== id));
    setItems((items) => items.filter((value) => value.id !== id));
  };
  




  let handleCheckboxClick = (id) => {
    let updatedItems = [...items];
    const itemIndex = updatedItems.findIndex((item) => item.id === id);
    



    if (itemIndex !== -1) {
      updatedItems[itemIndex].packed = !updatedItems[itemIndex].packed;
      setItems(updatedItems);
      setOriginalData(updatedItems);
    }
  };

  return (
    <div className="App">
      <Header />
      <Form addDataitems={manageData} />
      <List
        item={items}
        clearArray={clearItem}
        handleCheckbox={handleCheckboxClick}
        del={deleteItem}
        sort={selectSort}
      />
      <Footer allItems={items} />
    </div>
  );
}

export default App;