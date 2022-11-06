const posts=[
    {title:"post one" ,des:"this is post one",createdAt: new Date().getTime()},
    {title:"post two" ,des:"this is post two",createdAt: new Date().getTime()}
    
];
function getPosts(){
    setTimeout(()=>{
        let output="";
        posts.forEach((post)=>{
            output+=`<li>${post.title} :last updated ${Math.floor((new Date().getTime()-post.createdAt)/1000)} seconds ago</li><br>`;

        });
        document.body.innerHTML=output;

    },1000);
}
function createPost(post,callback){
    setTimeout(()=>{
         posts.push({...post,createdAt:new Date().getTime()})
         callback();

     },2000);
};

createPost({title:"post three", des:"this is post three"},getPosts);


function createFourthPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },3000);
};

createPost({title:"post four",des:"this is post four"},getPosts);