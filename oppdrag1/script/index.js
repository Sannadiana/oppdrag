$(document).ready(function() {

    //Start makeing a task
    $("#task-btn").click(function() {
        $("#make-task").css("padding", "1rem")
        $("#make-task").css("display", "inherit")
        $("#make-task").css("background", "lightgrey")
        $("#make-task").css("border-radius", "2rem")
    });

    //Close task making

    $("#close-task-btn").click(function() {
        $("#make-task").css("display", "none")
    })

    let color = "#2196F3";




    // Define card



    function card(text) {
        return (
            `<div class="kanban-card">
            <p>` +
            text +
            `</p>
            <button>
              <i class="fas fa-times"></i>
            </button>
        </div>`
        );
    }

    // Add new card
    $("input[type=text]").keypress(function(event) {
        if (event.which === 13) {
            let text = $(this).val();
            $(this).val("");
            $(this)
                .next(".list-body")
                .append(card(text));
        }
    });

    // Delete card
    $(document).on("click", ".kanban-card > button", function() {
        $(this)
            .parent()
            .fadeOut(250, function() {
                $(this).remove();
            });
    });



    $(function() {
        $("#sortable1, #sortable2, #sortable3,#sortable4")
            .sortable({
                connectWith: ".list-body"
            })
            .disableSelection();
    });

    $(function() {
        $("#to-do")
            .droppable({
                over: function() {

                },
                out: function() {

                },
                drop: function(event, ui) {
                    ui.draggable
                        .css("background-color", "darkblue")
                        .draggable({ disabled: true });
                }
            });

        $("#in-progress")
            .droppable({
                over: function() {

                },
                out: function() {

                },
                drop: function(event, ui) {
                    ui.draggable
                        .css("background-color", "orange")
                        .draggable({ disabled: true });
                }
            });

        $("#done")
            .droppable({
                over: function() {

                },
                out: function() {

                },
                drop: function(event, ui) {
                    ui.draggable
                        .css("background-color", "green")
                        .draggable({ disabled: true });
                }
            });

    })





});