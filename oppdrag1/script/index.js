$(document).ready(function() {
    //Start makeing new card
    $("#newCard-btn").click(function() {
        $(cardInput).css("display", "inherit")
    });
    let color = "#2196F3";
    colorBorder();

    // Render bottom border for input field
    function colorBorder() {
        $("input[type=text]").css("border-bottom", "2px solid" + color + "");
    }

    // Define card
    function card(color, text) {
        return (
            `<div class="kanban-card d-flex flex-column" style="background-color:` +
            color +
            `">
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
                .append(card(color, text));
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
});