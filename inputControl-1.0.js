/*  
    Author: Wellington Rodrigues de Oliveira - metalipower@gmail.com - http://www.wellingtonoliveira.in
    
    InputControl is a powerfull script to controlling own input text to accept specific chars or numbers.

    How to use:

    This example accept only numbers:
        <input type="text" onkeypress="inputControl.init(event, {element: this, chars: '0123456789'})"  />

    This example accept only letters lowercase, uppercase and space:
        <input type="text" onkeypress="inputControl.init(event, {element: this, chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz '})"  />

    ATTENTION: Some chars require a backslash to escape. 
*/

var inputControl = function() {
    var ev;
    return {
    	init : function(e, params) {
			element = this.objectType(params.element);
			this.event(e);			
			if(params.chars){
				this.charsAllowed(params.chars, this.keyCode()); 
			}			
		},
		objectType : function(el) {
			if (typeof (el) == 'object')
				return el;
			return document.getElementById(el);
		},	
		keyCode : function() {
			return ev.charCode || ev.keyCode || ev.which;
		},
		event : function(e) {
			ev = e || window.event;
		},
		preventDefault : function() {
			if (ev.preventDefault)
				return ev.preventDefault();
			return ev.returnValue = false;
		},
		charsAllowed : function(chars, k) {
			keyCode = (navigator.userAgent.indexOf("Firefox") != -1) ? ev.keyCode
					: null;
			key = String.fromCharCode(k);
			if ((chars.indexOf(key) == -1) && k != 8 && k != 9 && keyCode != 46) {
				this.preventDefault();
			}
		}
	};
}();