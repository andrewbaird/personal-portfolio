$(document).ready(function() {
    setTrigger();
});

function setTrigger(){
    $('#dayCheckTrigger').click(function() {
        getInputText()
    });
}

function getInputText() {
    console.log($('#InputText').val());
}