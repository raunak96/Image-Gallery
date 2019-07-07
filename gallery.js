var msg=$(".msg");
        function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();    
            reader.onload = function (e) {
            	 // $('#profile-img-tag').attr('src', e.target.result);
            	 var img=$("<img src=''>").attr('src',e.target.result);
            	 var div=$('<div class="col-lg-4 col-sm-6 thumbnail"></div>').append(img);
                $(".row").append(div);
            }
            reader.readAsDataURL(input.files[0]);
        }
    };
    $('.fil').click(function(){
    $("#fileName").trigger('click');
});
    $("#fileName").change(function(e){
        var fileName = $(this).val();
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile=="jpg" || extFile=="jpeg" || extFile=="png"){
            readURL(this);
            msg.addClass("alert-success");
            msg.text("Img Successfully Uploaded");
        }else{
            msg.addClass("alert-danger");
            msg.text("Only jpg/jpeg and png files are allowed!");
        }
        setInterval(function(){
        	msg.text("");
        	msg.removeClass("alert-success alert-danger");	
        }, 5000);
        $(this).val("");   
    });