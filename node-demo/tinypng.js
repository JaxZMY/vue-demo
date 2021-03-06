const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');
const image = require("imageinfo"); //引用imageinfo模块
const {
	URL
} = require('url');

const root = './',
	exts = ['.jpg', '.png'],
	max = 5200000; // 5MB == 5242848.754299136
let errTotal = 0;
let sucTotal = 0;
const options = {
	method: 'POST',
	hostname: 'tinypng.com',
	path: '/web/shrink',
	headers: {
		rejectUnauthorized: false,
		'Postman-Token': Date.now(),
		'Cache-Control': 'no-cache',
		'Content-Type': 'application/x-www-form-urlencoded',
		'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
	}
};

fileList(root);

class ZipImg {
	constructor(file) {
		this.file = file;
		this.allArr = [];
		this.falseArr = [];
		this.errTotal = 0;
		this.sucTotal = 0;
	}
	getFileList(path) {
		var filesList = [];
		this.readFileList(path, filesList);
		return filesList;
	}
	readFileList(path, filesList) {
		var files = fs.readdirSync(path);
		files.forEach((itm, index) => {
			var stat = fs.statSync(path + itm);
			if (stat.isDirectory()) {
				//递归读取文件
				this.readFileList(path + itm + "/", filesList)
			} else {

				var obj = {}; //定义一个对象存放文件的路径和名字
				obj.path = path; //路径
				obj.filename = itm //名字
				filesList.push(obj);
			}

		})

	}
	getImageFiles(path) {
		var imageList = [];
		this.getFileList(path).forEach((item) => {
			var ms = image(fs.readFileSync(item.path + item.filename));

			ms.mimeType && (imageList.push(item.path + item.filename))
		});
		this.allArr = imageList;
		return imageList;

	}
	upLoad() {
		let batchArr = [];
		//根据全部数组生成批次数组
		this.allArr.forEach((val, index, arr) => {
			if (index > 20) {
				return
			}
			batchArr.push(val)
			// this.allArr.splice(index,1)
		})
		batchArr.forEach((val, index) => {
			let childItem = this.allArr.findIndex((item, index) => {
				return item == val
			})
			this.allArr.splice(childItem, 1)
		})

	}

}
let tinyServe = new ZipImg();
tinyServe.getImageFiles(root);
tinyServe.upLoad()
// 获取文件列表
function fileList(folder) {
	let fileArr = fs.readdirSync(folder);
	fileArr.forEach((val) => {
		// console.log(val)
		// fileFilter(folder+val)
	})
	// fs.readdir(folder, (err, files) => {
	// 	if (err) console.error(err);
	// 	files.forEach((file) => {
	// 		console.log(file)
	// 		// fileFilter(folder + file)
	// 	});
	// });
}


// 过滤文件格式，返回所有jpg,png图片
function fileFilter(file) {
	// let fileObj = fs.statSync(file)
	fs.stat(file, (err, stats) => {
		if (err) return console.error(err);
		if (
			// 必须是文件，小于5MB，后缀 jpg||png
			stats.size <= max &&
			stats.isFile() &&
			exts.includes(path.extname(file))
		) {
			// myfile = file;
			console.log(file)
			//异步上传，成功一个再进行下一个
			// console.log(file)
			// fileUpload(file).then(img => {
			// 	if (falseArr.length == 0) {
			// 		console.log(`成功个数：${sucTotal}`)
			// 		console.log(`失败个数：${errTotal}`)
			// 	}
			// 	console.log(img)
			// 	return img
			// }).catch(err => {
			// 	//失败的时候将失败的放入数组
			// 	console.error(err.src, 'PromiseError')
			// 	falseArr.push(err.src)
			// 	console.log(falseArr, '失败文件')
			// 	loopUpload()

			// })

		}
		if (stats.isDirectory()) fileList(file + '/');
	});
}
// 异步API,压缩图片
// {"error":"Bad request","message":"Request is invalid"}
// {"input": { "size": 887, "type": "image/png" },"output": { "size": 785, "type": "image/png", "width": 81, "height": 81, "ratio": 0.885, "url": "https://tinypng.com/web/output/7aztz90nq5p9545zch8gjzqg5ubdatd6" }}
function fileUpload(img) {
	let asyncUpload = new Promise((resolve, reject) => {
		let errorMsg;
		var req = https.request(options, function(res) {
			res.on('data', buf => {
				let obj = JSON.parse(buf.toString());
				if (obj.error) {
					errorMsg = {
						msg: `[${uploadImg}]：压缩失败！报错：${obj.message}`,
						src: uploadImg
					};
					this.errTotal++

				} else {

					fileUpdate(uploadImg, obj).then(proImg => {
						return proImg
					}).catch(err => {
						console.log(err)
					})


				}
			});

		});
		req.write(fs.readFileSync(img), 'binary');
		req.on('error', e => {
			console.log(e)
		});

		req.end()
	})
	return asyncUpload


}
// 该方法被循环调用,请求图片数据
function fileUpdate(imgpath, obj) {
	let pro = new Promise((resolve, reject) => {
		let options = new URL(obj.output.url);
		let req = https.request(options, res => {
			let body = '';
			res.setEncoding('binary');
			res.on('data', function(data) {
				body += data;
				// console.log(`[${imgpath}] \n 正在压缩。。。。`)
			});

			res.on('end', function() {
				fs.writeFile(imgpath, body, 'binary', err => {
					if (err) return reject(err);
					console.log(
						`[${imgpath}] \n 压缩成功，原始大小:${obj.input.size}byte，压缩大小:${
					  obj.output.size
					}byte，优化比例:${obj.output.ratio}%`

					);
					sucTotal++
					resolve(imgpath)
				});
			});
		});
		req.on('error', e => {
			console.error(e);
		});
		req.end();
	})
	return pro
}
