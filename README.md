Author: Wellington Rodrigues de Oliveira 

Email: metalipower@gmail.com

Site: http://www.wellingtonoliveira.in

InputControl is a powerfull script to controlling own input text to accept specific chars or numbers.

####How to use:

This example accept only numbers:

     <input type="text" onkeypress="inputControl.init(event, {element: this, chars: '0123456789'})"  />

This example accept only letters lowercase, uppercase and space:

      <input type="text" onkeypress="inputControl.init(event, {element: this, chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz '})"  />

####ATTENTION: 

Some chars require a backslash to escape.


####Tested Environments

Google Chrome, Firefox, Internet Explorer 6+

####Licences - GPL

inputControl - Copyright (C) 2012 by Wellington Rodrigues de Oliveira


This script is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
inputControl is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
You should have received a copy of the GNU General Public License along with inputControl. If not, see http://www.gnu.org/licenses/.

