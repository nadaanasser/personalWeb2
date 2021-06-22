$('#button').click(function() {
    let flag = true;

    // FORM INPUTS VALUES
    let first_name = $('#first_name').val();
    let last_name = $('#last_name').val();
    let email = $('#email').val();
    

    let errors_array = [];
    $('#error_messages_list').html("");

    // FIRSTNAME AND LASTNAME VALIDATION
    if(first_name.length < 4 || last_name.length < 4) {
        flag = false;
        errors_array.push("Your first name or last name is smaller than 4 characters");
    }

 

    let pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    if(email < 6) {
        flag = false;
        errors_array.push("Your email is wrong.");
    }

    if(!pattern.test(email)) {
        flag = false;
        errors_array.push("Incorrect email");
    }

   


    if(flag == false) {
        for(let x = 0; x < errors_array.length; x++) {
            $('#error_messages_list').append("<li>" + errors_array[x] + "</li>");
        }

        $('.alert').show();
    }

    if(flag == true) {
        $('.alert').hide();

}


   });

 $(document).ready( function () {

    maxLength = $("textarea#comment").attr("maxlength");
        $("textarea#comment").after("<div><span id='remainingLengthTempId'>" 
                  + maxLength + "</span> remaining</div>");
        
        $("textarea#comment").bind("keyup change", function(){checkMaxLength(this.id,  maxLength); } )

        


    });

    function checkMaxLength(textareaID, maxLength){
    
        currentLengthInTextarea = $("#"+textareaID).val().length;
        $(remainingLengthTempId).text(parseInt(maxLength) - parseInt(currentLengthInTextarea));
        
        if (currentLengthInTextarea > (maxLength)) { 
            
            // Trim the field current length over the maxlength.
            $("textarea#comment").val($("textarea#comment").val().slice(0, maxLength));
            $(remainingLengthTempId).text(0);
            
        }
    }
    


 



 



