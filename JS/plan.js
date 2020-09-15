$(window).onorientationchange = ()=>$(window).location.reload();
$(document).ready(function(){ prepare(); })

function prepare()
{
    var queue = document.createElement("button");
    queue.className= "btn btn-primary";
    queue.innerText = "Show Queue";
    queue.id = "showq"
    $(queue).appendTo("#content");
    $(queue).css("display", "block");;
    
    
    
    var span = document.createElement("button");
    span.className= "btn btn-primary";
    span.innerText = "Show Plan";
    span.id = "showplan"
    $(span).appendTo("#content");
    $(span).css("display", "block");;


    var songblock = document.createElement("a");
    songblock.id = "songblock";
    $(songblock).addClass("songblock");

    
    var songblock2 = document.createElement("div");
    songblock2.id = "songblock2";
    $(songblock2).addClass("songblock");


    var image  = document.createElement("img");
    image.id = "img";

    $(image).addClass("image");
    $(image).html("Plan A");

    var planName = document.createElement("p");
    $(image).addClass("image");


    $(image).appendTo(songblock2);
    $(songblock2).appendTo(songblock);
    
    $(songblock).appendTo("#content");
    



        
        $("#songblock").hide();
        $("#showplan").on("click", function () {
            //$("#songblock").toggle();
            
            if($("#showplan").html() == "Show Plan")
        {
            $("#songblock").show(500);
            $("#songblock").empty();
            document.getElementById("showplan").innerText = "Hide Plan";
        }
        else
        {
            $("#songblock").hide('slow');
            document.getElementById("showplan").innerText = "Show Plan";
        } 
        });
       
       
       
        $(".queue").hide();
        $("#showq").on("click", function () {
            //$("#songblock").toggle();
            
            if($("#showq").html() == "Show Queue")
        {
            $(".queue").show(500);
            $("#showq").empty();
            document.getElementById("showq").innerText = "Hide Queue";
        }
        else
        {
            $(".queue").hide('slow');
            document.getElementById("showq").innerText = "Show Queue";
        } 
        });


}







