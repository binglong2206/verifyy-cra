import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function CheckUser(username){
    const navigate = useNavigate();
    const [teststate, what] = useState('secret code');

    return console.log(teststate)
}