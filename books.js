fetch("books.json")
.then(function(response){
    return response.json();
})
.then(function(books){
    let placeholder = document.querySelector("#bukubaru");
    let out = "";
    for(let book of books){
        out += `
        <div class="col-lg-2">
        <img src="${book.image.src}" style="width: ${book.image.width}px; height: ${book.image.height}px;">
        <div class="text">
            <h3 style="color: rgb(21,128,61)">${book.datepost}</h3>
            <br>
            <h2 style="color: rgb(1,34,105)">${book.title}</h2>
            <br>
            <br>
            <br>
            <h4 style="color: rgb(13,110,253)">${book.genre}</h4>
            <h4 style="color: rgb(13,110,253)">${book.author}</h4>
            <h4 style="color: rgb(13,110,253)">${book.year}</h4><br>
        <div>
        </div>
        `
    }

    placeholder.innerHTML = out;
})