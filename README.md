Author: Wellington Rodrigues de Oliveira - metalipower@gmail.com - http://www.wellingtonoliveira.in

InputControl is a powerfull script to controlling own input text to accept specific chars or numbers.

How to use:

This example accept only numbers:
    <input type="text" onkeypress="inputControl.init(event, {element: this, chars: '0123456789'})"  />

This example accept only letters lowercase, uppercase and space:
    <input type="text" onkeypress="inputControl.init(event, {element: this, chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz '})"  />

ATTENTION: Some chars require a backslash to escape.

