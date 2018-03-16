<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

$mail = new PHPMailer();
$mail->isSMTP();
$mail->SMTAuth = true;
$mail->SMTPSecure = 'tls';
$mail->Host = 'smtp.gmail.com';
$mail->Port = '587';
$mail->isHTML();
$mail->Username = 'microfinanceife@gmail.com';
$mail->Password = 'basischandler';



if (isset($_POST['submit'])) {
    $mail->SetFrom('no-reply@howcode.org');
    $mail->Subject = 'Hello world';
    $mail->Body = 'A test email';
    $mail->AddAddress('zaozaostan@gmail.com');

    //$mail->Send();
}
?>
