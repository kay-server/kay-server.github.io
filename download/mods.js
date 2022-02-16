if (paramsList.get('fast-gen') !== null) {
	DownloadWorkerZone.innerHTML = '<h2>\'fast-gen\' module is active</h2>';
	let gen_account = window.prompt("GitHub nickname:", "");
	let gen_filename = window.prompt("File name in '\\kay-softtware-cloud\\' repository:");
	switch (true) {
		case (gen_filename == null)||(gen_filename.trim() == ""):alert("Input error.");break;
		default:
			if (gen_account == "") {gen_account = defaultAccount;}
			let result = panel + '?file=' + encodeURI(gen_filename) + "&from=" + encodeURI(gen_account);
			window.prompt("Result:", result);
			if (confirm("Open generated URL?\n\n" + result)) {location = result;}	
	}
}