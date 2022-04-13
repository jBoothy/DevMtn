// Max of Two Challenge

let x = 1;
let y = 1;
// on if else if statements don't use ; after (y > x) or it causes ts(1128) error
if (y > x) {
	console.log(`${y} is bigger.`);
}
else if (x > y) {
		console.log(`${x} is bigger.`);
}
else {
	console.log(`${x} and ${y} are the same.`);

}
