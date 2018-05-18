var fs = require("fs");
var path = require("path");
//把要用jsdoc进行解析的文件拷贝到这个目录下

var templateDir = path.resolve("doc_template");
//不需要用jsdoc解析的库放到这个目录下
var libDir = path.resolve("lib");

//删除所有旧文件
mkdir(templateDir);
var oldFiles = fs.readdirSync(templateDir);
for (var i = 0; i < oldFiles.length; i++) {
	var oldFilePath = path.resolve(templateDir, oldFiles[i]);
	var oldFileStat = fs.statSync(oldFilePath);
	if (oldFileStat.isFile()) {
		fs.unlinkSync(oldFilePath);
		console.log("删除旧的文件：" + oldFilePath);
	}
}
//type:1表示需要jsdoc解析     type:2不需要
var sourcePath = [
	{
		path: "../utils",
		type: 1
	}
];

sourcePath.forEach(function(data) {
	var dataPath = data.path;
	var dir = data.type == 1 ? templateDir : libDir;

	var files = fs.readdirSync(dataPath);
	for (var i = 0; i < files.length; i++) {
		var srcFile = files[i];
		if (/\.js|\.css$/.test(srcFile)) {
			var targetName = srcFile;
			copyFile(
				path.resolve(dataPath, srcFile),
				path.resolve(dir, targetName)
			);
			console.log("复制新的文件：" + path.resolve(dir, targetName));
		}
	}
});

var baseCommand =
	"java -jar jsrun.jar " +
	__dirname +
	"/app/run.js -a -t=templates/Codeview1.2 " +
	templateDir;

var child = require("child_process").spawn("java", [
	"-jar",
	"jsrun.jar",
	__dirname + "/app/run.js",
	"-a",
	"-t=templates/Codeview1.2",
	templateDir
]);
child.stdout.setEncoding("utf8");
child.stdout.on("data", function(data) {
	console.log(data.toString("utf8"));
});
child.stderr.setEncoding("utf8");
child.stderr.on("data", function(data) {
	console.log(data.toString("utf8"));
});
child.on("exit", function() {
	//console.log("5秒后退出...");
	setTimeout(function() {}, 5000);
});

function copyFile(sourceFile, targetFile, callback) {
	var data = fs.readFileSync(sourceFile, "utf8");
	fs.writeFileSync(targetFile, data);
}

function mkdir(p, mode) {
	var dirs = p.split(/[\\\/]/);
	var path = "";
	dirs.forEach(function(s) {
		path += s + "/";
		try {
			fs.mkdirSync(path, mode || 0766);
		} catch (e) {}
	});
}
