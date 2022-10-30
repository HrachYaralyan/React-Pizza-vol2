import React from 'react';
import axios from 'axios';
import { useParams , useNavigate} from 'react-router-dom';
import { useState } from 'react';

const FullPiazza = () => {
  let { id } = useParams();
  const [pizza, setpizza] = useState();
  const navigate =useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://629616eb75c34f1f3b28e361.mockapi.io/items/${id}`);
        setpizza(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  // console.log(pizza,"piizzzaa")


  if(!pizza){
    return(
      <h1>Wait ...</h1>
    )
  }
  return (
    <div>

      <h1>FullPiazza</h1>
      <img src={pizza.imageUrl} alt="" />
      <p>{id}</p>
      <p>
       {pizza.title}
      </p>
    </div>
  );
};

export default FullPiazza;
