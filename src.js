function action(){
    let inp = document.getElementById("t").value;
    inp = inp.replace(/[\uac00-\ud7a3]+\(([\uac00-\ud7a3]*[\u4E00-\u9FFF|\uF900-\uFAFF]+[\uac00-\ud7a3]*)\)/g,"$1").replace(new RegExp("\n","g"),"<br>");
    document.getElementById("r").innerHTML = inp;
}