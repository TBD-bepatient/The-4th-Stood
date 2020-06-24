$(function () {
    $(".delete").on("click", function (event) {
        var id = $(this).data("id");
        console.log(id)
        $.ajax("/api/delete/" + id, {
            type: "delete",
        }).then(
            function () {
                location.reload();
            }
        );
    });
    $(".search").on("click", function (event) {
        const game = $("#game")[0].value;
        const userID = $("#userInfo")[0].attributes[1].value;
        const email = $("#userInfo")[0].innerHTML;
        // console.log(game);
        // console.log(userID);
        // console.log(email);
        $.ajax("/atlas/list/" + game, {
            type: "get",
        }).then(
            function(list){
                $("#chosenGame").empty
                $("#chosenGame").text("Click here to select your game!")
                function swapGame(){
                    const newGame = $(this)[0].textContent
                    console.log($(this)[0].textContent)
                    $("#chosenGame").empty
                    $("#chosenGame").text(newGame)
                    $(".send").removeClass("grey darken-2").addClass("grey lighten-2 grey-text text-darken-4").text("Submit!")
                };
                // const info = JSON.stringify(list);
                // console.log(list);
                $('.gameList').empty()
                for (i = 0; i < list.length; i++) {
                    $('.gameList').append(`<li class="swap waves-effect waves-red btn-flat white">${list[i]}</li>`)
                  };
                  var links = $('.gameList > li');
                  console.log(links)
                  for (var i = 0; i < links.length; i++) {
                    var link = links[i];
                    link.onclick = swapGame;
                  }
            }
        );
    });

    $(".send").on("click", function (event) {
        console.log("sending data to database")
        console.log($("#typeChoice")[0].firstElementChild.firstChild.value);
        const game = $("#chosenGame")[0].text;
        const userID = parseInt($("#userInfo")[0].attributes[1].value);
        let type = true
        if( $("#typeChoice")[0].firstElementChild.firstChild.value === "Owned"){
            type =  true
        } else {
            type =  false
        };
        $.ajax("/atlas/info/", {
            type: "post",
            data: {
                title: game
            }
        }).then(function(result){
            console.log(game);
            console.log(result[0].min_players)
            console.log(result[0].min_playtime)
            console.log(type)
            console.log(userID)
            $.ajax("api/new/", {
                type: "post",
                data: {
                    name: game,
                    time: result[0].min_playtime,  
                    players: result[0].min_players,
                    type: type,
                    userID: userID
                  }
            }).then(
                location.reload()
                );
            // setInterval('location.reload()', 2000);
        });
    });

    
});
