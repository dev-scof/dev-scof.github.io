// SOOJILE 포멧 참고해서 만들기
$(document).ready(function(){
   // index.html 로드가 완료되면 자동으로 함수를 호출합니다.
   show_elements();
   

});

function show_elements(){
    // 1. ~내부 html 태그를 모두 삭제합니다.
    // $('.col-xs-12').empty()


    // 2. 서버에 1) GET 방식으로, 2) /라는 주소로 elements를 요청합니다.
    $.ajax({
        type:"GET",
        url:"/res",
        success: function(response){
            if(response["result"]=="success"){
                let resp = response["res"];
                var res = {}; // key, value를 저장하는 변수
                for(let i=0; i<resp.length; i++){
                    res[resp[i]["key"]]=resp[i]["value"];
                }
                Home_info(res);
                Personal_Info(res);
                Vision_Info(res);
            }
            else{
                alert("새로고침(F5)를 눌러주세요.");
            }

        }
    });
}

// Home Information 데이터 채우기
function Home_info(res){
    /*author*/
    $('[data-id="home"] .title-block h2').text(res["scof"]);
    $('.header-titles h2').text(res['scof']);
    $('.header-titles h4').text(res['position']);
    /*rotation_items*/
    
}

// Personal Information 데이터 채우기
function Personal_Info(res){
    // my_intro
    my_intro = $('[data-id="about-me"] .row:first p');
    my_intro.empty(); // 내부 elem 삭제
    my_intro.text(res["About_info"]); // elem 삽입

    // info-list
    info_list = ["Age", "Address", "E-mail", "Phone"];
    info_list_sel = $('.info-list ul');
    info_list_sel.empty(); // 내부 elem 삭제
    
    for(let i=0; i<info_list.length; i++){
        title=$('<span class="title"></span>').text(info_list[i]);
        value=$('<span class="value"></span>').text(res[info_list[i]]);
        info_list_sel.append($('<li></li>').append(title, value));
        
    }
}

// Vision 데이터 채우기
function Vision_Info(res){
    // My Vision
    my_vision = $('[data-id="services"]');
    my_vision.empty();
    my_vision.append("<h3>My <span>Vision</span></h3>");

    // vision_info
    vision_info_sel = $('[data-id="vision_info"]');
    vision_info_sel.empty();
    
    let base_div = $('<div class="col-xs-12 col-sm-6"></div>')
    .append($('<div class="col-inner"></div>'));

    let info_list = $('<div class="info-list-w-icon"></div>');

    let info_prev = "vision_info_";
    
    for(let i=0; i<4; i++){
        ci_icon=$('<div class="ci-icon"></div>')
        .append($('<i></i>').addClass(res[info_prev+i][2]));
        
        ci_text=$('<div class="ci-text"></div>');
        ci_text.append($('<h4></h4>').text(res[info_prev+i][0]));
        ci_text.append($('<p></p>').text(res[info_prev+i][1]));

        // 내부 html 생성하기
        info_block = $('<div class="info-block-w-icon"></div>');
        info_block.append(ci_icon);
        info_block.append(ci_text);

        info_list.append(info_block);

        if(i%2==1){
            base_div.append(info_list);

            vision_info_sel.append(base_div);
            
            info_list=$('<div class="info-list-w-icon"></div>');
            base_div = $('<div class="col-xs-12 col-sm-6"></div>')
            .append($('<div class="col-inner"></div>'));

        }
        
    }
    
}