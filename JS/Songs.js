var catCount =5;
    var songinrow = 7;
   var content = document.getElementById("content");

    
    for(var i=1;i<=catCount;i++)
    {
        var nav = document.createElement("nav");

        var category = document.createElement("h2");
        //category.style.marginLeft = "2vw";
        category.innerText = "Downloaded Song";

        nav.appendChild(category);
        for(var j=1;j<=songinrow;j++)
        {
            var songblock  = document.createElement("a");
            songblock.className = "songblock";


            var divImage = document.createElement("div");
            divImage.className = "image";

            var image = document.createElement("img");
    
            var center = document.createElement("center");
            center.innerText = "song "+j;


            image.style.height = "inherit";
            image.style.width = "inherit";
            image.src = "image/songs/"+center.innerText+".jpeg";


            songblock.href = "song.html?item="+center.innerText;

            nav.style.marginLeft = "4vw";
            nav.style.display = "inline-flexbox"
            nav.style.flexDirection = "column";
    
    
            divImage.appendChild(image);
            divImage.appendChild(center);

            songblock.appendChild(divImage);

            nav.appendChild(songblock);
        }
        content.appendChild(nav);
    }