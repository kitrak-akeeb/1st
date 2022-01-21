import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import Articles from './Components/Articles'
import Form from './Components/Form'
import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'



function App() {

  const [articles, setArticles] =useState([])
  const [editArticle, setEditArticle] =  useState(null)
  const [token,setToken ,removeToken] =  useCookies(['mytoken'])
  let navigate = useNavigate()
  
  useEffect(() => {
    fetch(' http://127.0.0.1:8000/api/articles/',{
      'method':'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Token ${token['mytoken']}`,
       
      }
    })

      

     

    
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))


  },[])


  useEffect(()=>{
    if (!token['mytoken']){
        navigate('/')
    }
  },[token])
     

  const update=(article)=>{
    setEditArticle(article)

  }

  const updatedArticle = (article) => {
    const new_article = articles.map(myarticle => {
      if(myarticle.id  === article.id){
        return article;

      }
      else{
        return myarticle;
      }
 
    })
     
    setArticles(new_article)


  }
    const articleForm=()=>{
      setEditArticle({title:'',description:''})
     
    }



    const AddedInformation = (article) => {
      const new_articles = [...articles,article]
      setArticles(new_articles)


    }


    const destroy=(article)=>{

      const new_articles = articles.filter(myarticle=>{
        if (myarticle.id === article.id)
        {

          return false
        }
        return true

      })

      setArticles(new_articles)


    }


    const logout =()=>{
      removeToken(['mytoken'])
    }



    useEffect(()=>{
      if (!token['mytoken']){
        // alert('please fill your credentials correctly')
          navigate('/')
      }
  
  
    },[token])

  return (
    <div className="App">


    

        <Articles articles={articles} update={update} destroy={destroy}/>
       
      
      {editArticle ?  <Form article ={editArticle} updatedArticle={updatedArticle}    
      AddedInformation = {AddedInformation}/> :null} 





     <div className='col'>
  <button  className="btn btn-outline bg-danger text-white mx-5 my-4 text-center" onClick = {articleForm}>Add Article</button>
</div> 


<div className='col'>
  <button  className="btn btn-outline bg-danger text-white mx-5 my-4 text-center" onClick = {logout}>Logout</button>
</div> 
    </div>

  );
}

export default App;
