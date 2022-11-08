const posts=[
    {title:"post one" ,des:"this is post one"},
    {title:"post two" ,des:"this is post two"},
    
];
function getPosts(){
    setTimeout(()=>{
        let output="";
        posts.forEach((post)=>{
            output+=`<li>${post.title}</li>`
        });
        document.body.innerHTML=output;

    },1000);
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
             const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('Some error')
            }
        },1000);

    });
            
    };
createPost({title:"post three",des:"this is post three"})//after promise returned we call getfunction using then
//.then(getPosts)
//.catch(err=>console.log(err));//catching the error by setting error to true and catching it using catch and we console the error.
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const arr_length=posts.length;
            if(!arr_length){
                reject('Array is empty now');

            }
            else{
                posts.pop();
                resolve();

            }
            
        },1000);
    })
};
/*correct way to call one function after other using then is to make new function by including all the function to be called in correct order and pass on (then).
or by using arrow function inside then for calling two function  eg:line num 69-74.
.then(()=>{
    getPosts();
    deletePost();
})*/
/*const newfunction=()=>{
    getPosts();
    deletePost();
}*/
deletePost()
deletePost()//.then(getPosts);
deletePost()
//deletePost()
//.catch(err=>console.log(err))

createPost({title:'post four',des:'this is post four'}).then(setTimeout(()=>{
    getPosts();
    deletePost().then(()=>{
        getPosts();
    })
},1000)
);










             

