$(document).ready(function() {
   
    $('.experience-btn').click(function(){
        $('.experience-btn').addClass('active');
        $('.education-btn').removeClass('active');
        $('.skills-btn').removeClass('active');
        $('.card-experience').show();
        $('.education').hide();
        $('.skills').hide();
    })

    $('.education-btn').click(function(){
        $('.experience-btn').removeClass('active');
        $('.education-btn').addClass('active');
        $('.skills-btn').removeClass('active');
        $('.education').show();
        $('.card-experience').hide();
        $('.skills').hide();
    })

    $('.skills-btn').click(function(){
        $('.experience-btn').removeClass('active');
        $('.education-btn').removeClass('active');
        $('.skills-btn').addClass('active');
        $('.card-experience').hide();
        $('.education').hide();
        $('.skills').show();
    })
    
    // $('.filter').click(function(){
    //     const value = $(this).attr('data-filter');
    //     if(value === 'all'){
    //         $('.card').show('1000');
    //     }else{
    //         $('.card').not('.'+value).hide('1000');
    //         $('.card').filter('.'+value).show('1000');
    //     }
    // })

})