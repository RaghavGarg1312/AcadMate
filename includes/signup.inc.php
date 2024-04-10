<?php

if (isset($_POST["submit"])) {

  // First we get the form data from the URL
  $name = $_POST["name"];
  $uid = $_POST["uid"];
  $email = $_POST["email"];
  $pwd = $_POST["pwd"];
  $pwdRepeat = $_POST["pwdrepeat"];
  $college = $_POST["college"];
  $branch = $_POST["branch"];
  $semester = $_POST["semester"];

  // Then we run a bunch of error handlers to catch any user mistakes we can (you can add more than I did)
  // These functions can be found in functions.inc.php

  require_once "dbh.inc.php";
  require_once 'functions.inc.php';

  // Left inputs empty
  // We set the functions "!== false" since "=== true" has a risk of giving us the wrong outcome
  if (emptyInputSignup($name, $email, $uid, $pwd, $pwdRepeat) !== false) {
    header("location: ../register.php?error=emptyinput");
    exit();
  }
  // // Proper username chosen
  // // if (invalidUid($uid) !== false) {
  // //   header("location: ../register.php?error=invaliduid");
  // //   exit();
  // }
  // Proper email chosen
  if (invalidEmail($email) !== false) {
    header("location: ../register.php?error=invalidemail");
    exit();
  }
  // Do the two passwords match?
  if (pwdMatch($pwd, $pwdRepeat) !== false) {
    header("location: ../register.php?error=passwordsdontmatch");
    exit();
  }
  // Is the username taken already
  if (uidExists($conn, $uid) !== false) {
    header("location: ../register.php?error=usernametaken");
    exit();
  }

  // If we get to here, it means there are no user errors

  // Now we insert the user into the database
  createUser($conn, $name, $email, $uid, $pwd, $college, $branch, $semester);

} else {
  header("location: ../register.php");
  exit();
}