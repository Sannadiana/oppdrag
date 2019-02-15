$(function() {
    $(".card")
        /*Hvis man kan i en løsning stilsette fra css gjør det. 
        Ellers så kan JQuery style når det er dynamisk, bruker preferanser.*/
        .css({
            "background-color": "#A0A0A0",
            "width": "40%",
            "padding": "1rem",
            "border": "1px solid rgb(100, 100, 0)"
        })
        .draggable({
            start: function() {
                $(this).toggleClass("dragged");
            },
            stop: function() {
                $(this).toggleClass("dragged");
            },
            drag: function() {

            }
        });

    $("#in-progress")
        /*Hvis man kan i en løsning stilsette fra css gjør det. 
        Ellers så kan JQuery style når det er dynamisk, bruker preferanser.*/

    .droppable({
        over: function() {

        },
        out: function() {

        },
        drop: function(event, ui) {
            ui.draggable.css("background-color", "orange")

        }

    });

    $("#done")
        /*Hvis man kan i en løsning stilsette fra css gjør det. 
        Ellers så kan JQuery style når det er dynamisk, bruker preferanser.*/

    .droppable({
        over: function() {

        },
        out: function() {

        },
        drop: function(event, ui) {
            ui.draggable.css("background-color", "green")

        }

    });

})