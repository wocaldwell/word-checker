"use strict";
$(document).ready(function(){

    // listener that clear the input field when it is clicked
    $("#input-text").click(function() {
        if ($(this).val() === "Enter text here") {
            $(this).val("");
        }
    });

    let userInput;

    // listener that checks userInput on "Check Text" button click
    $("#check-button").click(function(userInput) {
        // varibale that contains textarea input
        userInput = $("#input-text").val();
        checkWordCount();
        duplicateCheck();
        verifyAlphaNumeric();
    });

    function checkWordCount() {
        userInput = $("#input-text").val();
        let splitInput = userInput.split(" ");
        if (splitInput.length > 100) {
            alert("You messed it up big time!!!");
            return false;
        }
    }

    function duplicateCheck() {
        userInput = $("#input-text").val();
        let lowerInput = userInput.toLowerCase(),
            splitInput = lowerInput.split(" "),
            sortedInput = splitInput.sort();
        for (var i = 0; i < sortedInput.length; i++) {
            if (sortedInput[i] === sortedInput[i + 1]) {
                alert("FUBAR!");
                return false;
            }
        }
    }

    function verifyAlphaNumeric() {
        userInput = $("#input-text").val();
        let collapsedInput = userInput.replace(/\s+/g, '');
        if (/^[a-zA-Z0-9- .!?,:;]*$/.test(userInput) === false) {
            alert("Nature is a language, can't you read!");
            return false;
        }
    }
});
