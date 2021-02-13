$(document).ready(function(){
    console.log("Document ready");
    $('.outer-div').css("background-image", "url('https://res.cloudinary.com/dfboxofas/image/upload/v1612954661/bingo/IMG_20200817_201743_yfl4xy.jpg')");
    // $(".flashes").fadeOut("slow");
    // screen size script    
    var width = $("body").innerWidth();
    var height = $(window).innerHeight();
    console.log(height);
    console.log(width);
    
    var height = $(".outer-div").outerWidth();
    $('.outer-div').height(height);
   var innerDivHeight = height / 5
    var innerDivWidth = ((height - 18) / 5)
    $('.inner-div').width(innerDivWidth).height(innerDivWidth);
    console.log(height);
    console.log(innerDivWidth);
    
   
    $('.badge').click(function(){
        //console.log("done" + $(this).attr('done'));
        var done = $(this).attr('done');
        if (done == 'true') {
            $(this).attr('done', 'false').addClass('bg-success').removeClass('text-dark');
        }
        else {
            $(this).attr('done', 'true').removeClass('bg-success').addClass('text-dark');
            $('.inner-col').removeClass('green-border');
        }            
    });

    $('.outer-score').click(function() {
        $('.green-dot').hide();
        $('.badge').removeClass('badge-border');
    })


    var numbers_clicked = []; 
    var score = 0;  
    $('#score').html(score); 
    $('img').click(function() {
        $('.badge').removeClass('badge-border');
        $('.green-dot').hide();
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
        row_4 = [];
        col_0 = [];
        col_1 = [];
        col_2 = [];
        col_3 = [];
        col_4 = [];
        right_diagonal = [];
        left_diagonal = [];
        four_corners = [];
        cross = [];
        var clicked_before = $(this).attr("clicked_before");
        var image_clicked = $(this).attr("id");
        id = image_clicked.split("_");
        //console.log('id=' + id); 
        x = parseInt(id[0]);
        y = parseInt(id[1]);
        id = [x, y];
        //console.log("id=" + id); 
        //console.log("y=" + y); 

        if (clicked_before == 'true') {
            $(this).attr('clicked_before', false).fadeTo(0, 1.0);
            for (i = 0; i < numbers_clicked.length; i++) {
                //console.log(numbers_clicked[i]);
                if (numbers_clicked[i][0] == x && numbers_clicked[i][1] == y) {
                    numbers_clicked.splice([i], 1);
                    $('.green-dot').hide();
                }
            }                   
        }
        else {
            $(this).attr('clicked_before', true).fadeTo(0, 0);
            numbers_clicked.push(id);
            //$(this).next().removeClass('d-none').show();            
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
                if (value[0] == 4) {
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
                if (value[0] == 3) {
                    right_diagonal.push(1);
                    cross.push(1);
                }
            }
            //Row 2                   
            if (value[1] == 2) {
                row_2.push(1);
                if (value[0] == 2) {
                    left_diagonal.push(1);
                    right_diagonal.push(1);
                    cross.push(1);
                }
            }
            //Row 3                  
            if (value[1] == 3) {
                row_3.push(1);
                if (value[0] == 3) {
                    left_diagonal.push(1);
                    cross.push(1);
                }
                if (value[0] == 1) {
                    right_diagonal.push(1);
                    cross.push(1);
                }
            }
            //row 4
            if (value[1] == 4) {
                row_4.push(1);
                if (value[0] == 4) {
                    left_diagonal.push(1);
                    cross.push(1);
                    four_corners.push(1);
                }
                if (value[0] == 0) {
                    right_diagonal.push(1);
                    cross.push(1);
                    four_corners.push(1);
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
            //Column 4                  
            if (value[0] == 4) {
                col_4.push(1);
            } 
            //Check for full sets
            if (horizontal_done != 'true') {
                if (row_0.length == 5) {
                    $('#gd_0_0').show();
                    $('#gd_1_0').show();
                    $('#gd_2_0').show();
                    $('#gd_3_0').show();
                    $('#gd_4_0').show();
                    $('#horizontal').show();
                    score += 1;
                    $('#score').html(score);
                    $('.horizontal').attr('done', 'true').removeClass('bg-success').addClass('badge-border text-dark');
                    //window.alert("sometext");
                }                        
                if (row_1.length == 5) {
                    $('#gd_0_1').show();
                    $('#gd_1_1').show();
                    $('#gd_2_1').show();
                    $('#gd_3_1').show();
                    $('#gd_4_1').show();
                    $('#horizontal').show();
                    score += 1;
                    $('#score').html(score);
                    $('.horizontal').attr('done', 'true').removeClass('bg-success').addClass('badge-border text-dark');
                }                        
                if (row_2.length == 5) {
                    $('#gd_0_2').show();
                    $('#gd_1_2').show();
                    $('#gd_2_2').show();
                    $('#gd_3_2').show();
                    $('#gd_4_2').show();
                    $('#horizontal').show();
                    score += 1;
                    $('#score').html(score);
                    $('.horizontal').attr('done', 'true').removeClass('bg-success').addClass('badge-border text-dark');
                }
                if (row_3.length == 5) {
                    $('#gd_0_3').show();
                    $('#gd_1_3').show();
                    $('#gd_2_3').show();
                    $('#gd_3_3').show();
                    $('#gd_4_3').show();
                    $('#horizontal').show();
                    score += 1;
                    $('#score').html(score);
                    $('.horizontal').attr('done', 'true').removeClass('bg-success').addClass('badge-border text-dark');
                }
                if (row_4.length == 5) {
                    $('#gd_0_4').show();
                    $('#gd_1_4').show();
                    $('#gd_2_4').show();
                    $('#gd_3_4').show();
                    $('#gd_4_4').show();
                    $('#horizontal').show();
                    score += 1;
                    $('#score').html(score);
                    $('.horizontal').attr('done', 'true').removeClass('bg-success').addClass('badge-border text-dark');
                }
            }
                
            if (vertical_done != 'true') {
                if (col_0.length == 5) {
                    $('#gd_0_0').show();
                    $('#gd_0_1').show();
                    $('#gd_0_2').show();
                    $('#gd_0_3').show();
                    $('#gd_0_4').show();
                    $('#vertical').show();
                    score += 1;
                    $('#score').html(score);
                    $('.vertical').attr('done', 'true').removeClass('bg-success').addClass('badge-border text-dark');
                }                    
                if (col_1.length == 5) {
                    $('#gd_1_0').show();
                    $('#gd_1_1').show();
                    $('#gd_1_2').show();
                    $('#gd_1_3').show();
                    $('#gd_1_4').show();
                    $('#vertical').show();
                    score += 1;
                    $('#score').html(score);
                    $('.vertical').attr('done', 'true').removeClass('bg-success').addClass('badge-border text-dark');
                }
                if (col_2.length == 5) {
                    $('#gd_2_0').show();
                    $('#gd_2_1').show();
                    $('#gd_2_2').show();
                    $('#gd_2_3').show();
                    $('#gd_2_4').show();
                    $('#vertical').show();
                    score += 1;
                    $('#score').html(score);
                    $('.vertical').attr('done', 'true').removeClass('bg-success').addClass('badge-border text-dark');
                }
                if (col_3.length == 5) {
                    $('#gd_3_0').show();
                    $('#gd_3_1').show();
                    $('#gd_3_2').show();
                    $('#gd_3_3').show();
                    $('#gd_3_4').show();
                    $('#vertical').show();
                    score += 1;
                    $('#score').html(score);
                    $('.vertical').attr('done', 'true').removeClass('bg-success').addClass('badge-border text-dark');
                }
                if (col_4.length == 5) {
                    $('#gd_4_0').show();
                    $('#gd_4_1').show();
                    $('#gd_4_2').show();
                    $('#gd_4_3').show();
                    $('#gd_4_4').show();
                    $('#vertical').show();
                    score += 1;
                    $('#score').html(score);
                    $('.vertical').attr('done', 'true').removeClass('bg-success').addClass('badge-border text-dark');
                }
            }
                                
            if (left_diagonal_done != 'true') {
                if (left_diagonal.length == 5) {
                    $('#gd_0_0').show();
                    $('#gd_1_1').show();
                    $('#gd_2_2').show();
                    $('#gd_3_3').show();
                    $('#gd_4_4').show();
                    $('#left_diagonal').show();
                    score += 3;
                    $('#score').html(score);
                    $('.left_diagonal').attr('done', 'true').removeClass('bg-success').addClass('badge-border text-dark');
                }   
            }
            
            if (right_diagonal_done != 'true') {
                if (right_diagonal.length == 5) {
                    $('#gd_4_0').show();
                    $('#gd_3_1').show();
                    $('#gd_2_2').show();
                    $('#gd_1_3').show();
                    $('#gd_0_4').show();
                    $('#right_diagonal').show();
                    score += 3;
                    $('#score').html(score);
                    $('.right_diagonal').attr('done', 'true').removeClass('bg-success').addClass('badge-border text-dark');
                }
            }
            
            if (four_corners_done != 'true') {
                if (four_corners.length == 4) {
                    $('#gd_0_0').show();
                    $('#gd_0_4').show();
                    $('#gd_4_0').show();
                    $('#gd_4_4').show();
                    $('#four_corners').show();
                    score += 3;
                    $('#score').html(score);
                    $('.four_corners').attr('done', 'true').removeClass('bg-success').addClass('badge-border text-dark');

                }
            }

            if (cross_done != 'true') {
                if (cross.length == 9) {
                    $('#gd_0_0').show();
                    $('#gd_1_1').show();
                    $('#gd_2_2').show();
                    $('#gd_3_3').show();
                    $('#gd_4_4').show();
                    $('#gd_4_0').show();
                    $('#gd_3_1').show();
                    $('#gd_1_3').show();
                    $('#gd_0_4').show();
                    $('#cross').show();
                    score += 5;
                    $('#score').html(score);
                    $('.cross').attr('done', 'true').removeClass('bg-success').addClass('badge-border text-dark');
                }
            }

            if (bingo_done != 'true') {
                //console.log("numbers_clicked=" + numbers_clicked.length)
                if (numbers_clicked.length == 25) {
                    $('.green-dot').show();
                    $('#bingo').show();
                    score += 6;
                    $('#score').html(score);
                    $('.bingo').attr('done', 'true').removeClass('bg-success').addClass('badge-border text-dark');
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
    