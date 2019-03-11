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
// dashboard Controls
function openInbox(){
	document.getElementById("inbox-box").style.display="block";
	document.getElementById("send-box").style.display="none";
	document.getElementById("draft-box").style.display="none";
	document.getElementById("compose-box").style.display="none";
	document.getElementById("delete-box").style.display="none";
	document.getElementById("spam-box").style.display="none";
	document.getElementById("setting-box").style.display="none";
	document.getElementById("replyMsg").style.display="none";
}

function openSendBox(){
	document.getElementById("send-box").style.display="block";
	document.getElementById("inbox-box").style.display="none";
	document.getElementById("draft-box").style.display="none";
	document.getElementById("compose-box").style.display="none";
	document.getElementById("delete-box").style.display="none";
	document.getElementById("spam-box").style.display="none";
	document.getElementById("setting-box").style.display="none";
	document.getElementById("read-msg-box").style.display="none";
	document.getElementById("replyMsg").style.display="none";
}

function openDraftBox(){
	document.getElementById("draft-box").style.display="block";
	document.getElementById("send-box").style.display="none";
	document.getElementById("inbox-box").style.display="none";
	document.getElementById("compose-box").style.display="none";
	document.getElementById("delete-box").style.display="none";
	document.getElementById("spam-box").style.display="none";
	document.getElementById("setting-box").style.display="none";
	document.getElementById("read-msg-box").style.display="none";
	document.getElementById("replyMsg").style.display="none";
}

function openComposeBox(){
	document.getElementById("compose-box").style.display="block";
	document.getElementById("inbox-box").style.display="none";
	document.getElementById("draft-box").style.display="none";
	document.getElementById("delete-box").style.display="none";
	document.getElementById("spam-box").style.display="none";
	document.getElementById("setting-box").style.display="none";
	document.getElementById("read-msg-box").style.display="none";
	document.getElementById("replyMsg").style.display="none";
}

function openSpamBox(){
	document.getElementById("spam-box").style.display="block";
	document.getElementById("delete-box").style.display="none";
	document.getElementById("send-box").style.display="none";
	document.getElementById("inbox-box").style.display="none";
	document.getElementById("draft-box").style.display="none";
	document.getElementById("compose-box").style.display="none";
	document.getElementById("setting-box").style.display="none";
	document.getElementById("read-msg-box").style.display="none";
	document.getElementById("replyMsg").style.display="none";
}


function openDeleteBox(){
	document.getElementById("delete-box").style.display="block";
	document.getElementById("send-box").style.display="none";
	document.getElementById("inbox-box").style.display="none";
	document.getElementById("draft-box").style.display="none";
	document.getElementById("compose-box").style.display="none";
	document.getElementById("spam-box").style.display="none";
	document.getElementById("setting-box").style.display="none";
	document.getElementById("read-msg-box").style.display="none";
	document.getElementById("replyMsg").style.display="none";
}

function openSettingBox(){
	document.getElementById("setting-box").style.display="block";
	document.getElementById("send-box").style.display="none";
	document.getElementById("inbox-box").style.display="none";
	document.getElementById("draft-box").style.display="none";
	document.getElementById("compose-box").style.display="none";
	document.getElementById("delete-box").style.display="none";
	document.getElementById("spam-box").style.display="none";
	document.getElementById("read-msg-box").style.display="none";
	document.getElementById("replyMsg").style.display="none";
}

function readMsgBox(){
	document.getElementById("setting-box").style.display="none";
	document.getElementById("send-box").style.display="none";
	document.getElementById("inbox-box").style.display="none";
	document.getElementById("draft-box").style.display="none";
	document.getElementById("compose-box").style.display="none";
	document.getElementById("delete-box").style.display="none";
	document.getElementById("spam-box").style.display="none";
	document.getElementById("read-msg-box").style.display="block";
	document.getElementById("replyMsg").style.display="none";
}
function replyMsg(){
	document.getElementById("replyMsg").style.display="block";
	document.getElementById("reply").value="Reply"
}
function bcBtn(){
	document.getElementById('bc-hidden').style.display="block";
}