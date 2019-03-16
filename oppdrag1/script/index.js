$(document).ready(function() {

    //Hide creat task inputs
    $("#make-task").css("display", "none")

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

    //Add new card 
    /**Ønsker å sjekke variablene om de er tom,
     *  så gi beskjed tul brukeren om å fylle inn hvor det mangler innhold */
    $("#addTask-btn").on("click", function() {

        let title = $("#cardTitle").val();
        let desc = $("#cardDesc").val();
        let points = $("#cardSp").val();

        let htmlText = `
            <div class="kanban-card">
            <div id="card-content">
            <h1>${title}</h1> 
            <p id="card-desc">${desc}</p> 
            <p>${points}</p>
            </div>
            <button>
              <i class="fas fa-times"></i>
            </button>
            </div>
            `;
        $("#sortable1").append(htmlText);
        $("#cardTitle, #cardDesc, #cardSp").val("");
        $("#card-content").css("width", "100%");

    });


    // Delete card
    $(document).on("click", ".kanban-card > button", function() {
        $(this)
            .parent()
            .fadeOut(250, function() {
                $(this).remove();
            });
    });

    // Sort cards into sections 
    $(function() {
        $("#sortable1, #sortable2, #sortable3,#sortable4")
            .sortable({
                connectWith: ".list-body"
            })
            .disableSelection();
    });


    // Drag and Drop cards ino sections
    $(function() {
        $("#to-do")
            .droppable({
                drop: function(event, ui) {
                    ui.draggable
                        .css("background-color", "darkblue")
                        .draggable({ disabled: true });
                    $("#to-do").css("color", "white")
                }
            });

        $("#in-progress")
            .droppable({
                drop: function(event, ui) {
                    ui.draggable
                        .css("background-color", "orange")
                        .draggable({ disabled: true });
                }
            });

        $("#done")
            .droppable({
                drop: function(event, ui) {
                    ui.draggable
                        .css("background-color", "green")
                        .draggable({ disabled: true });
                }
            });



    })





});