<?php

namespace MyLib;

class Foobar
{
    private $name;

    public function __construct($name = 'Salviano')
    {
        $this->name = $name;
    }

    public function showMsg()
    {
        return "Hello " . $this->name;
    }
}
