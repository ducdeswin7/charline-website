$(document).ready(function(){$("#envoyer").click(function(){var t=!0;$(".contact_content input[required=true], .contact_content textarea[required=true]").each(function(){$(this).css("border-color",""),$.trim($(this).val())||($(this).css("border-color","red"),t=!1);var e=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;"email"!=$(this).attr("type")||e.test($.trim($(this).val()))||($(this).css("border-color","red"),t=!1)}),t&&(post_data={user_name:$("input[name=name]").val(),user_email:$("input[name=email]").val(),msg:$("textarea[name=message]").val()},$.post("process.php",post_data,function(t){"error"==t.type?output='<div class="error">'+t.text+"</div>":(output='<div class="success">'+t.text+"</div>",$(".contact_content  input[required=true], .contact_content textarea[required=true]").val(""),$(".contact_content #contact_body").slideUp()),$(".contact_content #contact_results").hide().html(output).slideDown()},"json"))}),$(".contact_content  input[required=true], .contact_content textarea[required=true]").keyup(function(){$(this).css("border-color",""),$("#result").slideUp()})});