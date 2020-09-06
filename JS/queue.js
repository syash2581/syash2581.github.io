
if(window.location.pathname  == "/song.html")
{
    var addQ = document.getElementById("addQueue").addEventListener("click",addQueue);
}
var queue = document.getElementById("queueul");
var queue2 = document.getElementById("queueul_menu");
var item  = document.getElementById("name");
var exist=false;
var qexist =false;


    var queueC = document.cookie;
    var queueElements = queueC.split(";");
    // console.log("quq"+queueElements)
        if(queueC!="")
        {
            queueElements.forEach(element => {
                // console.log(element)
                var song = element.split("=");
                if(song[0] == "queue")
                {
                    var list = song[1].split(",");
                    //console.log(list);
                    qexist = true;
                    list.forEach(element => {
                        // console.log(element)
                        if(window.location.pathname == "/song.html")
                        {   
                           // alert(item.innerText)
                            //alert(element)
                            if(item.innerText==element)
                            {
                                exist=true;
                            }
                        }
                        var li = document.createElement("li");
                        li.className = "pop";
                        li.innerText = element;

                        if(window.matchMedia("screen and (min-width:1000px)").matches)
                        {   
                            queue.appendChild(li);
                        }
                        else
                        {
                            queue2.appendChild(li);
                        } 
                        // queue[0].appendChild(li);
                        
                        //queue2.appendChild(li);
                    });
                }                
            });           
        }
        

   function addQueue()
   {
       
        if(!exist)
        {
            var li = document.createElement("li");
            li.className = "pop";
            li.innerText = item.innerText;
        
            var badge = document.createElement("span");
            badge.className = "badge badge-secondary badge-pill";
            badge.innerText= "|>";
        
            //badge.style.borderRadius ="5px black";

            if(queueC=="")
            {
                document.cookie = "queue="+item.innerText;
            }
            else
            {
                queueElements = queueElements +","+li.innerText;
            }
            
            document.cookie = queueElements;        
            li.appendChild(badge);
            li.innerText = item.innerText;

            // if(window.matchMedia("screen and (min-width:1000px)").matches)
            //                 {   
            //                     queue.appendChild(li);
            //                 }
            //                 else
            //                 {
            //                     queue2.appendChild(li);
            // }
            // queue.appendChild(li);
            // queue2.appendChild(li);
            // queue2.appendChild(li);
            
            
            
        }
        window.location.href = "index.html";
    }

    //Event that clears the queue for clear1
var clear = document.getElementById("clear");
clear.addEventListener("click",()=>{
    document.cookie = "queue=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.reload();
});
//Event that clears the queue for clear2
var clear = document.getElementById("clear2");
clear.addEventListener("click",()=>{
    document.cookie = "queue=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.reload();
});

//show the clear button when user hover the queue part in full mode
var cls = document.getElementById("queue");
cls.addEventListener("mouseover",()=>{
    let clear = document.getElementById("clear");
    clear.style.display = "inline-flex";
    clear.style.float ="right";
});
cls.addEventListener("mouseout",()=>{
    let clear = document.getElementById("clear");
    clear.style.display = "none";
    clear.style.float = "";
});