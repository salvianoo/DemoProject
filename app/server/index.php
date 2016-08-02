<?php

require dirname(dirname(__DIR__)) . '/vendor/autoload.php';

use MyLib\Foobar;

$foobar = new Foobar('Rodiney');
echo $foobar->showMsg() . "\n";
