$(document).ready(function() {
    $("#envoyer").click(function() {

        var proceed = true;
        //simple validation at client's end
        //loop through each field and we simply change border color to red for invalid fields
        $(".contact_content input[required=true], .contact_content textarea[required=true]").each(function(){
            $(this).css('border-color','');
            if(!$.trim($(this).val())){ //if this field is empty
                $(this).css('border-color','red'); //change border color to red
                proceed = false; //set do not proceed flag
            }
            //check invalid email
            var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
                $(this).css('border-color','red'); //change border color to red
                proceed = false; //set do not proceed flag
            }
        });

        if(proceed) //everything looks good! proceed...
        {
            //get input field values data to be sent to server
            post_data = {
                'user_name'		: $('input[name=name]').val(),
                'user_email'	: $('input[name=email]').val(),
                'msg'			: $('textarea[name=message]').val()
            };

            //Ajax post data to server
            $.post('process.php', post_data, function(response){
                if(response.type == 'error'){ //load json data from server and output message
                    output = '<div class="error">'+response.text+'</div>';
                }else{
                    output = '<div class="success">'+response.text+'</div>';
                    //reset values in all input fields
                    $(".contact_content  input[required=true], .contact_content textarea[required=true]").val('');
                    $(".contact_content #contact_body").slideUp(); //hide form after success
                }
                $(".contact_content #contact_results").hide().html(output).slideDown();
            }, 'json');
        }
    });

    //reset previously set border colors and hide all message on .keyup()
    $(".contact_content  input[required=true], .contact_content textarea[required=true]").keyup(function() {
        $(this).css('border-color','');
        $("#result").slideUp();
    });
});