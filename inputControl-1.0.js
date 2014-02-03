window.onload = function () {
    document.onkeypress = function(event){
        onKeyPress(event);
    };
}

function onKeyPress(event) {
    if (!event) event = window.event;
    var target = event.target ? event.target : event.srcElement;
    var restrict = target.getAttribute("data-restrict");
    if(restrict){
        inputControl.init(event, {element: this, chars: restrict});
    }
}

var inputControl = function() {
    var ev;
    return {
        init: function(e, params) {
            element = this.objectType(params.element);
            this.event(e);
            if (params.chars) {
                this.charsAllowed(params.chars, this.keyCode());
            }
        },
        objectType: function(el) {
            if (typeof (el) == 'object')
                return el;
            return document.getElementById(el);
        },
        keyCode: function() {
            return ev.charCode || ev.keyCode || ev.which;
        },
        event: function(e) {
            ev = e || window.event;
        },
        preventDefault: function() {
            if (ev.preventDefault)
                return ev.preventDefault();
            return ev.returnValue = false;
        },
        charsAllowed: function(chars, k) {
            keyCode = (navigator.userAgent.indexOf("Firefox") != -1) ? ev.keyCode
                    : null;
            key = String.fromCharCode(k);
            if ((chars.indexOf(key) == -1) && k != 8 && k != 9 && keyCode != 46) {
                this.preventDefault();
            }
        }
    };
}();
