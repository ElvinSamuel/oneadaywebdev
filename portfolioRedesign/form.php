<?php

if(isset($_POST['email'])) {
    $email_to = "ElvinSamuel1@gmail.com";
    $email_subject = "Message From My Portfolio Website!";
    
    function died($error){
        echo "This sucks, but I found an error with the form you submitted.";
        echo "I'll list them out below. <br /><br />";
        echo $error."<br /><br />";
        echo "Please check them out and resubmit. Thanks!";
        die();
    }
    
    // Let's make sure everything's right on the form.
    if( !isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['comments'])) {
            
            died("I'm sorry, but there's a problem with the form you submitted. Can we try again?");
        }
        
    $name = $_POST['name'];
    $email = $_POST['email'];
    $comments = $_POST['comments'];
    
    $error_message = "";
    // checking to make sure the email is properly formatted.
    // $email_exp = '/^[A-Za-z0-9._%-]_@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
    
    function clean_string($string){
        $bad = array("content-type", "bcc:", "to:","cc:", "href");
        return str_replace($bad, "", $string);
    }
    
    $email_message .="Name: " .clean_string($name)."\n";
    $email_message .="Email: " .clean_string($email). "\n";
    $email_message .="Comments: " .clean_string($comments). "\n";
    
    $headers = "From: " .$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n".
    'X-Mailer: PHP/' . phpversion();
    
    
    @mail($email_to, $email_subject, $email_message, $headers);
}

?>

