$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
        name: $("#burger").val().trim()
    };

    $.ajax({
        url: "/api/burgers",
        type: "POST",
        data: newBurger
    }).then((res)=>{
        location.reload()
    })
})

$(".eat").on("click", function (event) {
    let id = $(this).attr("data-id")
    console.log(id)
    $.ajax({
        url: "/api/burgers/" + id,
        type: "PUT"
    }).then((res)=>{
        location.reload()
    })
})

$(".remove").on("click", function (event) {
    let id = $(this).attr("data-id")
    console.log(id)
    $.ajax({
        url: "/api/burgers/" + id,
        type: "DELETE"
    }).then((res)=>{
        location.reload()
    })
})