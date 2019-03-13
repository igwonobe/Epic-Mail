// index page controls

function createAccount() {
	document.getElementById('signup-box').style.display = "block";
	document.getElementById('login-box').style.display = "none";
}

function loginIn() {
	document.getElementById('login-box').style.display = "block";
	document.getElementById('signup-box').style.display = "none";
}

function openToggleMenu() {
	document.getElementById("toggle-menu").style.display = "block";
}
function closeToggleMenu() {
	document.getElementById("toggle-menu").style.display = "none";
}

// dashboard Controls

function openInbox() {
	document.getElementById("inbox-box").style.display = "block";
	document.getElementById("send-box").style.display = "none";
	document.getElementById("draft-box").style.display = "none";
	document.getElementById("compose-box").style.display = "none";
	document.getElementById("delete-box").style.display = "none";
	document.getElementById("read-msg-box").style.display = "none";
	document.getElementById("spam-box").style.display = "none";
	document.getElementById("setting-box").style.display = "none";
	document.getElementById("replyMsg").style.display = "none";
	document.getElementById("active2").style.backgroundColor = "#27a32d";
	document.getElementById("active1").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active3").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active4").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active5").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active6").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active7").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById('password-box').style.display ="none";
	document.getElementById('upload-box').style.display ="none";
}

function openSendBox() {
	document.getElementById("send-box").style.display = "block";
	document.getElementById("inbox-box").style.display = "none";
	document.getElementById("draft-box").style.display = "none";
	document.getElementById("compose-box").style.display = "none";
	document.getElementById("delete-box").style.display = "none";
	document.getElementById("spam-box").style.display = "none";
	document.getElementById("setting-box").style.display = "none";
	document.getElementById("read-msg-box").style.display = "none";
	document.getElementById("replyMsg").style.display = "none";
	document.getElementById("active3").style.backgroundColor = "#27a32d";
	document.getElementById("active1").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active2").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active4").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active5").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active6").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active7").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById('password-box').style.display ="none";
	document.getElementById('upload-box').style.display ="none";
}

function openDraftBox() {
	document.getElementById("draft-box").style.display = "block";
	document.getElementById("send-box").style.display = "none";
	document.getElementById("inbox-box").style.display = "none";
	document.getElementById("compose-box").style.display = "none";
	document.getElementById("delete-box").style.display = "none";
	document.getElementById("spam-box").style.display = "none";
	document.getElementById("setting-box").style.display = "none";
	document.getElementById("read-msg-box").style.display = "none";
	document.getElementById("replyMsg").style.display = "none";
	document.getElementById("active4").style.backgroundColor = "#27a32d";
	document.getElementById("active1").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active2").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active3").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active5").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active6").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active7").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById('password-box').style.display ="none";
	document.getElementById('upload-box').style.display ="none";
}

function openComposeBox() {
	document.getElementById("compose-box").style.display = "block";
	document.getElementById("send-box").style.display = "none";
	document.getElementById("inbox-box").style.display = "none";
	document.getElementById("draft-box").style.display = "none";
	document.getElementById("delete-box").style.display = "none";
	document.getElementById("spam-box").style.display = "none";
	document.getElementById("setting-box").style.display = "none";
	document.getElementById("read-msg-box").style.display = "none";
	document.getElementById("replyMsg").style.display = "none";
	document.getElementById("active1").style.backgroundColor = "#27a32d";
	document.getElementById("active2").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active3").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active4").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active5").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active6").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active7").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById('password-box').style.display ="none";
	document.getElementById('upload-box').style.display ="none";
}

function openSpamBox() {
	document.getElementById("spam-box").style.display = "block";
	document.getElementById("delete-box").style.display = "none";
	document.getElementById("send-box").style.display = "none";
	document.getElementById("inbox-box").style.display = "none";
	document.getElementById("draft-box").style.display = "none";
	document.getElementById("compose-box").style.display = "none";
	document.getElementById("setting-box").style.display = "none";
	document.getElementById("read-msg-box").style.display = "none";
	document.getElementById("replyMsg").style.display = "none";
	document.getElementById("active5").style.backgroundColor = "#27a32d";
	document.getElementById("active1").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active2").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active3").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active4").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active6").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active7").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById('password-box').style.display ="none";
	document.getElementById('upload-box').style.display ="none";
}


function openDeleteBox() {
	document.getElementById("delete-box").style.display = "block";
	document.getElementById("send-box").style.display = "none";
	document.getElementById("inbox-box").style.display = "none";
	document.getElementById("draft-box").style.display = "none";
	document.getElementById("compose-box").style.display = "none";
	document.getElementById("spam-box").style.display = "none";
	document.getElementById("setting-box").style.display = "none";
	document.getElementById("read-msg-box").style.display = "none";
	document.getElementById("replyMsg").style.display = "none";
	document.getElementById("active6").style.backgroundColor = "#27a32d";
	document.getElementById("active1").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active2").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active3").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active4").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active5").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active7").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById('password-box').style.display ="none";
	document.getElementById('upload-box').style.display ="none";
}

function openSettingBox() {
	document.getElementById("setting-box").style.display = "block";
	document.getElementById("send-box").style.display = "none";
	document.getElementById("inbox-box").style.display = "none";
	document.getElementById("draft-box").style.display = "none";
	document.getElementById("compose-box").style.display = "none";
	document.getElementById("delete-box").style.display = "none";
	document.getElementById("spam-box").style.display = "none";
	document.getElementById("read-msg-box").style.display = "none";
	document.getElementById("replyMsg").style.display = "none";
	document.getElementById("active7").style.backgroundColor = "#27a32d";
	document.getElementById("active1").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active2").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active3").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active4").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active5").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById("active6").style.backgroundColor = "rgba(0,0,0,.9)";
	document.getElementById('password-box').style.display ="none";
	document.getElementById('upload-box').style.display ="none";
}

function readMsgBox() {
	document.getElementById("setting-box").style.display = "none";
	document.getElementById("send-box").style.display = "none";
	document.getElementById("inbox-box").style.display = "none";
	document.getElementById("draft-box").style.display = "none";
	document.getElementById("compose-box").style.display = "none";
	document.getElementById("delete-box").style.display = "none";
	document.getElementById("spam-box").style.display = "none";
	document.getElementById("read-msg-box").style.display = "block";
	document.getElementById("replyMsg").style.display = "none";
	document.getElementById('password-box').style.display ="none";
	document.getElementById('upload-box').style.display ="none";
}
function replyMsg() {
	document.getElementById("replyMsg").style.display = "block";
	document.getElementById("reply").value = "reply"
}
function bcBtn() {
	document.getElementById('bc-hidden').style.display = "block";
}
function changePassword(){
	document.getElementById('password-box').style.display ="block";
	document.getElementById('upload-box').style.display ="none";
}
function uploadPicture(){
	document.getElementById('upload-box').style.display ="block";
	document.getElementById('password-box').style.display ="none";
}