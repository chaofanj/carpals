
	var proArr=new Array();
	proArr[0]=['东城区','西城区','朝阳区','海淀区'];//北京
	proArr[1]=['静安区','浦东区','浦西区','徐汇区'];//上海
	proArr[2]=['河东区','河西区','南开区'];//天津
	proArr[3]=['石家庄市','廊坊市','三河市'];//河北
	function changeCity() {
		//1.获取对象
		var proEle = document.getElementById("province");
		var cityEle = document.getElementById("city");
		//2.将以前的城市清0
		cityEle.length=1;
		//3.获取省份的提交值
		var proVal = proEle.value;
		//4.根据省份的值,来决定城市的值
		for(var i=0;i<proArr[proVal].length;i++){
			var optEle=new Option(proArr[proVal][i],i.toString());
			cityEle.add(optEle);
		}
	}