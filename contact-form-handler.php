<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

$mail = new PHPMailer();
$mail->isSMTP();
$mail->SMTAuth = true;
$mail->SMTPSecure = 'ssl';
$mail->Host = 'smtp.gmail.com';
$mail->Port = '587';
$mail->isHTML(true);
$mail->Username = 'microfinanceife@gmail.com';
$mail->Password = 'basischandler';



if (isset($_POST['submit'])) {
    $mail->SetFrom('microfinanceife@gmail.com');
    $mail->Subject = $_POST['subject'];
    $name = $_POST['name'];
    $message = $_POST['message'];
    $mail->Body = ("You have received an e-mail from ".$name".\n\n".$message);
    $mail->AddAddress($_POST['mail']);

    $mail->Send();
}
?>
