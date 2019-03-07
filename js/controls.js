// index page controls

function createAccount(){
	document.getElementById('signup-box').style.display ="block";
	document.getElementById('login-box').style.display ="none";
}

function loginIn(){
	document.getElementById('login-box').style.display ="block";
	document.getElementById('signup-box').style.display ="none";
}

function openToggleMenu(){
	document.getElementById("toggle-menu").style.display="block";
}

function openInbox(){
	document.getElementById("inbox-box").style.display="block";
	document.getElementById("send-box").style.display="none";
	document.getElementById("draft-box").style.display="none";
	document.getElementById("compose-box").style.display="none";
	document.getElementById("delete-box").style.display="none";
	document.getElementById("spam-box").style.display="none";
	document.getElementById("setting-box").style.display="none";
}

function openSendBox(){
	document.getElementById("send-box").style.display="block";
	document.getElementById("inbox-box").style.display="none";
	document.getElementById("draft-box").style.display="none";
	document.getElementById("compose-box").style.display="none";
	document.getElementById("delete-box").style.display="none";
	document.getElementById("spam-box").style.display="none";
	document.getElementById("setting-box").style.display="none";
}

function openDraftBox(){
	document.getElementById("draft-box").style.display="block";
	document.getElementById("send-box").style.display="none";
	document.getElementById("inbox-box").style.display="none";
	document.getElementById("compose-box").style.display="none";
	document.getElementById("delete-box").style.display="none";
	document.getElementById("spam-box").style.display="none";
	document.getElementById("setting-box").style.display="none";
}

function openComposeBox(){
	document.getElementById("compose-box").style.display="block";
	document.getElementById("inbox-box").style.display="none";
	document.getElementById("draft-box").style.display="none";
	document.getElementById("delete-box").style.display="none";
	document.getElementById("spam-box").style.display="none";
	document.getElementById("setting-box").style.display="none";
}

function openSpamBox(){
	document.getElementById("spam-box").style.display="block";
	document.getElementById("delete-box").style.display="none";
	document.getElementById("send-box").style.display="none";
	document.getElementById("inbox-box").style.display="none";
	document.getElementById("draft-box").style.display="none";
	document.getElementById("compose-box").style.display="none";
	document.getElementById("setting-box").style.display="none";
}


function openDeleteBox(){
	document.getElementById("delete-box").style.display="block";
	document.getElementById("send-box").style.display="none";
	document.getElementById("inbox-box").style.display="none";
	document.getElementById("draft-box").style.display="none";
	document.getElementById("compose-box").style.display="none";
	document.getElementById("spam-box").style.display="none";
	document.getElementById("setting-box").style.display="none";
}

function openSettingBox(){
	document.getElementById("setting-box").style.display="block";
	document.getElementById("send-box").style.display="none";
	document.getElementById("inbox-box").style.display="none";
	document.getElementById("draft-box").style.display="none";
	document.getElementById("compose-box").style.display="none";
	document.getElementById("delete-box").style.display="none";
	document.getElementById("spam-box").style.display="none";
}

function bcBtn(){
	document.getElementById('bc-hidden').style.display="block";
}