 counter =0;  //to inshalize the score in each game

$.fn.extend({
    //distroy function 
        //check the type of ths boxes 
                //and acourding to his type i check again recarevely untill  
                //reach to boxes that not neet to check more 
                //in this level it remove those boxes .
    distroy:function(num){   //num pramater as a flag to the box if it is sent 
                            //from anther box shotted.
                                        //the logic
                            //with no prameter ----->  this box shotted
                            //with number 1 ------> this box come from right
                            //with number 2 ------> this box come from left
                            //with number 3 ------> this box come from up
                            //with number 4 ------> this box come from dwon

                if($(this).hasClass("red-box")==true)//check if this box red box
                {
                    var test = $(this).offset().top; //to store the offset of (this) 
                                                       // becouse we wiil inter new scope 
                    if(num!=2){  // sure that box not from left 
                                // to avoid inter non-invanite loop 
                    $(this).parent().prev().children().each(function(){
                        if($(this).offset().top==test )
                                 {
                                     

                                     $(this).distroy(1);
                                     return;
                                 }
                    });
                }
                if(num!=1)     // sure that box not from right
                              // to avoid inter non-invanite loop
                {
                    $(this).parent().next().children().each(function(){
                        if($(this).offset().top==test )
                        {
                            
                            $(this).distroy(2);
                            return ;
                        }
                    });
                }    
                    if(num!=3 && $(this).next().hasClass("inner-box"))  // sure that box not from up 
                                                                        // to avoid inter non-invanite loop
                                                                        //sure the box under this exit.
                        $(this).next().distroy(4);  //call the same function to the box under
                    if(num!=4)               // sure that box not from under 
                                            // to avoid inter non-invanite loop
                        $(this).prev().distroy(3);          //call the same function to the box up
                    if(num==1||num==2) //from Right Or Left
                        {
                            $(this).css("visibility","hidden"); // becouse if we remove the design will shrank and i will modify this
                           
                         }else
                        $(this).remove();    //remove this box normally 
                            counter++;      //increase the counter by one becouse 
                                            //i am sure that is red box (we are in red  box scope)
                            $(".counter .score_val").val(counter);   //update the couner in the score bar in the page     
                         
                }else   //en if check of red box
                        // in tgis scope we are sure that this box not red box
                {
                    if((num==1||num==2 )&& ($(this).css("visibility")!="hidden" && $(this).hasClass("inner-box")))
                    {                                               //the same  problem hidden visibility above by check for that
                        $(this).css("visibility","hidden");
                        if($(this).hasClass("golden-box"))  //check for type if golden for increase the score by 3 
                             counter+=2;
                        counter++;
                        $(".counter .score_val").val(counter);   // updating
                    } // end chech for right and right
                    else{
                        if($(this).css("visibility")=="hidden" )//for modify the logic problem before
                        {
                            if(num==3)
                            {
                             $(this).remove();
                            }else
                            {
                                $(this).prev().distroy(3); // this will modify the logic before
                                $(this).remove();
                            }
                        }else{
                            $(this).remove();
                            if($(this).hasClass("golden-box")) //the same before
                            counter+=2;
                            counter++;
                            $(".counter .score_val").val(counter); // updateing
                        }      
                    }//end else end all statues to box 
                }
    }//end our pliguin distroy
    
});//end extend 