function fact(n) {
	let factOfN = 1;
	for (let i = 1; i <= n; i++) {
		factOfN = factOfN * i;
	}
	return factOfN;
}

undefined;
console.log(fact(7)); // should return 5040
