const posts=[
    {title:"post one" ,des:"this is post one"},
    {title:"post two" ,des:"this is post two"},
    {title:"post three",des:"this is post three"}
    
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
                reject('error:something is wrong');
            }
        },1000);

    });
            
    };
createPost({title:'post four',des:'this is post four'})//after promise returned we call getfunction using then
.then(getPosts)
//.catch(err=>console.log(err));//catching the error by setting error to true and catching it using catch and we console the error.
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop();
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('Some error')
            }
        },1000);
    })
};
deletePost().then(getPosts);


             

