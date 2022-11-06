const posts=[
    {title:"post one" ,des:"this is post one",createdAt: new Date().getTime()},
    {title:"post two" ,des:"this is post two",createdAt: new Date().getTime()}
    
];
function getPosts(){
    setTimeout(()=>{
        let output="";
        posts.forEach((post)=>{
            output+=`<li>${post.title} :created at ${post.createdAt}</li><br>`;

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

createPost({title:"post three", des:"this is post three",createdAt: new Date().getTime()},getPosts);


function createFourthPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },3000);
};

createFourthPost({title:"post four",des:"this is post four",createdAt: new Date().getTime()},getPosts);