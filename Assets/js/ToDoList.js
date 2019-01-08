// Check li on click
$("ul").on("click", "li", function(){
   $(this).toggleClass("completed"); 
});

// Click on X to delete
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function()
    {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress( function(event){
    
    if (event.which === 13)
    {
        var newToDo = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + newToDo + "</li>");
        $(this).val("");
    }
});