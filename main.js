function Click(item) {
    if(item.className === "student"){
        item.className = "student present";
    }else if(item.className === "student present"){
        item.className = "student absent";
    }else{
        item.className = "student";
    }
}