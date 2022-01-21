import React ,{useState, useEffect} from 'react'
import ApiServices from '../ApiServices.js'
import {useCookies} from 'react-cookie'



function Form(props) {
    const[title,setTitle] = useState('')
    const[description,setDescription] = useState('')
    const[token]=useCookies(['mytoken'])
    const[isLogin,setLogin]=useState(true)


    useEffect(() => {
        setTitle(props.article.title)
        setDescription(props.article.description)
    },[props.article])

    const updateArticle=(()=>{
        
        ApiServices.UpdateArticle(props.article.id,{title,description},token['mytoken'])
        .then(resp=>props.updatedArticle(resp))
    })


    const addArticle = () => {

        ApiServices.addArticle({title,description},token['mytoken'])
        .then(resp=> props.AddedInformation(resp))
    }

    return (
        <div>
            
            {props.article ?  (
                <div className='mx-5 font-bolder'>
                    <label htmlFor='title' className='text-primary my-3' >Title</label>

                    <input type='text' id='title' className='form-control ' placeholder='Enter Title' value={title} onChange={e=>setTitle(e.target.value)}></input>

                    <label htmlFor='title' className='text-primary my-3  ' >Description</label>
                    <textarea type='text-area' id='description' value={description} className='form-control my-2 ' rows='2' onChange={e=>setDescription(e.target.value)}  placeholder='Enter Description'></textarea>

{
    props.article.id    ?    <button className='btn btn-outline bg-danger text-white ' onClick={updateArticle}>Update</button>
    :<button className='btn btn-outline bg-danger text-white ' onClick={addArticle}>Add</button>

}

                </div>
            ):null }
        </div>
    )
}

export default Form
