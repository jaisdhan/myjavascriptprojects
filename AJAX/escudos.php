<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
$escudo=$_GET['escudos'];

if($escudo=='rmadrid')
{
    echo('<img src=rmadrid.png>');
}
if($escudo=='atmadrid')
{
    echo('<img src=amadrid.png>');
}
if($escudo=='valencia')
{
    echo('<img src=valenciafc.png>');
}
if($escudo=='sevilla')
{
    echo('<img src=sevilla.png>');
}
    ?>
</body>
</html>