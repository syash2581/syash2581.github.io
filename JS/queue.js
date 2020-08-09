
var queue = document.getElementById("queueul");
var item  = document.getElementById("name");
var item  = document.getElementById("name");
var exist=false;
var qexist =false;


    var queueC = document.cookie;
    var queueElements = queueC.split(";");
    console.log("quq"+queueElements)
        if(queueC!="")
        {
            queueElements.forEach(element => {
                console.log(element)
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
                        queue.appendChild(li);
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


        if(queueC=="")
        {
            document.cookie = "queue="+item.innerText;
        }
        else
        {
            queueElements = queueElements +","+li.innerText;
        }
        
        document.cookie = queueElements;        

        queue.appendChild(li);    
    }
   }