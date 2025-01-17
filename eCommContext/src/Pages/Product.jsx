import React, { useEffect, useState, } from "react";
import ProdCrad from "../Components/ProdCrad";
import { useSearchParams } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [last, setLast] = useState(0);
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);


  async function getData() {
    let res = await fetch(`http://localhost:8080/data?_page=${page}&_per_page=4&_sort=price`);
    let fetchedData = await res.json();
    setData(fetchedData.data);
    setLast(fetchedData.last)
    console.log(fetchedData);
  }

  useEffect(() => {
    getData();
  }, [page,last]);

  return (
    <div>
      <h1>Product</h1>
      <button>inc to dec</button>
      <div style={{display:"flex", flexWrap:"wrap", border:"1px solid red"}}>
        {data.map((el) => (
          <ProdCrad
            image={el.image}
            title={el.title}
            description={el.description}
            price={el.price}
            category={el.category}
            id={el.id}
          />
        ))}
      </div>
      <button disabled={page >= last} onClick={()=>{setPage(page+1)}}>next</button>
      <button disabled={page<=1} onClick={()=>{setPage(page-1)}}>prev</button>
      <h1>{page}</h1>
    </div>
  );
};

export default Product;
