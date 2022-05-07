import configuration from '../configuration'
let backendAddress = configuration.backendAddress;

let apiAccess ={
    addCustomer:(name, email, password)=>{
        return fetch(`${backendAddress}/register`, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password}) 
         })
         .then(x => x.json())
         .then(x => {
             console.log(x);
             return x;
         });

    },
    login: (email, password) => {
       return fetch(`${backendAddress}/login`, {
          method: 'Post',
          credentials: "include",
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Credentials': true
          },
          body: JSON.stringify({email, password}) 
       })
       .then(x => x.json())
       .then(x => {
           console.log(x);
           return x;
       });
   },
   logout: (email, password) => {
    return fetch(`${backendAddress}/logout`, {
       method: 'Post',
       credentials: "include",
       headers: {
           'Content-Type': 'application/json',
           'Access-Control-Allow-Credentials': true
       }, 
    })
    .then(x => x.json())
    .then(x => {
        console.log(x);
        return x;
    });
},

   addScore: (quizTaker,quizName,score)=>{
       
    return fetch(`${backendAddress}/score`, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({quizTaker,quizName,score}) 
     })
     .then(x => x.json())
     .then(x => {
         console.log(x);
         return x;
     });
   },
   getFlowers: () => {
    return fetch(`${backendAddress}/flowers`, {
        method: 'Get',
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Credentials": true
        }
     })
    .then(x => x.json())
    .then(x => {
        console.log(x);
        return x.result;
    });
},
getQuiz: (name) => {
    return fetch(`${backendAddress}/quiz/${name}`, {
        method: 'Get',
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Credentials": true
        },
     })
    .then(x => x.json())
    .then(x => {
        
        return x.result;
    });
},
isLoggedIn: () => {
    return fetch(`${backendAddress}/isloggedin`, {
        method: 'Get',
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Credentials": true
        }
     })
    .then(x => x.json())
    .then(x => {
        console.log(x);
        return x.result;
    });
}
}

export default apiAccess;