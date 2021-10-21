$(function () {
    var gameTime;    //variable to make the timer changable acourding to game mode
    var gameMode=localStorage.getItem("gameMode"); ///catch the item that the user select 
        if(gameMode=="linear")      
            {
                $("#gameMode").text("Easy Mode"); //if linear change the variable on text in tha game page to gameMode
                gameTime=7000;                      //change the speed of the game
                $(".clock").text("121");            //change the timer of each gameMode
            }
        else
        {
            $("#gameMode").text("Normal Mode");
            gameTime=1000;
            $(".clock").text("62");

        }

        $(".counter .score_val").val(counter); //updating the value in the counter une the starting game by 0

        $(".pause").on("click", function () {   // function to pausing the game when the user want but
                                                // it under testing and not arrive to the beast status
                $(".pause_img").hide();
                $('.stop_img').show();
                alert("game paused");
                $('.stop_img').hide(1000);
                $(".pause_img").show(1000);
         });
  
         $('.btn_start').on('click', function () { //start gaming condition
        
            name = $('.yourName input').val(); //that name to carry user name 
            if (name) { // tocheck if textfeild empty or not 
             $('.yourName input').addClass("n");// add attribute with class n 
            $(this).hide();
            $('.outer_content').fadeIn(4000); // to appear outer_content of game 
            // Timer
            setInterval(doUpdate, 1000); 
            create_boxes();
            MyFNToCheck();
            $(".perent").animate({
                'top': "+=560px"
            },80000,gameMode);
            creating_circle();
        }// end start btn if
        else {
            $(".modal").css('display', "block"); // model alert of checking name
            // When the user clicks on <span> (x), close the modal
            $(".close").on("click", function () { // to close model alert 
                $(".modal").css('display', "none");
            });
        }
    });
    })//load