import { useState } from 'react'
import './Add.css'
import {assets} from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({url}) => {

  const [image, setImage] = useState(false)
  const [data,setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salada"

  })

  const onChangeHandler = (event) =>{
  const name = event.target.name
  const value = event.target.value
  setData(data=>({...data,[name]:value}))
  }

const onSubmitHandler = async (event) =>{
    event.preventDefault()
    const formData =  new FormData()
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category",data.category)
    formData.append("image", image)
    const response = await axios.post(`${url}/api/food/add`,formData)
    if (response.data.success) {
         setData({
            name:"",
            description:"",
            price:"",
            category:""
        
          })
          setImage(false)
          toast.success(response.data.message)
    }else{
      toast.error(response.data.message)
    }
}

  return (
    <div className='add'>
       <form className="flex-col" onSubmit={onSubmitHandler}> 

       <div className="add-img-upload flex-col"> 
         <p>fazer upload da imagem</p>
         <label htmlFor="image">
          <img src={ image?URL.createObjectURL(image):assets.upload_area} alt="" />
         </label>
        <input onChange={(e) =>setImage(e.target.files[0])} type="file" id='image' hidden required />
       </div>
       <div className='add-product-name flex-col'>
          <p>nome do produto</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='tipo aqui' />
       </div>
       <div className="add-product-description flex-col">
        <p>descrição do produto</p>
        <textarea  onChange={onChangeHandler} value={data.description} name="description"  rows="6" placeholder='descriçao do produto aqui' required></textarea>
       </div>
       <div className="add-category-price">
         <div className="add-category flex-col">
          <p>categoria do produto</p>
          <select onChange={onChangeHandler} name="category" >
            <option value="Salada">Salada</option>
            <option value="Rolos">Rolos</option>
            <option value="Desertas">Desertas</option>
            <option value="Sanduíche">Sanduíche</option>
            <option value="Bolo">Bolo</option>
            <option value="Vegetais puros">Vegetais puros</option>
            <option value="Torta">Torta</option>
            <option value="Macarrão">Macarrão</option>
            <option value="Refrigerante">Refrigerante</option>
            <option value="Bebida alcoólica">Bebida alcoólica</option>
          </select>
         </div>
         <div className="add-price flex-col" >
          <p>preço do  produto</p>
          <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='R$30' />
         </div>
       </div>
       <button type='submit' className='add-btn'>adicionar</button>
       </form>
    </div>
  )
}

export default Add
