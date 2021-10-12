/* ############################ Start Location ############################ */
if (get_province_id != ''){
    var _province_id_value  = $('.res_province span[data-value='+ get_province_id +']').attr("text-value");


    if (get_province_id !='' && get_district_id !=''){
        $("input[name='province_id']").attr({value : get_province_id});
        $("input[name='proviceText']").attr({value : _province_id_value});
    } else {
        $("input[name='province_id']").attr({value : get_province_id});
        $("input[name='proviceText']").attr({value : _province_id_value});


        if(lang_name == 'th'){
            $('.location_display_text').html(`<span class="searchEllipsis"><i class="fas fa-map-marked-alt"></i>  ${$("input[name='proviceText']").val()}  ทั้งหมด  </span><i class="fas fa-chevron-down"></i>`);
        } else {
            $('.location_display_text').html(`<span class="searchEllipsis"><i class="fas fa-map-marked-alt"></i>  ${$("input[name='proviceText']").val()}  All  </span><i class="fas fa-chevron-down"></i>`);
        }

    }

    var district_data = '';
    var urlGetDistrict = urlDistrict + lang_name + '_'+ get_province_id + '.json';
    
    $.get(urlGetDistrict, function (data) {
        if (data.length > 0) {
            $.each(data, function (idx, obj) {
                
                if (get_district_id == obj.location_id){
                    
                    district_data += '<li><label><input type="checkbox" class="district_id" value="'+ obj.location_id +'" name="district_all" checked><span id="district'+obj.location_id+'">'+ obj.name +'</span></label></li>';
                    $( "input[name='district_id']" ).attr({value : obj.location_id});

                } else {

                    if(get_district_id == ''){
                        district_data += '<li><label><input type="checkbox" class="district_id" value="'+ obj.location_id +'" name="district_all"><span id="district'+obj.location_id+'">'+ obj.name +'</span></label></li>';
                    }else {
                        district_data += '<li><label><input type="checkbox" class="district_id" value="'+ obj.location_id +'" name="district_all" disabled="disabled"><span id="district'+obj.location_id+'">'+ obj.name +'</span></label></li>';
                    }

                }

            });
            
            $('.res_district_'+ get_province_id).html(district_data);
            //$('.res_district').html(district_data);

            if (get_district_id != ''){
                var text_district = $('#district'+get_district_id).text();
                $('.location_display_text').html(`<span class="searchEllipsis"><i class="fas fa-map-marked-alt"></i> ${text_district} </span><i class="fas fa-chevron-down"></i>`);
            }

        }else{
            $('.res_district_'+ get_province_id).html('<center>'+ text_not_found +'</center>');
        }

    });
    
}else{
    var district_select_all = '<label><input type="checkbox" name="Addprovince" class="district_all" value="'+ ' ' +'" name="district_all">'+ text_all +'</label><label><button type="button" name="Addok2">'+OKButtonText+'</button></label>';
    $('.selectAll2').html(district_select_all);
}


$(document).on("click",".isProvince", function(){
    /* add class active on ckick */
    $('.isProvince').removeClass('active');
    $(this).addClass('active');
    /* ########## ############ */

    var province_id = $(this).find('span').attr("data-value");
    var province_name = $(this).find('span').attr("text-value");
    
    $( "input[name='province_id']" ).attr({value : province_id});
    $( "input[name='district_id']" ).attr({value : ''});
    $( "input[name='proviceText']" ).attr({value : province_name});
    $( "input[name='province_all']" ).attr('checked', false);

    if(lang_name == 'th'){
        $('.location_display_text').html(`<span class="searchEllipsis"><i class="fas fa-map-marked-alt"></i> ${province_name}  ทั้งหมด  </span><i class="fas fa-chevron-down"></i>`);
    } else {
        $('.location_display_text').html(`<span class="searchEllipsis"><i class="fas fa-map-marked-alt"></i> ${province_name}  All  </span><i class="fas fa-chevron-down"></i>` );
    }

    var urlGetDistrict = urlDistrict + lang_name + '_'+ province_id + '.json';
    var district_select_all = '<label><input type="checkbox" name="Addprovince" class="district_all" value="'+ province_id +'" name="district_all">'+ text_all +'</label><label><button type="button" name="Addok2">'+OKButtonText+'</button></label>';
    var district_data = '';
    var dataDistrict = [];

    $.get(urlGetDistrict, function (data) {
        if (data.length > 0) {

            dataDistrict = shortThai(data)

            $.each(dataDistrict, function (idx, obj) {

                district_data += '<li><label><input type="checkbox" class="district_id" value="'+ obj.location_id +'" name="district_all"><span id="district'+obj.location_id+'"> '+ obj.name +'</span></label></li>';

            });
            
            
            $('.res_district_'+ province_id).html(district_data);
            $('.selectAll2').html(district_select_all);

        }else{

            $('.res_district_'+ province_id).html('<center>'+ text_not_found +'</center>');

        }

    }).fail(function() {

        $('.res_district_'+ province_id).html('<center>'+ text_not_found +'</center>');

    });
    
    $('.res_district_'+province_id).on('change', '.district_id', function(){
    
        var district_text = '';
        var count_distict = '';
        var amountSelectDistrict = 0;
        var district_id = [];
        var sub_district_id = $(this).val();

        $('.district_id').each(function () {
            if (this.checked) {
                $( ".district_all" ).attr('checked', false);
                $( "input[name='province_all']" ).attr('checked', false);
                count_distict += 1;
                district_id.push($(this).val());
            }else{
                $('.location_display_text').html(`<span class="searchEllipsis"><i class="fas fa-map-marked-alt"></i> ${text_location} </span><i class="fas fa-chevron-down"></i>`);
            }
        });

        $( "input[name='district_id']" ).attr({value : sub_district_id});

        amountSelectDistrict = count_distict.length;
        district_text = $('#district'+district_id[0]).text();

        if(amountSelectDistrict >= 2){
            $('.location_display_text').html(`<span class="searchEllipsis"><i class="fas fa-map-marked-alt"></i> ${district_text} ${parseInt(amountSelectOccu-1)}</span><i class="fas fa-chevron-down"></i>`);
        }else if(amountSelectDistrict === 1){
            $('.location_display_text').html(`<span class="searchEllipsis"><i class="fas fa-map-marked-alt"></i> ${district_text} </span><i class="fas fa-chevron-down"></i>`);
        }

        if(amountSelectDistrict === 1){
            $('.district_id:not(:checked)').prop('disabled', true);
        }else{
            $('.district_id').removeAttr('disabled');
        }

    });

});

$('#res_district').on('change', '.district_all', function(){
    if($(this).is(':checked')) {
        $('.district_id').attr('checked', false);
        $( "input[name='province_all']" ).attr('checked', false);

        if(lang_name == 'th'){
            $('.location_display_text').html(`<span class="searchEllipsis"><i class="fas fa-map-marked-alt"></i> $( "input[name='proviceText']" ).val() ทั้งหมด </span><i class="fas fa-chevron-down"></i>`);
        } else {
            $('.location_display_text').html(`<span class="searchEllipsis"><i class="fas fa-map-marked-alt"></i> $( "input[name='proviceText']" ).val() All </span><i class="fas fa-chevron-down"></i>`);
        }
        
        $( "input[name='district_id']" ).attr({value : ''});
        $('.district_id').removeAttr('disabled');

    }else{
        $('.location_display_text').html(`<span class="searchEllipsis"><i class="fas fa-map-marked-alt"></i> ${text_location} </span><i class="fas fa-chevron-down"></i>`);
    }

});

function shortThai(data){
    data.sort(function(a,b) {
        str1 = a.name.replace(/่/gi, "");
        str1 = str1.replace(/้/gi, "");
        str1 = str1.replace(/๊/gi, "");
        str1 = str1.replace(/๋/gi, "");
        str1 = str1.replace(/็/gi, "");
     
        str2 = b.name.replace(/่/gi, "");
        str2 = str2.replace(/้/gi, "");
        str2 = str2.replace(/๊/gi, "");
        str2 = str2.replace(/๋/gi, "");
        str2 = str2.replace(/็/gi, "");
        text1 = str1.substring(0, 1);
        text2 = str2.substring(0, 1);

        if(text1 == 'เ' || text1 == 'แ' || text1 ==  'ไ' || text1 == 'ใ' || text1 ==  'โ'){
            text1 = str1.substring(1,2) + str1;
        }else{
            text1 = str1;
        }
     
        if(text2 == 'เ' || text2 == 'แ' || text2 ==  'ไ' || text2 == 'ใ' || text2 ==  'โ'){
            text2 = str2.substring(1,2) + str2;
        }else{
            text2 = str2;
        }
     
        if(text1 < text2){
            return -1;
        }else if(text1 > text2){
            return 1;
        }else{
            return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
        }
    });

    return data
}

$( "input[name='province_all']" ).on('click', function(){
    if(this.checked) {
        var province_id = $("input[name='province_id']").val();
        $( "input[name='district_all']" ).attr('checked', false);
        $('.res_district_'+ province_id).html('');
        $('.isProvince').removeClass('active');
        $('.location_display_text').html(`<span class="searchEllipsis"><i class="fas fa-map-marked-alt"></i> ${text_location} </span><i class="fas fa-chevron-down"></i>`);
        $( "input[name='province_id']" ).attr({value : ''});
    }
});

$(document).on("change","input[name='Addprovince']",function(){
    if ($(this).is(':checked')) {
        var province_name = $( "input[name='proviceText']").val();
        $('.location_display_text').html(`<span class="searchEllipsis"><i class="fas fa-map-marked-alt"></i> ${province_name}  ทั้งหมด  </span><i class="fas fa-chevron-down"></i>`);
    } else{
        $( "input[name='proviceText']" ).attr({value : ''});
        $( "input[name='province_id']" ).attr({value : ''});
        $('.location_display_text').html(`<span class="searchEllipsis"><i class="fas fa-map-marked-alt"></i> ${text_location} </span><i class="fas fa-chevron-down"></i>`);
    }
});

$(document).on("click","button[name=Addok2]",function(){
const ddd = document.querySelectorAll('.selectAll2 button');
    for (let index = 0; index < ddd.length; index++) {
        ddd[index].closest('.dropdown-menu').classList.toggle('show')
    }
});

/* ############################ End Location ############################ */

/* ############################ Start Occupation ############################ */
if (get_occupation_id != ''){
    var _occupation_id_value  = $('.res_occupation span[data-value='+ get_occupation_id +']').attr("text-value");

    if (get_occupation_id !='' && get_occupation_sub_id !=''){
        $("input[name='occupation']").attr({value : get_occupation_id});
        $("input[name='occupationText']").attr({value : _occupation_id_value});
    } else {
        $("input[name='occupation']").attr({value : get_occupation_id});
        $("input[name='occupationText']").attr({value : _occupation_id_value});

        if(lang_name == 'th'){
            $('.occu_display_text').html('<span class="searchEllipsis"><i class="fas fa-briefcase"></i> ' + $( "input[name='occupationText']" ).val()+' ทั้งหมด' + '</span><i class="fas fa-chevron-down"></i>');
        } else {
            $('.occu_display_text').html('<span class="searchEllipsis"><i class="fas fa-briefcase"></i> ' + 'All '+$("input[name='occupationText']").val() + '</span><i class="fas fa-chevron-down"></i>');
        }

    }
    
    var occupation_data = '';

    $.ajax({
        type: 'get',
        url: urlSubOccupation + '/' + get_occupation_id + '/' + lang_id,
        dataType: 'json',
        success: function(data) {
            if (data.result.length > 0) {
                $.each(data.result, function (idx, obj) {

                    if (get_occupation_sub_id == obj.occupation_sub_id){
                        occupation_data += '<li><label><input type="checkbox" class="occupation_sub_id" value="'+ obj.occupation_sub_id +'" name="occupation_sub_id" checked><span id="subOccu'+obj.occupation_sub_id+'">'+ obj.name +'</span></label></li>';
                        $( "input[name='occupation_sub']" ).attr({value : obj.occupation_sub_id});
                    } else {
                        if(get_occupation_sub_id == ''){
                            occupation_data += '<li><label><input type="checkbox" class="occupation_sub_id" value="'+ obj.occupation_sub_id +'" name="sub_occu_all"><span id="subOccu'+obj.occupation_sub_id+'">'+ obj.name +'</span></label></li>';
                        }else {
                            occupation_data += '<li><label><input type="checkbox" class="occupation_sub_id" value="'+ obj.occupation_sub_id +'" name="sub_occu_all" disabled="disabled"><span id="subOccu'+obj.occupation_sub_id+'">'+ obj.name +'</span></label></li>';
                        }

                    }

                });

                $('.res_sub_occupation').html(occupation_data);

                if (get_occupation_sub_id != ''){
                    var text_subOccu = $('#subOccu'+get_occupation_sub_id).text();
                    $('.occu_display_text').html('<span class="searchEllipsis"><i class="fas fa-briefcase"></i> ' + text_subOccu + '</span>');
                }

            }else{
                $('.res_sub_occupation').html('<center>'+ text_not_found +'</center>');
            }
        }
    });

}else{
    var occupation_select_all = '<label><input  name="AddOcc" type="checkbox" value="'+ get_occupation_id +'" name="occupation_all">'+ text_all +'</label><button type="button" name="Addok">'+OKButtonText+'</button>';
    $('.selectAll').html(occupation_select_all);
}

$(document).on("click",".isOccupation",function(){
    console.log($(this))
    /* add class active on ckick */
    $('.isOccupation').removeClass('active');
    $(this).addClass('active');
    /* ########## ############ */
    var occupation_id = $(this).find('span').attr("data-value");
    var occupation_name = $(this).find('span').attr("text-value");

    $( "input[name='occupation']" ).attr({value : occupation_id});
    $( "input[name='occupation_sub']" ).attr({value : ''});
    $( "input[name='occupationText']").attr({value : occupation_name});
    $( "input[name='occupation_all']" ).attr('checked', false);

    if(lang_name == 'th'){
        $('.occu_display_text').html('<span class="searchEllipsis"><i class="fas fa-briefcase"></i> ' + $(this).find('span').text()+' ทั้งหมด' + '</span><i class="fas fa-chevron-down"></i>');
    } else {
        $('.occu_display_text').html('<span class="searchEllipsis"><i class="fas fa-briefcase"></i> ' + $(this).find('span').text()+'All ' + '</span><i class="fas fa-chevron-down"></i>');
    }

    var res_sub_occupation = '';
    var occupation_select_all = '<label><input name="AddOcc" type="checkbox"  value="'+ occupation_id +'" name="occupation_all">'+ text_all +'</label><button type="button" name="Addok">'+OKButtonText+'</button>';

    $.ajax({
        type: 'get',
        url: urlSubOccupation + '/' + occupation_id + '/' + lang_id,
        dataType: 'json',
        success: function(data) {
            if (data.result.length > 0) {
                $.each(data.result, function (idx, obj) {

                    res_sub_occupation += '<li><label><input type="checkbox" class="occupation_sub_id" value="'+ obj.occupation_sub_id +'" name="occupation_sub_id[]"><span id="subOccu'+obj.occupation_sub_id+'">'+ obj.name +'</span></label></li>';

                });

                $('.res_sub_occupation_'+occupation_id).html(res_sub_occupation);
                $('.selectAll').html(occupation_select_all);

            }
            $( "input[name='sub_occu_all']" ).attr('checked', true);
        }
    });

    $('.res_sub_occupation_'+occupation_id).on('change', '.occupation_sub_id', function(){
        var sub_occu_text = '';
        var count_subOccu = '';
        var amountSelectOccu = 0;
        var occupation_sub_id = [];
        var sub_occupation_id = $(this).val();
        
        $('.occupation_sub_id').each(function () {
            if (this.checked) {
                $('.sub_occu_all').attr('checked', false);
                $( "input[name='occupation_all']" ).attr('checked', false);
                count_subOccu += 1;
                occupation_sub_id.push($(this).val());
            }else {
                $('.occu_display_text').html('<span class="searchEllipsis"><i class="fas fa-briefcase"></i> ' + text_job_category + '</span>');
            }
        });
        $( "input[name='occupation_sub']" ).attr({value : sub_occupation_id});
    
        amountSelectOccu = count_subOccu.length;
        sub_occu_text = $('#subOccu'+occupation_sub_id[0]).text();
        if(amountSelectOccu >= 2){
            $('.occu_display_text').html('<span class="searchEllipsis"><i class="fas fa-briefcase"></i> ' + sub_occu_text+' ... + '+parseInt(amountSelectOccu-1)+' '+text_more + '</span><i class="fas fa-chevron-down"></i>');
        }else if(amountSelectOccu === 1){
            $('.occu_display_text').html('<span class="searchEllipsis"><i class="fas fa-briefcase"></i> ' + sub_occu_text + '</span><i class="fas fa-chevron-down"></i>');
        }
        if(amountSelectOccu === 1){
            $('.occupation_sub_id:not(:checked)').prop('disabled', true);
        }else{
            $('.occupation_sub_id').removeAttr('disabled');
        }
    
    });
});

$('.res_sub_occupation').on('change', '.sub_occu_all', function(){
    if($(this).is(':checked')) {
        $('.occupation_sub_id').attr('checked', false);
        $( "input[name='occupation_all']" ).attr('checked', false);
        if(lang_name == 'th'){
            $('.occu_display_text').html('<span class="searchEllipsis"><i class="fas fa-briefcase"></i> ' + $( "input[name='occupationText']" ).val()+' ทั้งหมด' + '</span><i class="fas fa-chevron-down"></i>');
        } else {
            $('.occu_display_text').html('<span class="searchEllipsis"><i class="fas fa-briefcase"></i> ' + 'All '+$("input[name='occupationText']").val() + '</span><i class="fas fa-chevron-down"></i>');
        }
        $( "input[name='occupation_sub']" ).attr({value : ''});
        $('.occupation_sub_id').removeAttr('disabled');
    }else{
        $('.occu_display_text').html('<span class="searchEllipsis"><i class="fas fa-briefcase"></i> ' + text_job_category + '</span><i class="fas fa-chevron-down"></i>');
    }

});

$( "input[name='occupation_all']" ).on('click', function(){
    if(this.checked) {
        $( "input[name='sub_occu_all']" ).attr('checked', false);
        $('.res_sub_occupation').html('');
        $('.isOccupation').removeClass('active');
        $('.occu_display_text').html('<span class="searchEllipsis"><i class="fas fa-briefcase"></i> ' + text_job_category + '</span><i class="fas fa-chevron-down"></i>');
        $( "input[name='occupation']" ).attr({value : ''});
    }
});


$(document).on("change","input[name='AddOcc']",function(){
    if ($(this).is(':checked')) {
        var occupation_name = $( "input[name='occupationText']").val();
        $('.occu_display_text').html('<span class="searchEllipsis"><i class="fas fa-briefcase"></i> ' + occupation_name +' ทั้งหมด' + '</span><i class="fas fa-chevron-down"></i>');
    } else {
        $( "input[name='occupationText']").attr({value : ''});
        $( "input[name='occupation']" ).attr({value : ''});
        $('.occu_display_text').html('<span class="searchEllipsis"><i class="fas fa-briefcase"></i> ' + text_job_category + '</span><div class="fas fa-chevron-down"></div>');
    }
});

$(document).on("click","button[name=Addok]",function(){
const ddd = document.querySelectorAll('.selectAll button');
    for (let index = 0; index < ddd.length; index++) {
        ddd[index].closest('.dropdown-menu').classList.toggle('show')
    }
});

/* ############################ End Occupation ############################ */
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
$(".salary_min a").click(function(e){
    var salary_min_value = ($(this).attr("data-value"));
    var add_salary_max = '';
    var i ;
    $('.salary_min .dropdown-item').removeClass('active-search');
    if(salary_min_value != ""){
        i = new Number(salary_min_value);
        $( "input[name='salary_min']" ).attr({value : salary_min_value});
        $(".salary_min:first-child").html(`<div><span class="fas fa-money-bill-wave jobbkk-famoney"></span> <span>  ${$(this).text()} </span></div><div><span class="fas fa-chevron-down"></span></div>`);
        $('.salary_min a[data-value='+ salary_min_value +']').addClass('active-search');
    }else {
        i = 5000;
        $( "input[name='salary_min']" ).attr({value : ""});
        $(".salary_min:first-child").html(`<div><span class="fas fa-money-bill-wave jobbkk-famoney"></span> <span>  ${$(this).text()}  </span></div><div><span class="fas fa-chevron-down"></span></div>`);
        add_salary_max += '<a class="dropdown-item" data-value=""> ' + text_maximum_salary + '</a>';
        $('.salary_min .dropdown-item').removeClass('active-search');
    }

    for (i; i <= 200000; i += 5000) {
        add_salary_max += '<a class="dropdown-item" data-value="' + i + '">' + numberWithCommas(i) + '</a>';
    }
    add_salary_max += '<a class="dropdown-item" data-value="200001">'+ text_more_than_salary + ' 200,000</a>';
    $('.job_salary_max').html(add_salary_max);
    $(".salary_min_close").removeClass("open");

    if(salary_min_value != ""){
        $(".salary_max:first-child").html(`<div><span class="fas fa-money-bill-wave jobbkk-famoney"></span><span> ${numberWithCommas(salary_min_value)}</span></div><div><span class="fas fa-chevron-down"></span></div>`);
        $( "input[name='salary_max']" ).attr({value : salary_min_value});
    }else {
        $(".salary_max:first-child").html(`<div><span class="fas fa-money-bill-wave jobbkk-famoney"></span><span> ${text_maximum_salary}</span></div><div><span class="fas fa-chevron-down"></span></div>`);
        $( "input[name='salary_max']" ).attr({value : ""});
    }



    $(".salary_max a").click(function(e){
        var salary_max_value = ($(this).attr("data-value"));
        $('.salary_max .dropdown-item').removeClass('active-search');
        if(salary_max_value != ""){

            if(salary_max_value == 200001){
                salary_max_text = "200,000+"
            }else{
                salary_max_text = numberWithCommas(salary_max_value)
            }
            
            $(".salary_max:first-child").html(`<div><span class="fas fa-money-bill-wave jobbkk-famoney"></span><span> ${salary_max_text}</span></div><div><span class="fas fa-chevron-down"></span></div>`);
            $( "input[name='salary_max']" ).attr({value : salary_max_value});
            $('.salary_max a[data-value='+ salary_max_value +']').addClass('active-search');
        }else {
            $(".salary_max:first-child").html('<div><span class="fas fa-money-bill-wave jobbkk-famoney"></span>' + text_maximum_salary + '</span></div><div><span class="fas fa-chevron-down"></span></div>');
            $( "input[name='salary_max']" ).attr({value : ""});
            $('.salary_max .dropdown-item').removeClass('active-search');
        }

        if($('#salary_max').val() == ""){
            $(".salary_min:first-child").html('<div><span class="fas fa-money-bill-wave jobbkk-famoney"></span> <span>'+ text_minimum_salary +'</span></div><div><span class="fas fa-chevron-down"></span></div>');
            $( "input[name='salary_min']" ).attr({value : ""});
        }
        else if ($('#salary_max').val() >= 5000 && $('#salary_min').val() == "") {
            $(".salary_min:first-child").html('<div><span class="fas fa-money-bill-wave jobbkk-famoney"></span> <span>5,000</span></div><div><span class="fas fa-chevron-down"></span></div>');
            $( "input[name='salary_min']" ).attr({value : "5000"});
        }
        $(".salary_max_close").removeClass("open");
    });

});

$(".salary_max a").click(function(e){
    var salary_max_value = ($(this).attr("data-value"));
    $('.salary_max .dropdown-item').removeClass('active-search');
    if(salary_max_value != ""){

        if(salary_max_value == 200001){
            salary_max_text = "200,000+"
        }else{
            salary_max_text = numberWithCommas(salary_max_value)
        }
        $(".salary_max:first-child").html('<div>' + ' <span>' + salary_max_text + '</span></div><div><span class="fas fa-chevron-down"></span></div>');
        $( "input[name='salary_max']" ).attr({value : salary_max_value});
        $('.salary_max a[data-value='+ salary_max_value +']').addClass('active-search');
    }else {
        $(".salary_max:first-child").html('<div>' + ' <span>' + text_maximum_salary + '</span></div><div><span class="fas fa-chevron-down"></span></div>');
        $( "input[name='salary_max']" ).attr({value : ""});
        $('.salary_max .dropdown-item').removeClass('active-search');
    }

    if($('#salary_max').val() == ""){
        $(".salary_min:first-child").html('<div><span class="fas fa-money-bill-wave jobbkk-famoney"></span> <span>'+ text_minimum_salary +'</span></div><div><span class="fas fa-chevron-down"></span></div>');
        $( "input[name='salary_min']" ).attr({value : ""});
    }
    else if ($('#salary_max').val() >= 5000 && $('#salary_min').val() == "") {
        $(".salary_min:first-child").html('<div><span class="fas fa-money-bill-wave jobbkk-famoney"></span> <span>5,000</span></div><div><span class="fas fa-chevron-down"></span></div>');
        $( "input[name='salary_min']" ).attr({value : "5000"});
    }
    $(".salary_max_close").removeClass("open");
});


$(".job-type a").click(function () {
    var job_type_id = ($(this).attr("data-value"));
    var job_type_name = ($(this).attr("text-value"));
    
    $('.job-type').removeClass('active-search');
    
    $("input[name='job_type']").attr({ value: job_type_id });
    $('.job-type a[data-value=' + job_type_id + ']').addClass('active-search');

    $(".job-type:first-child").html('<div><span class="fas fa-user-tie"></span> ' + '<span>' + job_type_name + '</span></div><div><span class="fas fa-chevron-down"></span></div>');
});

$(".career a").click(function () {
    var career_id = ($(this).attr("data-value"));
    var career_name = ($(this).attr("text-value"));

    $('.career').removeClass('active-search');
    
    $("input[name='career']").attr({ value: career_id });
    $('.career a[data-value=' + career_id + ']').addClass('active-search');

    $(".career:first-child").html('<div><span class="fas fa-layer-group"></span> ' + '<span>' + career_name + '</span></div><div><span class="fas fa-chevron-down"></span></div>');
});

$(".business a").click(function () {
    var business_id = ($(this).attr("data-value"));
    var business_name = ($(this).attr("text-value"));

    $('.business').removeClass('active-search');
    
    $("input[name='business']").attr({ value: business_id });
    $('.business a[data-value=' + business_id + ']').addClass('active-search');

    $(".business:first-child").html('<div><span class="fas fa-building"></span> ' + '<span>' + business_name + '</span></div><div><span class="fas fa-chevron-down"></span></div>');
});

// $('#isOther').on('click', '.other_work', function () {
//     var amountSelectOther = '';
//     var count_other = '';
//     var other_work_value = [];
//     var wfh = ($(this).attr("value"));

//     $('.other_work').each(function () {
//         if($(this).is(':checked')) {
//             count_other += 1;
//             other_work_value.push($(this).val());
//         }
//     });

//     amountSelectOther = count_other.length;
    
//     var isTextOtherFirst = $('#other_work_text_'+other_work_value[0]).text();
//     var textwfh = $('#wfh'+wfh).text();

//     if(amountSelectOther == 1){
//         $(".other-work:first-child").html('<div><span class="fab fa-ethereum"></span> ' + isTextOtherFirst + textwfh + '</span></div><div><span class="fab fa-ethereum"></span></div>');
//     }else if(amountSelectOther > 1) {
//         $(".other-work:first-child").html('<div><span class="fab fa-ethereum"></span> ' + isTextOtherFirst + textwfh + ' ... +'+ parseInt(amountSelectOther-1) +'</span></div><div><span class="fab fa-ethereum"></span></div>');
//     }else{
//         $(".other-work:first-child").html('<div><span class="fab fa-ethereum"></span> ' + text_other + '</span></div><div><span class="fab fa-ethereum"></span></div>');
//     }
    
// });

if(train_data != ''){
    let data = train_data
    let str = data.split(',');

    $('.transport-bts').removeClass('active-search');
    
    $("input[name='transport_id']").attr({ value: str[0] });
    $('.transport-bts a[data-value=' + str[0] + ']').addClass('active-search');

    $(".transport-bts:first-child").html('<div><span class="fa fa-bus"></span> ' + '<span>' + str[1] + '</span></div><div><span class="fas fa-chevron-down"></span></div>');
}

$(".transport-bts li").click(function () {
    var _transport_id = ($(this).attr("data-value"));
    var _transport_name = ($(this).attr("text-value"));
    // console.log(_transport_id + _transport_name);
    $('.transport-bts').removeClass('active-search');
    
    $("input[name='transport_id']").attr({ value: _transport_id });
    $('.transport-bts a[data-value=' + _transport_id + ']').addClass('active-search');

    $(".transport-bts:first-child").html('<div><span class="fa fa-bus"></span> ' + '<span>' + _transport_name + '</span></div><div><span class="fas fa-chevron-down"></span></div>');
});

$(document).on("change","input[name='Addtran']",function(){
    $("input[name='transport_id']").attr({ value: "" });
    $(".transport-bts:first-child").html('<div><span class="fa fa-bus"></span> ' + '<span>' + text_travel + '</span></div><div><span class="fas fa-chevron-down"></span></div>')
});

$(document).on("click","button[name=Addok3]",function(){
    const ddd = document.querySelectorAll('.btn_tran button');
        for (let index = 0; index < ddd.length; index++) {
            ddd[index].closest('.dropdown-menu').classList.toggle('show')
        }
});


$("input[type='checkbox']").on('change', function(evt) {
    var x = $('.bts_list')
    for (i = 0; i < x.length; i++) {
        if(this.checked == true) {

            if(x[i].checked == false){
                x[i].disabled = true;
            }else{
                x[i].disabled = false;
            }

        }else{
            x[i].disabled = false;
        }
    }
});

$("input[type='checkbox']").on('change', function(evt) {
    var x = $('.mrt_list')
    for (i = 0; i < x.length; i++) {
        if(this.checked == true) {

            if(x[i].checked == false){
                x[i].disabled = true;
            }else{
                x[i].disabled = false;
            }

        }else{
            x[i].disabled = false;
        }
    }
});

$("input[type='checkbox']").on('change', function(evt) {
    var x = $('.air_list')
    for (i = 0; i < x.length; i++) {
        if(this.checked == true) {

            if(x[i].checked == false){
                x[i].disabled = true;
            }else{
                x[i].disabled = false;
            }

        }else{
            x[i].disabled = false;
        }
    }
});

function Sortdata() {
    var value = $('#sort').val();
        $.ajax({
        type:"GET",
        url:urljobbkk,
        data: 'sort='+value,
          
        success:function (data) {
            $('.sort_urgent').fadeOut(800, function(){
                $('.sort_urgent').fadeIn().delay(2000);
            });
        }
        
    });
}

$(document).on('click', '.dropdown-menu-right span,.addOK label:first', function (e) {
    e.stopPropagation();
});

$('#resetForm').on('click', function () {
    $(this).closest('form').find("input[type=hidden],input[type=text], textarea").val("");

    // reset occupation
    $("input[name='occupation_all']").attr('checked', true);
    $("input[name='sub_occu_all']").attr('checked', false);
    $('.isOccupation').removeClass('active');
    $('.occu_display_text').html('<span class="searchEllipsis"><i class="fas fa-briefcase"></i> ' + text_job_category + '</span><div class="fas fa-chevron-down"></div>');
    $("input[name='occupation']").attr({ value: '' });
    $('#accordionExample').find('.collapse').removeClass('show');
    
    // reset province
    $("input[name='district_all']").attr('checked', false);
    $('.isProvince').removeClass('active');
    $('.location_display_text').html('<span class="searchEllipsis"><i class="fas fa-map-marked-alt"></i> ' + text_location + '</span><div class="fas fa-chevron-down"></div>');
    $("input[name='province_id']").attr({ value: '' });
    $('#accordionExample1').find('.collapse').removeClass('show');

    var add_salary_min = '';
    var job_type_text = '';
    var i = 5000;
    $("input[name='salary_min']").attr({ value: "" });
    $(".salary_min:first-child").html('<div><span class="fas fa-money-bill-wave jobbkk-famoney"></span><span>' + ' ' + text_minimum_salary + '</span></div><div><span class="fas fa-chevron-down"></span></div>');
    add_salary_min += '<li><a  data-value=""> ' + text_minimum_salary + '</a></li>';
    $('.salary_min').removeClass('active-search');

    $(".salary_max:first-child").html('<div><span class="fas fa-money-bill-wave"></span><span>' + ' ' + text_maximum_salary + '</span></div><div><span class="fas fa-chevron-down"></span></div>');
    $("input[name='salary_max']").attr({ value: "" });
    $('.salary_max').removeClass('active-search');

    $('.job-type').removeClass('active-search');
    job_type_text = text_job_type;
    $("input[name='job_type']").attr({ value: "" });

    $(".job-type:first-child").html(`<span class="searchEllipsis"><i class="fas fa-user-tie"></i> ${text_job_type} </span><i class="fas fa-chevron-down"></i>`);
    $(".jobbkk-format-work").removeClass("open");

    transport_text = text_travel;
    $("input[name='transport_id']").attr({ value: "" });
    $("input[name='keyword_type']").attr({ value: "3" });
    $('.transport-bts').removeClass('active-search');

    $(".transport-bts:first-child").html('<div><span class="fas fa-bus"></span> ' + '<span>' + transport_text + '</span></div><div><span class="fas fa-chevron-down"></span></div>');
    $(".jobbkk-vehicle").removeClass("open");

    $("input[type='checkbox']").attr('checked', false);

    career_text = text_career;
    $("input[name='career']").attr({ value: "" });

    $(".career:first-child").html('<div><span class="fas fa-layer-group"></span> ' + '<span>' + text_career + '</span></div><div><span class="fas fa-chevron-down"></span></div>');
    $(".career").removeClass("open");

    business_text = text_business;
    $("input[name='business']").attr({ value: "" });

    $(".business:first-child").html(`<span class="searchEllipsis"><i class="fas fa-building"></i> ${text_business} </span><i class="fas fa-chevron-down"></i>`);
    $(".business").removeClass("open");


    $(".other_work:first-child").html(`<span class="searchEllipsis"><i class="fab fa-ethereum"></i> ${text_other} </span><i class="fas fa-chevron-down"></i>`);
    $(".other_work").removeClass("open");

});