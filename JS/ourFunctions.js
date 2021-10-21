//this file contail some function to  clean the code

var user_lose = function () {
  // appear losing card if user fail
  $(".outer_content").hide(1000);
  $(".n").hide();
  $(".card").show(1000);
  $(".card .fail").show();
  $(".card input.namee").val(name);
  $(".card input.scoree").val(counter);
};

var user_win = function () {
  $(".outer_content").hide(1000);
  $(".n").hide();
  $(".card ").show(1000);
  $(".card .win").show();
  $(".card input.namee").val(name);
  $(".card input.scoree").val(counter);
};
var user_win = function () {
  //appear winning card if user win
  $(".outer_content").hide(1000);
  $(".n").hide();
  $(".card ").show(1000);
  $(".card .win").show();
  $(".card input.namee").val(name);
  $(".card input.scoree").val(counter);
}; // end user_win
var doUpdate = function () {
  // do timer and check if user win or lose
  $(".clock").each(function () {
    var count = parseInt($(this).html()); //to convert text to number
    if ($(".inner-box").length == 0 && count != 0) {
      user_win(); // calling win function
    } else if (count == 0 && $(".inner-box").length > 0) {
      user_lose(); //calling fail function
    } else if (count !== 0) {
      $(this).html(count - 1); // to down time for specific time
    }
  }); //end clock
}; // end doUpdate function

var create_boxes = function () {
  var typeRandom; ///variable to the rondam  create
  for (j = 0; j < 13; j++) {
    $(".inner-div").each(function () {
      typeRandom = Math.random() * 20; //get random number between 0 -20
      if (typeRandom <= 1) {
        //give the red box 5% to create
        $(this).append("<div class='inner-box red-box'></div>");
      } else if (typeRandom <= 4) {
        // give 15% to the golden to create
        $(this).append("<div class='inner-box golden-box'></div>");
      } else {
        // 80% for normal box to create
        $(this).append("<div class='inner-box normal-box'></div>");
      }
    });
  }
};
// this function check the collosion
//the logic that open interval that each
//loop catch the last cheldren in each div that contain the boxes
//as a colmun.
//and catch the circles fired
//then check  the postion of each circle and box
//anf if eny one if those is the same postion the twice will removed
//circle by remove function
//boxes by our plaguin distroy if you are no longer read it please read it .

function MyFNToCheck() {
  var flag = 0; //thhis flag if turn to 1 that refere to the is end
  var checker = setInterval(function () {
    $(".inner-div :last-child").each(function () {
      //catching the last child boxe in each "inner-div" AS we show before
      var temp = this; // to catch this before inter anther scope
      //check for arrive contant div to botton   lose
      if (
        $(temp).offset().top - 886 > 0 &&
        $(temp).offset().top - 886 < 40 &&
        flag == 0
      ) {
        //chech if any box
        //reach to the botton of the game
        clearInterval(checker); //stop the checker interval
        user_lose(); //call the function that tell the user he lose
        flag = 1; //turn the flag to 1 to avoid repeting anther time
      } //end if check for the is lose
      $(".circle").each(function () {
        //catching the circles fireing

        //collosion if statments
        //chech for the herzintal axces collosion
        if (
          $(this).offset().left >= $(temp).offset().left - 5 &&
          $(this).offset().left <= $(temp).offset().left + 45
        ) {
          // chech for the virtecal axces collosion
          if (
            $(this).offset().top >= $(temp).offset().top - 5 &&
            $(this).offset().top <= $(temp).offset().top + 45
          ) {
            // if inter here that mean that one circle (this) and one box (temp) in the postion
            $(this).remove(); // removing the circle fired and catched
            $(temp).distroy(); // call the pliguan distroy dor the box catched
          }
        } //end collosion if
      }); //end for loop by each for circles
    }); //end for loop by each for last children  for inner-div
  }, 5); //end the checker interval
} //end check function

function creating_circle() {
  // x is position of any click
  var circle_clone, x;
  //cricle that will create while clike
  var circl_elment = $("<div></div>");
  //style of circle
  circl_elment.addClass("circle");
  //when click at any position circleis create
  $(".content").on("click", function (event) {
    x = event.originalEvent.offsetX; // get the X from event to find the postion that the circle will fired from
    console.log(x);
    circle_clone = circl_elment.clone(); //create copy  to firing
    circle_clone.css("left", x).css("top", "650px"); // to start from the botton
    $(this).append(circle_clone); //intering in the web page
    circle_clone.animate({ top: "-5px" }, 1000, function () {
      $(this).remove();
    });
    //animate  to move the circle from the botton to top and if no removed before arrive it removed itselve
  }); //end the on click function aver mouse

  $(".content").on("mousemove", function (event) {
    //moving the box-score by mouse moving
    console.log("eventstsfstftss ,,m ,  ", event.originalEvent);
    msg = event.originalEvent.offsetX; //-440 to modfiy the width of window
    $("#box_scor").animate(
      {
        //move the box to the postion that mouse moved to
        left: msg,
      },
      1,
    ); //1 to be spped response
  }); //movement
} //end function the createcircle
//sheck for game mode

//function to passang the gameMode that the user selected
var gameMode; //varibale to catch the gameMode selected from user
$(".easy_mode").on("click", function () {
  localStorage.setItem("gameMode", "linear"); //if user click on easy button set  value linear in variable gameMode
  $("#gameMode").text("Easy Mode"); //catch the text in the next page and change the value to easy Mode
});
$(".normal_mode").on("click", function () {
  localStorage.setItem("gameMode", "swing"); //if user click on normal button set  value swing in variable gameMode
  $("#gameMode").text("Normal Mode"); //catch the text in the next page and change the value to normal Mode
});
