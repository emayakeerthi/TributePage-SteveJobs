function readMore(){
    var read_more = document.getElementById("read-more");
    var readMoreBtn = document.getElementById("read-more-btn");

    if(read_more.style.display === "none"){
        read_more.style.display = "inline";
        readMoreBtn.innerHTML = "Read less";
    }
    else{
        read_more.style.display = "none";
        readMoreBtn.innerHTML = "Read More";
    }
}