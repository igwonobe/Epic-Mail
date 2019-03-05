// home page controls
function createAccount(){
	document.getElementById('signup-box').style.display ="block";
	document.getElementById('login-box').style.display ="none";
}

function loginIn(){
	document.getElementById('login-box').style.display ="block";
	document.getElementById('signup-box').style.display ="none";
}
// mobile Menu control
function openToggleMenu(){
	document.getElementById("toggle-menu").style.display="block";
}

// user dashboard control
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

function openDraftBox(){
	document.getElementById("draft-box").style.display="block";
	document.getElementById("send-box").style.display="none";
	document.getElementById("inbox-box").style.display="none";
	document.getElementById("compose-box").style.display="none";
	document.getElementById("delete-box").style.display="none";
	document.getElementById("spam-box").style.display="none";
	document.getElementById("setting-box").style.display="none";
}
// Admin dashboard control
function createGroup(){
    document.getElementById('create-group-box').style.display="block";
    document.getElementById('delete-group-box').style.display="none";
    document.getElementById('all-group-box').style.display="none";
}

function deleteGroup(){
    document.getElementById('delete-group-box').style.display="block";
    document.getElementById('create-group-box').style.display="none";
    document.getElementById('all-group-box').style.display="none";
}
function viewAllGroup(){
    document.getElementById('all-group-box').style.display="block";
    document.getElementById('delete-group-box').style.display="none";
    document.getElementById('create-group-box').style.display="none";
}
