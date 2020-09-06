var body  = document.getElementsByTagName("body");

var modal = document.createElement("div");
modal.className = "modal fade";
modal.id = "modal";
modal.tabIndex = "-1";
modal.role = "dialog";

var modalDialog = document.createElement("div");
modalDialog.className = "modal-dialog";
modalDialog.role = "document";

var modalcontent = document.createElement("div");
modalcontent.className = "modal-content";

var modalHeader = document.createElement("div");
modalHeader.className = "modal-header";

var modaltitle = document.createElement("div");
modaltitle.className = "modal-title";
modaltitle.innerHTML  = "Subscribe <em style=\"font-size:xx-large;\">49<sup>*</sup><strike>99</strike></em> <small> ₹ per month.</small>"

var closebtn= document.createElement("button");
closebtn.className ="close";
closebtn.setAttribute("data-dismiss","modal");
closebtn.setAttribute("aria-label","close");

var span = document.createElement("span");
span.setAttribute("aria-hidden","true");
span.innerHTML = "&times;"

closebtn.appendChild(span);
modalHeader.appendChild(modaltitle);
modalHeader.appendChild(closebtn);

var modalbody= document.createElement("div");
modalbody.className ="modal-body";
modalbody.innerHTML = "This offer is available till December 31,2020 only.<br> <small> T&C Applied </small> ";


var modalfooter = document.createElement("div");
modalfooter.className = "modal-footer";

var btnClose= document.createElement("button");
btnClose.className ="btn btn-primary";
btnClose.setAttribute("data-dismiss","modal");
btnClose.innerText = "close";

var btnSave= document.createElement("button");
btnSave.className ="btn btn-primary";
btnSave.innerText  = "Save Changes";

modalfooter.appendChild(btnClose);
//modalfooter.appendChild(btnSave);

modalcontent.appendChild(modalHeader);
modalcontent.appendChild(modalbody);
modalcontent.appendChild(modalfooter);

modalDialog.appendChild(modalcontent);

modal.appendChild(modalDialog);

document.getElementById("body").appendChild(modal);

$(document).ready(function(){
    $("#modal").modal('show');
});

