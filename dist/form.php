<?php
	if(isset($_POST["username"])){
		 $name = $_POST["username"];
		
	}
	if(isset($_POST["phone"])){
		 $phone = $_POST["phone"];
		 
	}
	echo "Имя: $name <br> Телефон: $phone";
	
	if (mail("kubjob264@gmail.com", "Заявка с сайта", "ФИО:".$name.". Phone: ".$phone)) {
		 echo "сообщение успешно отправлено";
	} else {
		 echo "при отправке сообщения возникли ошибки";
}?>
