<?php

header('Location: https://ferrum-steel.ru/');

require __DIR__.'/PHPMailer/src/Exception.php';

require __DIR__.'/PHPMailer/src/PHPMailer.php';

require __DIR__.'/PHPMailer/src/SMTP.php';



use PHPMailer\PHPMailer\PHPMailer;

use PHPMailer\PHPMailer\Exception;

use PHPMailer\PHPMailer\SMTP;




if (count($_POST) > 0) {

    $mail = new PHPMailer;

    $mail->CharSet = 'UTF-8';



    $mail->isSMTP();

    $mail->SMTPAuth = true;

    $mail->SMTPDebug = 0;

     

    $mail->Host = 'ssl://smtp.mail.ru';

    $mail->Port = 465;

    $mail->Username = 'sender.form@bk.ru';

    $mail->Password = 'T2zUvT9XNXNefv5yya13';

     

    $mail->setFrom('sender.form@bk.ru', 'Sender Form');		

     

    $mail->addAddress('ferrum@ferrum-steel.ru', 'Morris');

    $mail->AddAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);

     

    $mail->Subject = "Новый заказ";

     

    $body = "Ваше имя: " . $_POST["name"] . "<br>Контактный телефон: " . $_POST["phone"] . "<br>E-mail*: " . $_POST["email"] . "<br>Заказ*: " . $_POST["message"] . "<br>Сообщение*: " . $_POST["message2"] . "<br>Файл*: " . $_POST["file"];

    $mail->msgHTML($body);

     

    $mail->send();

}

?>