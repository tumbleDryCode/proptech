<?php
// Central DB configuration for PHP entry points and _p/* AJAX handlers.
if (!defined('DB_HOST')) {
    define('DB_HOST', 'titan');
}
if (!defined('DB_NAME')) {
    define('DB_NAME', 'developers');
}
if (!defined('DB_USERNAME')) {
    define('DB_USERNAME', 'developers');
}
if (!defined('DB_PASSWORD')) {
    define('DB_PASSWORD', 'casain');
}
if (!defined('DB_DSN')) {
    define('DB_DSN', 'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME);
}

if (!function_exists('db_get_mysqli_connection')) {
    function db_get_mysqli_connection()
    {
        $con = mysqli_connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
        return $con;
    }
}
?>