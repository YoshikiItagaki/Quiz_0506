/**
 *
 */

//連想配列で5つのデータを格納
let items = [
	{name: "りんご", price: 100, count: 3},
	{name: "ぶどう", price: 200, count: 1},
	{name: "ばなな", price: 100, count: 1},
	{name: "いちご", price: 200, count: 2},
	{name: "みかん", price: 300, count: 3}
];

/*for(let i=0; i<5; i++){
	targetPrice = items[i].price * items[i].count;
	console.log("商品名：" + items[i].name + "小計：" + targetPrice);
}*/

//関数の呼び出し
higherPrice(250);

//higherPrice関数（因数に設定した値より、小計が高額になる商品を出力する）
function higherPrice(targetPrice){

	for(let i=0; i<5; i++){
		if(targetPrice > items[i].price * items[i].count){
			continue;
		} else{
			console.log("商品名:" + items[i].name + "小計：" + items[i].price * items[i].count + "円");
		}
	}

	return;

}

