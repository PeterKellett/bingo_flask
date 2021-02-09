$(document).ready(function(){
    console.log("Document ready");
    // $(".flashes").fadeOut("slow");
    // screen size script
    
    var txt = "";
    txt += "Width: " + $("body").outerWidth() + "</br>";
    txt += "Height: " + $("body").outerHeight();
    $("#div1").html(txt);
    
   
    $('.badge').click(function(){
        //console.log("done" + $(this).attr('done'));
        var done = $(this).attr('done');
        if (done == 'true') {
            $(this).attr('done', 'false').addClass('bg-success');
        }
        else {
            $(this).attr('done', 'true').removeClass('bg-success');
            $('img').removeClass('green-border');
        }            
    });

    $('.outer-score').click(function() {
        $('img').removeClass('green-border');
    })


    var numbers_clicked = []; 
    var score = 0;  
    $('#score').html(score); 
    $('img').click(function() {
        horizontal_done = $('.horizontal').attr('done');
        vertical_done = $('.vertical').attr('done');
        right_diagonal_done = $('.right_diagonal').attr('done');
        left_diagonal_done = $('.left_diagonal').attr('done');
        four_corners_done = $('.four_corners').attr('done');
        cross_done = $('.cross').attr('done');
        bingo_done = $('.bingo').attr('done');   
        //console.log("horizontal=" + horizontal_done)
        row_0 = [];
        row_1 = [];
        row_2 = [];
        row_3 = [];
        col_0 = [];
        col_1 = [];
        col_2 = [];
        col_3 = [];
        right_diagonal = [];
        left_diagonal = [];
        four_corners = [];
        cross = [];
        var clicked_before = $(this).attr("clicked");
        var image_clicked = $(this).attr("id");
        id = image_clicked.split("_");
        console.log('id=' + id); 
        x = parseInt(id[0]);
        y = parseInt(id[1]);
        id = [x, y];
        //console.log("id=" + id); 
        //console.log("y=" + y); 

        if (clicked_before == 'true') {
            $(this).attr('clicked', false).addClass('red-border').fadeTo(250, 1.0);
            for (i = 0; i < numbers_clicked.length; i++) {
                //console.log(numbers_clicked[i]);
                if (numbers_clicked[i][0] == x && numbers_clicked[i][1] == y) {
                    numbers_clicked.splice([i], 1);
                    $('img').removeClass('green-border');
                }
            }                   
        }
        else {
            $(this).attr('clicked', true).removeClass('red-border').fadeTo(500, 0.4);
            numbers_clicked.push(id);
            //console.log(numbers_clicked);
        }

        numbers_clicked.forEach(check_card);
        
        function check_card(value, index, array) {
            //Row 0                   
            if (value[1] == 0) {
                row_0.push(1);
                if (value[0] == 0) {
                    left_diagonal.push(1);
                    four_corners.push(1);
                    cross.push(1);
                }
                if (value[0] == 3) {
                    right_diagonal.push(1);
                    four_corners.push(1);
                    cross.push(1);
                }
            }
            //Row 1                   
            if (value[1] == 1) {
                row_1.push(1);
                if (value[0] == 1) {
                    left_diagonal.push(1);
                    cross.push(1);
                }
                if (value[0] == 2) {
                    right_diagonal.push(1);
                    cross.push(1);
                }
            }
            //Row 2                   
            if (value[1] == 2) {
                row_2.push(1);
                if (value[0] == 2) {
                    left_diagonal.push(1);
                    cross.push(1);
                }
                if (value[0] == 1) {
                    right_diagonal.push(1);
                    cross.push(1);
                }
            }
            //Row 3                  
            if (value[1] == 3) {
                row_3.push(1);
                if (value[0] == 3) {
                    left_diagonal.push(1);
                    four_corners.push(1);
                    cross.push(1);
                }
                if (value[0] == 0) {
                    right_diagonal.push(1);
                    four_corners.push(1);
                    cross.push(1);
                }
            }
            
            //Column 0                   
            if (value[0] == 0) {
                col_0.push(1);
            }
            //Column 1                  
            if (value[0] == 1) {
                col_1.push(1);
            }    
            //Column 2                  
            if (value[0] == 2) {
                col_2.push(1);
            }                                
            //Column 3                  
            if (value[0] == 3) {
                col_3.push(1);
            } 
            
            //Check for full sets
            if (horizontal_done != 'true') {
                if (row_0.length == 4) {
                    $('#0_0').addClass('green-border');
                    $('#1_0').addClass('green-border');
                    $('#2_0').addClass('green-border');
                    $('#3_0').addClass('green-border');
                    $('#horizontal').show();
                    score += 1;
                    $('#score').html(score);
                    $('.horizontal').attr('done', 'true').removeClass('bg-success');
                }                        
                if (row_1.length == 4) {
                    $('#0_1').addClass('green-border');
                    $('#1_1').addClass('green-border');
                    $('#2_1').addClass('green-border');
                    $('#3_1').addClass('green-border');
                    $('#horizontal').show();
                    score += 1;
                    $('#score').html(score);
                    $('.horizontal').attr('done', 'true').removeClass('bg-success');
                }                        
                if (row_2.length == 4) {
                    $('#0_2').addClass('green-border');
                    $('#1_2').addClass('green-border');
                    $('#2_2').addClass('green-border');
                    $('#3_2').addClass('green-border');
                    $('#horizontal').show();
                    score += 1;
                    $('#score').html(score);
                    $('.horizontal').attr('done', 'true').removeClass('bg-success');
                }
                if (row_3.length == 4) {
                    $('#0_3').addClass('green-border');
                    $('#1_3').addClass('green-border');
                    $('#2_3').addClass('green-border');
                    $('#3_3').addClass('green-border');
                    $('#horizontal').show();
                    score += 1;
                    $('#score').html(score);
                    $('.horizontal').attr('done', 'true').removeClass('bg-success');
                }
            }
                
            if (vertical_done != 'true') {
                if (col_0.length == 4) {
                    $('#0_0').addClass('green-border');
                    $('#0_1').addClass('green-border');
                    $('#0_2').addClass('green-border');
                    $('#0_3').addClass('green-border');
                    $('#vertical').show();
                    score += 1;
                    $('#score').html(score);
                    $('.vertical').attr('done', 'true').removeClass('bg-success');
                }                    
                if (col_1.length == 4) {
                    $('#1_0').addClass('green-border');
                    $('#1_1').addClass('green-border');
                    $('#1_2').addClass('green-border');
                    $('#1_3').addClass('green-border');
                    $('#vertical').show();
                    score += 1;
                    $('#score').html(score);
                    $('.vertical').attr('done', 'true').removeClass('bg-success');
                }
                if (col_2.length == 4) {
                    $('#2_0').addClass('green-border');
                    $('#2_1').addClass('green-border');
                    $('#2_2').addClass('green-border');
                    $('#2_3').addClass('green-border');
                    $('#vertical').show();
                    score += 1;
                    $('#score').html(score);
                    $('.vertical').attr('done', 'true').removeClass('bg-success');
                }
                if (col_3.length == 4) {
                    $('#3_0').addClass('green-border');
                    $('#3_1').addClass('green-border');
                    $('#3_2').addClass('green-border');
                    $('#3_3').addClass('green-border');
                    $('#vertical').show();
                    score += 1;
                    $('#score').html(score);
                    $('.vertical').attr('done', 'true').removeClass('bg-success');
                }
            }
                                
            if (left_diagonal_done != 'true') {
                if (left_diagonal.length == 4) {
                    $('#0_0').addClass('green-border');
                    $('#1_1').addClass('green-border');
                    $('#2_2').addClass('green-border');
                    $('#3_3').addClass('green-border');
                    $('#left_diagonal').show();
                    score += 3;
                    $('#score').html(score);
                    $('.left_diagonal').attr('done', 'true').removeClass('bg-success');
                }   
            }
            
            if (right_diagonal_done != 'true') {
                if (right_diagonal.length == 4) {
                    $('#3_0').addClass('green-border');
                    $('#2_1').addClass('green-border');
                    $('#1_2').addClass('green-border');
                    $('#0_3').addClass('green-border');
                    $('#right_diagonal').show();
                    score += 3;
                    $('#score').html(score);
                    $('.right_diagonal').attr('done', 'true').removeClass('bg-success');
                }
            }
            
            if (four_corners_done != 'true') {
                if (four_corners.length == 4) {
                    $('#0_0').addClass('green-border');
                    $('#0_3').addClass('green-border');
                    $('#3_0').addClass('green-border');
                    $('#3_3').addClass('green-border');
                    $('#four_corners').show();
                    score += 3;
                    $('#score').html(score);
                    $('.four_corners').attr('done', 'true').removeClass('bg-success');

                }
            }

            if (cross_done != 'true') {
                if (cross.length == 8) {
                    $('#0_0').addClass('green-border');
                    $('#1_1').addClass('green-border');
                    $('#2_2').addClass('green-border');
                    $('#3_3').addClass('green-border');
                    $('#3_0').addClass('green-border');
                    $('#2_1').addClass('green-border');
                    $('#1_2').addClass('green-border');
                    $('#0_3').addClass('green-border');
                    $('#cross').show();
                    score += 5;
                    $('#score').html(score);
                    $('.cross').attr('done', 'true').removeClass('bg-success');
                }
            }

            if (bingo_done != 'true') {
                console.log("numbers_clicked=" + numbers_clicked.length)
                if (numbers_clicked.length == 16) {
                    $('img').addClass('green-border');
                    $('#bingo').show();
                    score += 6;
                    $('#score').html(score);
                    $('.bingo').attr('done', 'true').removeClass('bg-success');
                    bingo_done = 'true';
                }
            }
            //console.log("score=" + score)                   
            //console.log("row_0=" + row_0);
            //console.log("row_1=" + row_1);
            //console.log("row_2=" + row_2);
            //console.log("row_3=" + row_3);
            //console.log("col_0=" + col_0);
            //console.log("col_1=" + col_1);
            //console.log("col_2=" + col_2);
            //console.log("col_3=" + col_3);
            //console.log("right_diagonal=" + right_diagonal);
            //console.log("left_diagonal=" + left_diagonal);
            //console.log("four_corners=" + four_corners);
            //console.log("cross=" + cross);            
        }
    })
});
    