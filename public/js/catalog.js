$(function () {
    $(".search").on("click", function (event) {
        event.preventDefault();
        // console.log($("#place")[0].selectedOptions[0].innerText)
        console.log($("#type")[0].selectedOptions[0].innerText)
        console.log($("#search")[0].value)
        let type = true
        if( $("#type")[0].selectedOptions[0].innerText === "Owned"){
            type =  true
        } else {
            type =  false
        };
        // window.location.replace("/catalog/"+ type +"/" + $("#search")[0].value)
    });
});