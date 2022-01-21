import React from 'react'
import Form from './Form'
import ApiServices from '../ApiServices'
import {useCookies} from 'react-cookie'



function Articles(props) {
    
    // var articles ={'articles':[articles]}
    
    const [token]=useCookies(['mytoken'])
    
    
    const update=(article)=>{
        props.update(article)
    }
    const destroy=(article)=>{
        ApiServices.deleteArticle(article.id,token['mytoken'])
        .then(() => props.destroy(article))
        .catch(error=>console.log(error))
        
    }
    
    
    
    
    
    
    
    return (
        <div className='container'>
             <h1 className='bg text-center text-white'> My Articles </h1>


        { props.articles && props.articles.map(article =>{
       return (
       <div className='mx-5 div ' key={article.id}>
           <div className='title'>
        <h1 className=" font-bold tit"> Title:</h1> <p className="particle"> {article.title}</p>

        
        </div>
 

        
        <div className='description'>
        <h4  className=" text-dark des">Description:</h4> <p className='pdes'> {article.description}</p>
        <button className=' btn-outline-primary buttons mx-4'  onClick=

        {()=> update(article)}
        >Update</button>


        <button className='btn-outline-danger buttons mx-4 ' 
        onClick={() => destroy(article)}
        > Delete</button>
       </div>
       <hr className='hr'/>
      
       </div>
       
       )
      
      }) 
      
    
    }
            
        </div>
        
    )
    
}

export default Articles
