const posts=[
    {title:"post one" ,des:"this is post one"},
    {title:"post two" ,des:"this is post two"}
    
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
function createPost(post,callback){
    setTimeout(()=>{
         posts.push(post)
         callback();

     },2000);
};

createPost({title:"post four", des:"this is post four"},getPosts);
