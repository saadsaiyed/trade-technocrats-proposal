(function ($) {
    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
                document.getElementById('err_msg').addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
                document.getElementById('err_msg').removeClass('has-val');
            }
        })    
    })
})(jQuery);