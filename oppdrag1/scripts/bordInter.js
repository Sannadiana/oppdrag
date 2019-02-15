$(function() {
    $(".card")
        .draggable({
            start: function() {
                $(this).toggleClass("dragged");
            },
            stop: function() {
                $(this).toggleClass("dragged");
            },
        });

    $("#to-do")

    .droppable({
        drop: function(event, ui) {
            ui.draggable.css("background-color", "#0080ff");
        }

    });

    $("#in-progress")

    .droppable({
        drop: function(event, ui) {
            ui.draggable.css("background-color", "orange")
        }

    });

    $("#done")
        .droppable({

            drop: function(event, ui) {
                ui.draggable.css("background-color", "green")

            }

        });

})