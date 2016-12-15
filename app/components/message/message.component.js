// Written by Joshua Paul A. Chan
(function() {
"use strict";

// `convoItem`
//
angular.module('wr.components')
.component('message', {
    bindings : {
        sender  : "<",
        sentAt  : "<",
        body    : "<",
    },
    templateUrl: 'client/app/components/message/message.view.html',
});
}());