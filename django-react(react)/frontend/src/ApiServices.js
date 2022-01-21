

export default class ApiServices {
    static UpdateArticle(article_id,body,token) {
        return  fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
                  'method': 'PUT',
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Token ${token}`
                  },
                  body:JSON.stringify(body)
              }).then(resp => resp.json())
}


static addArticle(body,token){
    return fetch(`http://127.0.0.1:8000/api/articles/`,{
    'method': 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
    },
      body:JSON.stringify(body)

}).then(resp => resp.json())

}



static deleteArticle(article_id,token){

    return  fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token} `
            
        }
        
        })
}







static LoginUser(body){
    return fetch('http://127.0.0.1:8000/auth/',{
    'method': 'POST',
    headers: {
        'Content-Type': 'application/json',
        
    },
      body:JSON.stringify(body)

}).then(resp => resp.json());

}



static RegisterUser(body){
    return fetch('http://127.0.0.1:8000/api/users/',{
        'method': 'POST',
        headers: {
            'Content-Type': 'application/json',
            
        },
        body:JSON.stringify(body)
        
    }).then(resp => resp.json());
    
}

} 


