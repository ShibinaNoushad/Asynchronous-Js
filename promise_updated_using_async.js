 const posts=[
    {title:"post one" ,des:"this is post one"},
    {title:"post two" ,des:"this is post two"}
    
];
const getPosts=function(){
    return new Promise((res,rej)=>{
        resolve(setTimeout(()=>{
            let output="";
            posts.forEach((post)=>{
                output+=`<li>${post.title}</li>`
            });
            document.body.innerHTML=output;
    
        },1000))
    })
    
}
const getposts=function(){
    setTimeout(()=>{
        let output="";
        posts.forEach((post)=>{
            output+=`<li>${post.title}</li>`
        });
        document.body.innerHTML=output;

    },1000);
}
const createPost=function(post){
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
    const deletePost=function(){
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
    

async function printPost(){
    await createPost({title:'Post Three',body:'This is Post Three'})
    await deletePost();
    await createPost({title:'Post Four',body:'This is Post Four'})
    await getposts();
    await deletePost();
    await getposts();



}
printPost();