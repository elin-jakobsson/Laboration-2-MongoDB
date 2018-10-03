function generateProduct() {
	const color = ['red', 'blue', 'pink', 'green', 'powder blue', 'hot pink', 'yellow'];
	const material = ['wood', 'plastic', 'metal', 'stone', 'gem stone', 'marble'];
	const thing = ['balloon', 'bicycle', 'hammer', 'wrench', 'unicorn', 'barbie doll', 'phone' ];
	function randomElement(list) {
		let r = Math.random() * list.length;
		return list[Math.floor(r)];
	}
  function getKategori(thing){
    let kategory;
    switch (thing) {
      case 'balloon':
        kategory = 'Party';
        break;
      case 'bicycle':
        kategory = 'Sport';
        break;
      case 'hammer':
        kategory = 'Tools';
        break;
      case 'wrench':
        kategory = 'Tools';
        break;
      case 'unicorn':
        kategory = 'Toys';
        break;
      case 'Barbie doll':
        kategory = 'Toys';
        break;
      case 'phone':
        kategory = 'IT';
        break;
      default:
        kategory = 'Other';
    }
    return kategory;
  }

	let c = randomElement(color);
	let m = randomElement(material);
	let t = randomElement(thing);
  let k = getKategori(t);
	return {
		name: t,
		color: c,
		material: m,
    kategory: k,
		price: Math.floor(10 + Math.random() * 200)
	};
}

function getProductList(count){
  let list = [];
  for (let i = 0; i < count; i++) {
    list.push(generateProduct());
  }
  return list;
}

module.exports = {
	getProductList: getProductList
}
