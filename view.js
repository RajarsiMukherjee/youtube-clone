let{videoId,snippet} = JSON.parse(localStorage.getItem("showut"));
    //  let sentence =  JSON.parse(localStorage.getItem("showut"));
    
    let movie_div=document.querySelector("#live");

    
    var i=0;
    //showList.map(function(elem){
    let div = document.createElement("div");
    let iframe = document.createElement("iframe");
    iframe.src =`https://www.youtube.com/embed/${videoId}`;
              iframe.height="500px";
              iframe.width="100%";
              iframe.setAttribute("allowfullscreen","true");

    let title=document.createElement("p");
   
    title.textContent= snippet.title;
    title.style.marginLeft="12px";  
    title.style.fontSize="26px";
    title.style.fontWeight="bolder";

    let p1 = document.createElement("p");
    p1.textContent=snippet.description;

    let div3 = document.createElement("div");
    div3.setAttribute("id","hii");
    var p4 = document.createElement("p");
    p4.textContent="1,863,649 views - Dec 12, 2021";
    p4.style.marginLeft="17px";  
    p4.style.fontSize="21px";
    var like = document.createElement("img");
    like.src ="https://cdn-icons-png.flaticon.com/128/633/633759.png";
    like.style.height="36px";
    like.style.width="35px";
    like.style.marginLeft="150px";
    like.style.marginTop="10px";
    var p5 = document.createElement("p");
    p5.textContent="271K";
    p5.style.fontSize="21px";
    p5.style.marginLeft="20px";
    var dlike = document.createElement("img");
    dlike.src ="https://cdn-icons-png.flaticon.com/128/633/633758.png";
    dlike.style.height="36px";
    dlike.style.width="35px";
    dlike.style.marginLeft="40px";
    dlike.style.marginTop="14px";
    var p7 = document.createElement("p");
    p7.textContent="DISLIKE";
    p7.style.fontSize="21px";
    p7.style.marginLeft="20px";
    
    var share = document.createElement("img");
    share.src ="https://cdn-icons.flaticon.com/png/128/2958/premium/2958783.png?token=exp=1644422898~hmac=d4dce5afc4a7ef48ac48b81d2b1daf3f";
    share.style.height="36px";
    share.style.width="35px";
    share.style.marginLeft="40px";
    share.style.marginTop="14px";
    var p8 = document.createElement("p");
    p8.textContent="SHARE";
    p8.style.fontSize="21px";
    p8.style.marginLeft="20px";
   
    var save = document.createElement("img");
    save.src =" https://cdn-icons.flaticon.com/png/128/2989/premium/2989976.png?token=exp=1644423815~hmac=b90e639bc27171860981ec7197b6b350";
    save.style.height="36px";
    save.style.width="35px";
    save.style.marginLeft="40px";
    save.style.marginTop="14px";
    var p9 = document.createElement("p");
    p9.textContent="SAVE";
    p9.style.fontSize="21px";
    p9.style.marginLeft="20px";

    var div4=document.createElement("div");
    div4.setAttribute("id","git");
    var div5=document.createElement("div");
    div5.setAttribute("id","fix");
    var div6=document.createElement("div");
    var button1 = document.createElement("button");
    button1.textContent="JOIN";
    button1.style.height="45px";
    button1.style.width="90px";
    button1.style.marginLeft="100px";
    button1.style.marginTop="22px";
    var button2 = document.createElement("button");
    button2.textContent="SUBSCRIBED";
    button2.style.height="45px";
    button2.style.width="180px";
    button2.style.marginLeft="28px";
    button2.style.marginTop="22px";
    button2.style.backgroundColor="red";
    button2.style.color="white";
    button2.style.fontSize="18px";
    button2.style.border="none";
   
    var bell = document.createElement("img");
    bell.src =" https://t4.ftcdn.net/jpg/02/50/49/45/240_F_250494586_B5rymPpFuGS4QyamEwuiM7KV6iocqjms.jpg";
    bell.style.height="38px";
    bell.style.width="37px";
    bell.style.marginTop="23px";
    bell.style.marginLeft="20px";
  
    div6.append(button1,button2,bell)
    div5.append(p1);
    div4.append(div5,div6);
    div3.append(p4,like,p5,dlike,p7,share,p8,save,p9);
    
    div.append(iframe,title,div3,div4);
    movie_div.append(div);
    i++;

    var getThis = JSON.parse(localStorage.getItem("searchList"));

      var res= getThis.map(function(el){
      var p = el.itemval;
      return p;
        
    });
    var ans = res[i];
  
    console.log(ans);
     
   


    async function searchVideo(){
        try{
            console.log(ans);

            let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${ans}&type=video&key=AIzaSyBl1z5GpRXeQGeyveLYYxXAZYkGmqDUudA&maxResults=5`);
            let data = await res.json();
           
            let yt = data.items;
            console.log(yt);
            
            appendVideos(yt);
       
        }catch(err){
            console.log(err);
        }
    }
    searchVideo();

     const appendVideos = (elem)=>{
        document.querySelector("#hit").innerHTML="";
        elem.forEach((user) => {
             let{
                snippet,id:{videoId},
            }=user;
            console.log(videoId);
            let div = document.createElement("div");
            div.setAttribute("id","gti");
             let iframe=document.createElement("iframe");
             iframe.src =`https://www.youtube.com/embed/${videoId}`;
             iframe.height="120";
             iframe.width="210";
             iframe.style.marginLeft="10px";
             iframe.setAttribute("allowfullscreen","true");

             let title=document.createElement("p");
   
             title.textContent= snippet.title;
             title.style.marginLeft="12px";  
             title.style.fontSize="16px";
             title.style.fontWeight="bolder";
             let div2 = document.createElement("div");

             let p6=document.createElement("p");
             p6.textContent=`${(Math.floor(Math.random()*400)+100)} Views `;
             p6.style.marginLeft="15px";
             p6.style.marginTop="18px";

             div2.append(title,p6);

             div.append(iframe,div2);
             document.querySelector("#hit").append(div);
        });
    }

   

    document.querySelector("#icon1").addEventListener("click",function(){
        window.location.href="index.html";
    })