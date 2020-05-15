$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      name: $("#burger").val().trim(),
      devoured: false
    };
})

$.ajax({
    type: "POST",
    data: newBurger
}).then(
    
)