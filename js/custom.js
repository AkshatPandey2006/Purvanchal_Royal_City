$(document).ready(function () {
	$('.navbar-nav li  a').click(function(){
    $('.nav-link').removeClass("active");
    $(this).addClass("active");
});
	
	var hash = window.location.hash.substr(1);
	if(hash == 'Enquiries'){
	  setTimeout(function(){ 
		$([document.documentElement, document.body]).animate({
		  scrollTop: $('[id="'+hash+'"]').offset().top
		}, 500);
	  }, 1000);
	}

         
    $('.navbar-nav li a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target
          || $('[name=' + this.hash.slice(1) +']');
          if ($target.length) {
            var targetOffset = $target.offset().top -70;
            $('html,body')
            .animate({scrollTop: targetOffset}, 1000);
           return false;
          }
        }
      });
	
	  $(".loading-screen").fadeOut('500');
	
    get_edition()
    
    $('.js-example-basic-single').select2();
    
    $(".gm-1").click(function () {
          $('.grandmasters.bg-img').toggleClass("gm-open gm-id-1");
    });
    $(".gm-2").click(function () {
          $('.grandmasters.bg-img').toggleClass("gm-open gm-id-2");
    });
    $(".gm-3").click(function () {
          $('.grandmasters.bg-img').toggleClass("gm-open gm-id-3");
    });
    $(".gm-4").click(function () {
          $('.grandmasters.bg-img').toggleClass("gm-open gm-id-4");
    });
    $(".gm-5").click(function () {
          $('.grandmasters.bg-img').toggleClass("gm-open gm-id-5");
    });
	
	 $(".gm-6").click(function () {
          $('.grandmasters.bg-img').toggleClass("gm-open gm-id-6");
    });

    $(".remove_grandmasters").click(function () {
          $('.grandmasters.bg-img').removeClass("gm-open gm-id-1");
          $('.grandmasters.bg-img').removeClass("gm-open gm-id-2");
          $('.grandmasters.bg-img').removeClass("gm-open gm-id-3");
          $('.grandmasters.bg-img').removeClass("gm-open gm-id-4");
          $('.grandmasters.bg-img').removeClass("gm-open gm-id-5");
		  $('.grandmasters.bg-img').removeClass("gm-open gm-id-6");
    });

    $('.nl-read-more').click(function(){
    	$('.click_show').show();
    	$('.nl-read-more,.nl-excerpt').hide();
    });
    
    $('.gl-load-more').click(function(){
    	$('.gallery-image').show();
    	$('.gl-load-more').hide();
    });


    $('.uecont').slick({
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          prevArrow: '<div class="uevent-change uevent-prev"></div>',
          nextArrow: '<div class="uevent-change uevent-next"></div>',
          responsive: [
            {
              breakpoint: 1435,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 740,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
    });

    $(".knowmore [data-aos]").removeClass('aos-animate');
    
    $('.camslide-cont').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        autoplay: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 3000,
        autoplaySpeed: 3000
    });
	
    
    $('.media-slider').slick({
  dots:false,
  slidesToShow:3,
  slidesToScroll: 1,
  autoplay:false,
  autoplaySpeed: 3500,
  infinite: true,
   pauseOnHover:false,
    prevArrow: false,
    nextArrow: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
	  
	  
    
  ],     
});
$('.news_left').click(function(){
  $('.media-slider').slick('slickPrev');
});

$('.news_right').click(function(){
  $('.media-slider').slick('slickNext');
});	
    
	$("#videoBG").removeClass('video-hide');
	
    $('section.video .flower-text .flt:first').addClass('flt-active');
    
    setInterval(function(){
        var $active = $('section.video .flower-text .flt-active');
        var $next = ($active.next().length > 0) ? $active.next() : $('section.video .flower-text .flt:first');
        $active.removeClass('flt-active');
        $next.addClass('flt-active');
    }, 5000);

    $('#login-form-slide input, #login-form input').blur(function(){
        if($(this).val() !== ""){
          $(this).closest('.textfield').find('label').hide();
        }
        else{
          $(this).closest('.textfield').find('label').show();
        }
    });

    $('#login-form-slide input, #login-form input').on('focus', function(){
        $(this).closest('.textfield').find('label').hide();
    });

    $('.enquirecontainer input').blur(function(){
        if($(this).val() !== ""){
          $(this).closest('.textfield').find('label').hide();
        }
        else{
          $(this).closest('.textfield').find('label').show();
        }
    });
  
    $('.enquirecontainer input').on('focus', function(){
        $(this).closest('.textfield').find('label').hide();
    });
    
    $(document).on("click","#login-section .close",function() {
        $( "#sidebar-container" ).removeClass('login-open');
    });
 
    $('.enquirecontainer input').on('focus', function(){
        $(this).closest('.textfield').find('label').hide();
    });
    
    $(document).on("click","open-enquire",function() {
        $('#sidebar-container').addClass('login-open enquire-open');
    });
    
    $(document).on("click",".login",function() {
        $('#sidebar-container').addClass('login-open').removeClass('enquire-open');
    });
    
    $(document).on("click",".logout",function() {
         before_login();
    });
    
    $(document).on("click", ".event-next", function(){
       get_event('next')
    })
    
    $(document).on("click", ".event-prev", function(){
        get_event('prev')
    })
    
    $(document).on("click", ".nl-sel", function() {
        get_edition();
    })
    
    function get_edition(){
        var $cat = $('#nl-sel').val();
        
        $.ajax({
                url: 'data/project.php', 
                type: 'POST', 
                dataType: 'json',
                data: { category: $cat},
                success: function(data) { 
                    $('.nl-read-more,.nl-excerpt').show();
                    $('.nl-desc').hide();
        
                    $(".nl-feat-img").attr("src",'images/events/'+data.post.image);
                    $(".nl-content .nl-title").html(data.post.title);
                    $(".nl-content .nl-desc").html(data.post.description);
                    $(".nl-content .nl-excerpt").html(data.post.excerpt);
        
                    $('.nl-posts').html('');
                    if(data.edition.length > 1){
                      $.each(data.edition, function(i,p){
                          
                        var post = '<div class="col-md-3">'
                                + '<div class="nl-posts_box" data-id="'+p.id+'">'
                                +  '<img src="images/events/'+p.image+'" alt="'+p.title+'" class="w-100" />'
                                +  '<div class="nl-po-title">'+p.title+'</div>'
                                +  '</div></div>';
                        $('.nl-posts').append(post);
                      });
                    }
                }
        });
    }
    
    $(document).on('click', '.nl-posts_box', function(){
      var id = $(this).attr('data-id');

      $.ajax({
        url: 'data/project.php', 
        type: 'POST', 
        dataType: 'json',
        data: { id: id, action: 'get_post'},
          success: function(data){
            
            if(data.post.excerpt === ''){
              $('.nl-read-more,.nl-excerpt').hide();
              $('.nl-desc').show();
            }
            else{
              $('.nl-read-more,.nl-excerpt').show();
              $('.nl-desc').hide();
            }

            $("#newsletter .nl-feat-img").attr("src",'images/events/' + data.post.image);
            $("#newsletter .nl-content .nl-title").html(data.post.title);
            $("#newsletter .nl-content .nl-desc").html(data.post.description);
            $("#newsletter .nl-content .nl-excerpt").html(data.post.excerpt);
          }
     });

    });
    
    function get_event($nav){
        var $pg = $('input[name="pg"]').val()
        
        $.ajax({
                url: 'data/event.php', 
                type: 'POST', 
                data: { id: $pg, nav: $nav},
                success: function(data) { 
                    var $obj = JSON.parse(data);
                    $('.feat-img').css('background-image','url(images/events/'+ $obj.data.image +')');
                    $('.event-title').html($obj.data.title)
                    $('.short-desc').html($obj.data.short_desc)
                    $('.event-description').html($obj.data.desc)
                    $('input[name="pg"]').val($obj.data.id)
                }
        });
    }
	
	$('.form-control').bind('copy paste cut',function(e) {
			e.preventDefault();
	});

	$.validator.methods.oldRequired = $.validator.methods.required;
	$.validator.addMethod("required", function(value, element, param) {
		if (value.trim().length === 0) {
			return false;
		}
		return $.validator.methods.oldRequired.call(this, value, element, param);
	}, $.validator.messages.required);
    
    $.validator.addMethod("validatemail", 
        function(value, element) {
            return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
        }, 
        "Please enter valid email"
    );
    
    $.validator.addMethod("validatephone", 
        function(value, element) {
            return /^\d{10}$/.test(value);
        }, 
        "Please enter 10 digit mobile number"
    );
    
    $("form[name='enquiry']").validate({
        rules:{
            first_name :{ required : true },
            last_name :{ required : true },
            //enq_occupation :{ required : true }, 
            //enq_company :{ required : true }, 
            //enq_address : { required : true }, 
            //enq_city : {required : true },
            country_code : {required : true},
            email : { required : true, validatemail : true},
            mobile :{ required : true, validatephone: true },
            //option : { required : true},
			hidden_grecaptcha: { required: true, minlength: "255" }
        },
        messages:{
            enq_phone :{ validatephone: "Please enter 10 digit mobile number" },
            enq_email : { required : "This field is required", validatemail : "Please enter valid email", remote: "This email address is already registered"}
        }
        
      /*  submitHandler: function(form) {
            event.preventDefault();
            $('.loading-dots').removeClass('hide');
            $(form).find("button[type='submit']").prop('disabled',true);	
			
			$.ajax({
                url: $(form).attr('action'), 
                type: $(form).attr('method'),             
                data: $(form).serialize(),
                success: function(data) {
                    
					var jsonObj = JSON.parse(data)
                    $('.loading-dots').addClass('hide');

                    if(jsonObj.status == 'SUCCESS'){
                        $('#success').html(jsonObj.message).removeClass('hide');
						//$("label").show();
						
						grecaptcha.reset();
						
						trackecommerce("UA-186021486-1","", 'Camellias', $('#enq_email').val(), $('#enq_phone').val());
						//gtag_report_conversion('thankyou.php');
						//gtag_report_conversion();
						
						$('#first_name').val($("#enq_firstname").val());
						$('#last_name').val($("#enq_lastname").val());
						$('#00N6F00000RUXw8').val($('#enq_occupation').val());
						$('#company').val($('#enq_company').val());
						$('#00N6F00000RUXda').val($('#enq_address').val());
						$('#city').val($('#enq_city').val());
						$('#country_code').val($('#enq_country').val());
						$('#email').val($('#enq_email').val());
						$('#mobile').val($('#enq_phone').val());
						$('#00N6F00000Yc742').val($('#enq_comment').val());

						$('#sales_force').submit();
						
						gtag_report_conversion('thankyou.php');
					} else {
                        $('#error').html(jsonObj.message).removeClass('hide');
                    }
                }
            });
            return false;
        } */
    });
	
	$('#sales_force').submit(function (e) {
		console.log('submitted');
		 //e.preventDefault;
	});
    
    $("#login-form").validate({
        rules:{
            login_email : { required : true, validatemail : true},
            login_password : { required : true}
        },
        messages:{
            login_email : { validatemail : "Please enter valid email address."}
        },
        
        submitHandler: function(form) {
            event.preventDefault();
            $.ajax({
                url: $(form).attr('action'), 
                type: $(form).attr('method'),             
                data: $(form).serialize(),
                success: function(data) {
                    var jsonObj = JSON.parse(data);
                    $('.loading-dots').addClass('hide');

                    if(jsonObj.status == 'SUCCESS'){
                        after_login();
                    } else {
                        $('#login-error').html(jsonObj.message).removeClass('hide');
                    }
                }
            });
            return false;
        }
    });
    
    $("#login-form-slide").validate({
        rules:{
            login_email_1 : { required : true, validatemail : true},
            login_password_1 : { required : true}
        },
        messages:{
            login_email_1 : { validatemail : "Please enter valid email address."}
        },
        
        
        submitHandler: function(form) {
            event.preventDefault();
            $.ajax({
                url: $(form).attr('action'), 
                type: $(form).attr('method'),             
                data: $(form).serialize(),
                success: function(data) {
                    var jsonObj = JSON.parse(data);
                    $('.loading-dots').addClass('hide');

                    if(jsonObj.status == 'SUCCESS'){
                        after_login();
                    } else {
                        $('#login-error').html(jsonObj.message).removeClass('hide');
                    }
                }
            });
            return false;
        }
    });
	
$('.popup1').show();
$('.closee').click(function(){
$('.popup1').hide();
});

	function gtag_report_conversion(url) {
		  var callback = function () {
			if (typeof(url) != 'undefined') { window.location = url; }
		  };
		  gtag('event', 'conversion', {
			  'send_to': 'AW-455536401/9q6MCIvduu4BEJHem9kB',
			  'event_callback': callback
		  });
		  return false;
	}
    
    function after_login(){
        $('.before-login').addClass('after-login').removeClass('before-login');
        $('.uecont').slick('refresh');
        $('.loginslide').addClass('before-login');
        $('.login-section').addClass('before-login');
        
        $(".gm-1").hover(function () {
              $('.video.bg-img').toggleClass("gm-hover gm-hov1");
        });
        $(".gm-2").hover(function () {
              $('.video.bg-img').toggleClass("gm-hover gm-hov2");
        });
        $(".gm-3").hover(function () {
              $('.video.bg-img').toggleClass("gm-hover gm-hov3");
        });
        $(".gm-4").hover(function () {
              $('.video.bg-img').toggleClass("gm-hover gm-hov4");
        });
        $(".gm-5").hover(function () {
              $('.video.bg-img').toggleClass("gm-hover gm-hov5");
        });
        
        $('.trigger-capsule .enquire, .trigger-capsule .login').addClass('hide');
        $('.trigger-capsule .logout').addClass('after-login')
        $('input[type="text"], input[type="password"]').val('');
    }
    
    function before_login(){
       $('.login-section').removeClass('before-login');
       $('.after-login').addClass('before-login').removeClass('after-login')
        $('.trigger-capsule .enquire, .trigger-capsule .login').removeClass('hide')
       $('.trigger-capsule .logout').removeClass('after-login')
        $('.gm-1, .gm-2, .gm-3, .gm-4, .gm-5').unbind('mouseenter mouseleave')
       $('#sidebar-container').removeAttr('class') 
        $.ajax({
                url: 'logout.php', 
                type: 'POST',             
                success: function(data) { return true; }
        });
    }

    var logged_in = $('input[name="logged_in"]').val();
    
    if(logged_in) after_login();
	
    
});