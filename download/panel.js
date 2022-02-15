const copyrights = '<h3>Powered by <a href="https://kay-software.ru/" target="_blank">Kay Software</a> company</h3><a href="../download-panel" target="_blank" style="font-size: 14px; color: gray;"><br><img src="banner.png" height="120" width="270"></a>';const paramsList = new URLSearchParams(document.location.search);const cloud = "https://raw.githubusercontent.com/";const defaultAccount = "kay-server";const verification_code_source = '<img src="verified.png" width="16" height="16" style="cursor: pointer; margin: -2.5px;" title="Verified"><br><span style="color: gray;">The file is checked for viruses.</span>';const dev_code_source = '<img src="verified.png" width="16" height="16" style="cursor: pointer; margin: -2.5px;" title="Verified (service account)"><br><span style="color: gray; font-size: 14px;">The files were uploaded by a service account and<br>do not contain malicious code.</span>';
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
let DownloadWorkerZone = document.getElementById('get-file');
function req_err() {
	console.log("Request is empty.");
	document.title = 'Kay Download Panel';
	DownloadWorkerZone.innerHTML = '<br><h2>Kay Download Panel</h2><hr><h3 style="color: white;">Use file hosting without limits for free. Read how it works and how you can upload your files here.<br><br><button onclick="opensite()" class="kay-download-panel-menu-button" style="font-size: 25px;">Read now</button><br><br></h3><hr>' + copyrights;
}
switch (currentFileName) {
	case "":req_err();break;case null:req_err();break;default:
		try {
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
		} catch (e) {
			console.log("Error: " + e + " [Main]")
		}
	break;
}
function ver(type) {
	if (type == 1) {
		verification_code = verification_code_source;
	} else if (type == 0) {verification_code = dev_code_source;}
}
function opensite() {
	location = "../download-panel"
}
