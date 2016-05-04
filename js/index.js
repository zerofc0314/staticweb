 $(function(){
                var index=0;
                $('.run_radius').find('li').click(function(){
                    $(this).addClass('zero').siblings('li').removeClass();
                    $('.run_banner li').eq($(this).index()).css('display','block').siblings('li').css('display','none');
                });
                function run(){
                    if(index==4)
                    {
                      index=0;
                    }
                  else
                  {
                   $('.run_radius li').eq(index).addClass('zero').siblings('li').removeClass();
                   $('.run_banner li').eq(index).fadeIn("1200").css('display','block').siblings('li').css('display','none');
                  index++;
                    }
                   } 
                setInterval(run,4000);
            });

