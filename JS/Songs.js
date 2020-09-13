window.onorientationchange = ()=>window.location.reload();
// setTimeout(reload(), 50000);

    var catCount = 5 ;
    var songinrow = 0 ;
    var carItem  = 0 ;

    //and (orientation: landscape)
    if(window.matchMedia("screen and (max-width:599px)").matches)
    {   
        songinrow = 1;
        carItem = 5;
    }
    else if(window.matchMedia("screen and (max-width:999px)").matches)
    {
        songinrow = 4;
        carItem = 5;
    }    
    else if(window.matchMedia("screen and (max-width:1375px)").matches)
    {
        songinrow = 5;
        carItem = 5;
    }     
    else if(window.matchMedia("screen and (max-width:5000px)").matches)
    {
        songinrow = 10;
        carItem = 5;
    }  
    else
    {
        songinrow = 1;
        carItem = 1;
    }    



{/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */}



    //carItem =carItem - 1;

    



    
    //var songinrow = document.getElementById("colno").style.padding;
    //alert(songinrow+ "hello");
    var content = document.getElementById("content");
    content.style.padding = "10px";

    for(var i=1;i<=catCount;i++)
    {
        var row = document.createElement("tr");
        row.className = "row";
        row.style.marginLeft = "00px";
        

        var category = document.createElement("h2");
        category.style.marginLeft = "2vw";
        category.innerText = "Downloaded Song";
        category.style.fontSize = "02vw";

        content.appendChild(category);
        
        var carousel = document.createElement("div");
        carousel.id =  "carousel"+i;
        carousel.className = "carousel slide";
        carousel.setAttribute("data-ride","carousel");

        var carouselInner = document.createElement("div");
        carouselInner.className = "carousel-inner";

        
        
        for(var k=0;k<carItem;k++)
        {
            var carouselItem = document.createElement("div");
            if(k==0)
                carouselItem.className = "carousel-item "+i+" "+k+" active";
            else
                carouselItem.className = "carousel-item "+i+" "+k;

            //var div = document.createElement("div");
            //div.className = "d-block w-100";
            var cardtitle;
            var songblock;
            for(var j=1;j<=songinrow;j++)
            {

                var center = document.createElement("center");
                center.innerText = "song "+j;

                var col = document.createElement("td");
                col.className = "col"+j+"";
                // col.style.marginLeft = "20px";
                // col.style.position = "absolute";
                // col.style.marginBottom = "10px";
                col.style.paddingLeft  =col.style.paddingRight  = "1.5%";
                //col.style.margin = "1.5%";

                var card = document.createElement("div");
                card.className="songblock card";

                var cardimage = document.createElement("img");
                cardimage.className = "image card-image";
                cardimage.src = "/image/songs/"+center.innerText+".jpeg";
                cardimage.style.zIndex = "1";

                var cardbody = document.createElement("div");
                cardbody.className = "Card-img-overlay";

                var cardfooter = document.createElement("div");
                cardfooter.className = "Card-footer";
                cardfooter.innerHTML = center.innerHTML;

                cardtitle = document.createElement("div");
                cardtitle.id = "play "+i+" "+k+" "+j;
                // alert(cardtitle.id);
                cardtitle.className = "btn btn-primary";
                cardtitle.href = "song.html";
                cardtitle.style.position = "relative";
                cardtitle.style.float = "right";
                cardtitle.style.right  = "07px";
                cardtitle.style.bottom = "30px"
                cardtitle.style.height  = "30px";
                cardtitle.style.width ="30px";
                cardtitle.style.alignItems = "center";
                cardtitle.style.borderRadius = "100px"
                cardtitle.style.backgroundColor  = "white";
                cardtitle.style.color  ="black"
                cardtitle.style.opacity = "1";    
                cardtitle.style.boxShadow = "0px 0px 25px 6px white";
                // cardtitle.innerHTML = "m";
                cardtitle.style.marginBottom = "-40px";
                cardtitle.style.zIndex  = "2";
            
            

                var css = '#play:hover{ opacity: 1 }';
                var style = document.createElement('style');
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                } else {
                    style.appendChild(document.createTextNode(css));
                }

                document.getElementsByTagName('head')[0].appendChild(style);

                // var badge = document.createElement("span");
                // badge.style.borderRadius  ="5px";
            
                var pa = document.createElement("p");
                pa.id = "pa"+i+""+j;
                pa.className = "pa"+i+""+j;
                pa.style.border = "0px solid black";
                pa.innerHTML = "p";
                pa.style.position = "absolute";
                pa.style.top  ="0px";
                pa.style.right = "8px";
            

                // badge.appendChild(pa);
                //badge.backgroundColor = "blue";
                // badge.style.border = "2px solid white";
            
            
                //play.appendChild(badge);
                cardtitle.appendChild(pa);


            
                cardbody.appendChild(cardtitle);
                card.appendChild(cardimage);
                card.appendChild(cardbody);
                card.appendChild(cardfooter);

                songblock  = document.createElement("a");
                songblock.id = "song";
                songblock.className = "songblock";
                songblock.style.textDecoration = "none"; 
                // songblock.style.paddingLeft = "10px";
                // songblock.style.paddingRight = "10px";         
                //songblock.href = "song.html?item="+center.innerText;

                songblock.appendChild(card);
                col.appendChild(songblock);
                row.appendChild(col);

                carouselItem.appendChild(songblock);
               

                
                carouselInner.appendChild(carouselItem);
                songblock.href = "song.html?item="+cardtitle.id+"&song="+cardimage.src;
                // songblock.addEventListener("click",()=>{  songblock.href = "song.html?item="+cardtitle.id});
            }
     

            





            
            carousel.appendChild(carouselInner);
            row.appendChild(carousel);
        }

        content.appendChild(row);
        var prev = document.createElement("a");
            prev.href = "#"+carousel.id;
            prev.className = "carousel-control-prev btn btn-dark";
            prev.role = "button";
            prev.setAttribute("data-slide","prev");
            prev.style.top ="75px";
            prev.style.height  = prev.style.width  = "40px";
            prev.style.opacity  ="1"
            prev.style.borderRadius = "300px";


            var prevspan1 = document.createElement("span");
            prevspan1.className="carousel-control-prev-icon";
            prevspan1.setAttribute("aria-hidden","true");

            var prevspan2 = document.createElement("span");
            prevspan2.className="sr-only";
            prevspan2.innerText  = "Previous";

            prev.appendChild(prevspan1);
            prev.appendChild(prevspan2);


            var next = document.createElement("a");
            next.href = "#"+carousel.id;
            next.style.marginLeft = "50px";
            next.role = "button";
            next.className = "carousel-control-next btn btn-dark";
            next.style.borderRadius = "200px";
            next.style.opacity = "1";
            next.style.top = "75px"
            // next.style.color  ="black"
            next.style.height = next.style.width = "40px";
            next.setAttribute("data-slide","next");

            var nextspan1 = document.createElement("span");
            nextspan1.className="carousel-control-next-icon";
            nextspan1.setAttribute("aria-hidden","true");

            var nextspan2 = document.createElement("span");
            nextspan2.className="sr-only";
            nextspan2.innerText  = "Next";

            next.appendChild(nextspan1);
            next.appendChild(nextspan2);


            carousel.appendChild(prev);
            carousel.appendChild(next)
    }
    var playid;
    for(var i=1;i<=catCount;i++)
    {
      for(var k=0;k<carItem;k++)
      {
        for(var j=1;j<=songinrow;j++)
        {
            // alert(document.getElementById("pa"+i+""+j))
            playid = "play "+i+" "+k+" "+j;
            // alert(playid);
            document.getElementById(playid).addEventListener("click",(event)=>{ alert("this song will be played once media player will be desinged perfectly.");  event.preventDefault();  },false);
        }
      }
    }
    


    

    //document.getElementById("play").addEventListener("click",()=>{ alert(className+"Hello world"); /*event.stopPropagation()*/ });
    
    //document.getElementById("play").addEventListener("click",()=>{ alert(className+"Hello world"); /*event.stopPropagation()*/ });