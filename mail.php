<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'Lasse Mollerup';
    $email_subject = 'New message from website';
    $email_body = "Name: $name.\n".
                  "Email: $email.\n".
                  "Message: $message.\n";

    $to = "l.mollerup@hotmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-to: $email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("location: index.html");
?>