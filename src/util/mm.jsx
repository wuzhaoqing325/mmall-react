class MUtil{
	request(Param){
		return new Promise((resolve, reject) => {
			
			$.ajax({
				type:Param.type || 'get',
				url:Param.url || '',
				dataType:Param.dataType || 'json',
				data:Param.data || null,
				success : res => {
					// 数据请求成功
					
					if(0 === res.status){
						typeof resolve === 'function' && resolve(res.data, res.msg)
					}
					// 没有登录状态，强制登录
					else if (10 === res.status){
						this.doLogin();
						
					}
					else{
						typeof reject === 'function' && reject(res.msg || res.data)
					}
				},
				error : err => {
					typeof reject === 'function' && reject(err.statusText)	
					
				}
			});
		});
	}

	// 跳转登录
	doLogin(){
		window.location.herf = '/login?redirect=' + encodeURIComponent(window.location.pathname)
	}

	// 获取url参数
	getUrlParam(name){
		// xxxx.com?param=123&param1=456
		let queryString = window.location.search.split('?')[1] || '';
		let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
		result = queryString.match(reg);
		// result: ['param=123', '', '123', '&']
		return result ? decodeURIComponent(result[2]): null;
	}
	// 成功提示
	successTips(successMsg){
		alert(successMsg || '操作成功！');
	}
	// 错误提示
	errorTips(errMsg){
		alert(errMsg || '好像哪里不对了~');
	}
	// 设置本地存储
	setStorage(name, data){
		let dataType = typeof data;
		// JSON对象
		if(dataType === 'object'){
			window.localStorage.setItem(name, JSON.stringify(data));	
		}
		// 基础类型
		else if(['number', 'string', 'boolean'].indexOf(dataType) >= 0){
			window.localStorage.setItem(name, data);
		}
		// 其他不支持类型
		else{
			alert('该类型不能用于本地存储');
		}
	}
	// 取出本地存储内容
	getStorage(name){
		let data = window.localStorage.getItem(name);
		if(data){
			return JSON.parse(data);
		}
		else{
			return '';
		}
	}
	// 删除本地存储
	removeStorage(name){
		window.localStorage.removeItem(name);
	}


}
export default MUtil;