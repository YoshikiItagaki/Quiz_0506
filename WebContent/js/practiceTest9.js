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

	//行ごとに判定を行う。
	//上記の条件に合致しない場合に何の処理も行わなずにcontinueで次の行に移る。
	//合致した行は、商品名と小計額の出力を行う。

	for(let i=0; i<5; i++){
		if(targetPrice > items[i].price * items[i].count){
			continue;
		}
		const itemsApplied = "商品名:" + items[i].name + " 小計：" + items[i].price * items[i].count + "円\n";
		console.log(itemsApplied);
		document.getElementById('output').innerHTML += itemsApplied + '<br>' ;

	}

	return;

}


//When you try to output multiple JavaScript objects of that kind into HTML, namely for loop objects,
//what is to be done is add a new line at the end of each line.
//To do so, keep in mind that you put an addition assignment operator first and create another new line with a <br> tag after that.
//By doing so, you can avoid overwriting outputs from JavaScript in the same line forever.
//Otherwise, once a certain process executed per iteration, you keep on overwriting outputs each time,
//and as a consequence, it's unlikely to get any of which you're expecting to.