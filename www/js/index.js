/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

urlBrow = 'https://www.google.com';
//urlBrow = 'http://fazerja.com.br/site/index.php?app=s';

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        app.inapp();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }



	inapp: function() {

cordova.InAppBrowser.open(encodeURI('http://fazerja.com.br/site/index.php?app=s'), '_system', 'location=no,hidden=no');
	   
    }
};




 function teste1() {

alert('teste1');

cordova.InAppBrowser.open(encodeURI(urlBrow), '_system', 'location=no,hidden=no');
	   
    }


 function teste6() {
alert('teste6');
window.open( urlBrow , '_self', 'location=no,hidden=no');
	   
    }








function net(){

alert('net');

var conn = navigator.connection.type;

if( conn == 'none' || conn == 'NONE' ){ //conn
alert('O aplicativo nao detectou conexao com internet.');
} else {
alert('conectado a internet com:' + conn );
}

}
	





function teste7(){

alert('teste7');
alert('urlBrow' + urlBrow );
ifrBrowser.location.href =  urlBrow;

}   


function teste8(){
alert('teste8');
alert('urlBrow' + urlBrow );
window.open(urlBrow, '_blank');
}

function teste9(){
alert('teste9');
alert('urlBrow' + urlBrow );
window.open(urlBrow, '_system');
}

function teste10(){
alert('teste10');
alert('urlBrow' + urlBrow );
window.open(urlBrow, '_self');
}


function teste8b(){
alert('teste8b');
alert('urlBrow' + urlBrow );
cordova.InAppBrowser.open(urlBrow, '_blank');
}

function teste9b(){
alert('teste9b');
alert('urlBrow' + urlBrow );
cordova.InAppBrowser.open(urlBrow, '_system');
}

function teste10b(){
alert('teste10b');
alert('urlBrow' + urlBrow );
cordova.InAppBrowser.open(urlBrow, '_self');
}
