import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'
const LIst = ({url}) => {

  const [list, setList] = useState([])
  const fetchList = async () =>{
     const response = await axios.get(`${url}/api/food/list`)
   
     if (response.data.success) {
       setList(response.data.data)
     }
     else
     {
      toast.error("error")
     }
  }
 const removeFood = async(foodId) =>{
   const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
   await fetchList()
   if (response.data.success) {
    toast.success(response.data.message)
   }
   else{
    toast.error("error")
   }
 }
  useEffect(()=>{
     fetchList()
  },[])
  return (
    <div className='list add flex-col'>
          <p>todos as comidas </p>
           <div className="list-table">
            <div className="list-table-format title">
              <b>imagem</b>
              <b>nome</b>
              <b>categoria</b>
              <b>preço</b>
              <b>ação</b>
            </div>
            {list.map((item,index) =>{
                  return(
                    <div key={index} className='list-table-format'>
                       <img src={`${url}/images/`+item.image} alt="" />
                       <p>{item.name}</p>
                       <p>{item.category}</p>
                       <p>R${item.price}</p>
                       <p onClick={() =>removeFood(item._id)} className='cursor'>X</p>
                       

                    </div>
                  )
            })}
           </div>
    </div>
  )
}

export default LIst