const panel = "https://kay-software.ru/download/"
const copyrights = '<h3>Powered by <a href="https://kay-software.ru/" target="_blank">Kay Software</a> company</h3><a href="../download-panel" target="_blank" style="font-size: 14px; color: gray;"><br><img src="banner.png" height="120" width="270"></a>';
const verification_code_source = '<img src="verified.png" width="16" height="16" style="cursor: pointer; margin: -2.5px;" title="Verified"><br><span style="color: gray;">The file is checked for viruses.</span>';const dev_code_source = '<img src="verified.png" width="16" height="16" style="cursor: pointer; margin: -2.5px;" title="Verified (service account)"><br><span style="color: gray; font-size: 14px;">The files were uploaded by a service account and<br>do not contain malicious code.</span>';
const paramsList = new URLSearchParams(document.location.search);
const cloud = "https://raw.githubusercontent.com/";
const defaultAccount = "kay-server";
let currentFileName = paramsList.get('file');
let account = paramsList.get('from');
switch (account) {case "":account = defaultAccount;break;case null:account = defaultAccount;break;}
let verification_code = '';
switch (account) {
	case defaultAccount:ver(0);break;
	case "Vindikeitor":ver(1);break;	
	case "lrmpsm53":ver(1);break;
	case "MichurinDev":ver(1);break;
	case "dev-alfin-dk":ver(1);break;
}document.title = 'File "' + currentFileName + '" | Kay Download Panel';
let DownloadWorkerZone = document.getElementById('gui');
function req_err() {
	console.log("Request is empty.");
	document.title = 'Kay Download Panel';
	DownloadWorkerZone.innerHTML = '<br><h2>Kay Download Panel</h2><h3>For free. Forever.</h3><hr><h3 style="color: white;">Use file hosting without limits for free. Read how it works and how you can upload your files here.<br><br><button onclick="openSite()" class="kay-download-panel-menu-button" style="font-size: 25px;">Documentation</button><br><a onclick="generator()"><b style="cursor: pointer; text-decoration: underline;">File link generator</b></a><br><br></h3><hr>' + copyrights;
}
function lgh_err() {
	console.log("Too big request.");
	document.title = 'Request error | Kay Download Panel';
	DownloadWorkerZone.innerHTML = '<br><h2 style="color: pink;">Too big request.</h2><h3>Service error.</h3><hr><h3 style="color: white;">The server received too large a request. The file name cannot exceed 55 characters. The maximum number of characters in a nickname is 30.<br><br><button onclick="openSite()" class="kay-download-panel-menu-button" style="font-size: 22px;">Documentation</button><br><br></h3><hr>' + copyrights;
}
if (currentFileName !== null) {
	currentFileName = currentFileName.trim();
}
switch (currentFileName) {
	case '':req_err();break;case null:req_err();break;default:
		try {
			switch (true) {
				case (currentFileName.length > 55):lgh_err();break;
				case (account.length > 30):lgh_err();break;
				default:
					DownloadWorkerZone.innerHTML = '<br><h2>Download "<span style="color: #fffdc2;">' + currentFileName + '</span>"?</h2><hr><h3 style="color: white;">After confirmation, the file will automatically download to your device. We are not responsible for the downloaded file.</h3><br><button onclick="download()" class="kay-download-panel-menu-button" style="font-size: 25px;">Download</button><br><p style="font-size: 16px; margin: 10px;">File uploaded by: <a target="_blank" href="https://github.com/' + account + '" style="color: lime;">' + account + '</a>&nbsp;&nbsp;' + verification_code + '</p><br><hr>' + copyrights;
					function download() {
						console.log("Getting file " + currentFileName + "...");
						try {
							DownloadWorkerZone.innerHTML = '<meta http-equiv="refresh" content="0;URL=' + cloud + account + '/kay-software-cloud/main/' + currentFileName + '"><br><h2>Download "<span style="color: #fffdc2;">' + currentFileName + '</span>" started automatically!</h2><hr>' + '<h3 style="color: white;"><b>Thanks! You can close this tab.</b><br>If the download does not start automatically, try changing your browser or contact support. In this case, also check the possibility of downloading files from the Internet.</h3><hr>' + copyrights;
							console.log("Seccuss!");
						} catch (e) {
							console.log("Error: " + e + " [Download]");
						}
					}
			}
		} catch (e) {
			console.log("Error: " + e + " [Main]");
		}
	break;
}
if (paramsList.get('open-generator') !== null) {
	generator();
}
function generator() {
	try {
		DownloadWorkerZone.innerHTML = `
		<br><h2>Kay Download Panel</h2><h3>Links generator</h3><hr>
		<form id="kay-gen">
			<p style="margin: -2px;">Account name:</p><input placeholder="GitHub nickname" name="github_file" id="account" size="30" class="generator-input" outline: none;" type="git_account" autocomplete="on"><br><br>
			<p style="margin: -2px;">File name:</p><input placeholder="File in '\\kay-software-cloud\\' repository" name="github_nick" id="file" size="30" class="generator-input"; outline: none;" type="git_file" autocomplete="on">
		</form>
		<br><br>
		<button class="kay-download-panel-menu-button" style="font-size: 22px; color: pink; width: 85px;" onclick="req_err()">Back</button>
		<button type="submit" form="kay-gen" class="kay-download-panel-menu-button" style="font-size: 20px;" onclick="generate()">Create URL</button></form>
		<br><br><br><h3 style="margin: -4px;">------------------------ RESULT ------------------------</h3>
		<p><input value="Waiting for result..." id="result-output" id="file" size="22" style="font-size: 20px; background-color: black; color: #ffeabf; text-align: center; cursor: default;" readonly><button onclick="copyResult()" style="background-color: black; color: white; outline: none; font-size: 22px; cursor: default;">COPY</button></p><h3 style="margin: -27px;">-------------------------------------------------------------</h3><br><br><hr>
		` + copyrights;
	} catch (e) {
		console.log("Error: " + e + " [Generator]");
	}	
}
function generate() {
	try {
		$('#kay-gen').submit(function () {
			document.getElementById('account').value = '';
			document.getElementById('file').value = '';
			return false;
		});
		let gen_account = document.getElementById('account').value;
		let gen_filename = document.getElementById('file').value;
		let result = panel + '?file=' + encodeURI(gen_filename) + "&from=" + encodeURI(gen_account);
		if (gen_filename.trim() !== "") {
			document.getElementById('result-output').value = result;
		} else {
			document.getElementById('result-output').value = 'Input error.';
		}
	} catch (e) {
		console.log("Error: " + e + " [Generate]");
	}
}
function ver(type) {
	if (type == 1) {
		verification_code = verification_code_source;
	} else if (type == 0) {verification_code = dev_code_source;}
}
function openSite() {
	newTab("../download-panel");
}
function newTab(url) {
	window.open(url, '_blank').focus();
}
function copyResult() {
	copyText(document.getElementById('result-output').value);
}
function copyText(str) {
	const el = document.createElement('textarea');
	el.value = str;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
}

function FastDialogGenerator(cmd) {
	if (paramsList.get(cmd) !== null) {
		DownloadWorkerZone.innerHTML = '<h2>\'' + cmd + '\' module is active...</h2>';
		let gen_account = window.prompt("GitHub nickname:", "");
		let gen_filename = window.prompt("File name in '\\kay-softtware-cloud\\' repository:");
		switch (true) {
			case (gen_filename == null)||(gen_filename.trim() == ""):alert("Input error.");break;
			default:
				if (gen_account == "") {gen_account = defaultAccount;}
				let result = panel + '?file=' + encodeURI(gen_filename) + "&from=" + encodeURI(gen_account);
				window.prompt("Result:", result);
				location = result;
		}
	}
} FastDialogGenerator("fast-gen");
