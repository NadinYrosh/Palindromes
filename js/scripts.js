$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".output").empty();

    var word = $("#input").val().split("");
    var backWord = word.slice().reverse();

    console.log(word);

    if (word.toString() === backWord.toString()) {
      $(".output").append("This is a palindrome");
    } else {
      $(".output").append("This is not a palindrome");
    }
    //
    // for (var letter = 0; letter < word.length; letter++) {
    //   if (word[letter] !== backWord[letter]) {
    //     $(".output").append("This is not a palindrome");
    //   }
    // }
    // $(".output").append("This is a palindrome");

  });
});
