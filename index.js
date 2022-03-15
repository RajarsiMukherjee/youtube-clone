var arr=[];
    //let API =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=tesla&type=video&key=AIzaSyB6VatVgYvuW3E863bvoyYbeoxaZ4oiOB4`;
    async function searchVideo(){
        try{
            let videos=document.querySelector("#video").value;
            let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${videos}&type=video&key=AIzaSyBl1z5GpRXeQGeyveLYYxXAZYkGmqDUudA&maxResults=20`);
            let data = await res.json();
            console.log(data);
            var obj={
                itemval:videos,
            }
            arr.push(obj);
            localStorage.setItem("searchList",JSON.stringify(arr));
            
           
            let yt = data.items;
            console.log(yt);
            appendVideos(yt);
        }catch(err){
            console.log(err);
        }
    }
    searchVideo()
    const appendVideos = (elem)=>{
        document.querySelector("#main").innerHTML="";
        elem.forEach((user) => {
             let{
                 snippet,id:{videoId},
            }=user;
            // console.log(videoId);
            let div = document.createElement("div");
            div.setAttribute("id","gti");
            //  let iframe=document.createElement("iframe");
            //  iframe.src =`https://www.youtube.com/embed/${videoId}`;
            //  iframe.height="140";
            //  iframe.width="280";
            //  iframe.style.marginLeft="12px";
            //  iframe.addEventListener("click",viewYt);
            //  iframe.setAttribute("allowfullscreen","true");
            let tumbnail = document.createElement("img");
           tumbnail.src= snippet.thumbnails.medium.url;
           tumbnail.height="140";
           tumbnail.width="280";
           tumbnail.style.marginLeft="12px";

             let p=document.createElement("p");
             let{snippet:{title},
            }=user;
            p.textContent=title;
            p.style.marginLeft="12px";

            let data={
                snippet,
                title,
                videoId
            };
            div.onclick=()=>{
                showVideo(data);
            }
           
             div.append(tumbnail,p);
             document.querySelector("#main").append(div);
        });
    };
    function showVideo(da){
        localStorage.setItem("showut",JSON.stringify(da));
        window.location.href="view.html";
       

    }
    document.querySelector("#icon1").addEventListener("click",function(){
        window.location.href="index.html";
    })