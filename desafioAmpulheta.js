function drawHourglass(n) {
	for (i = 0; i < n; i++) {
		for (j = 0; j < n; j++) {
			if (i == 0 || j == 0 || j == n - 1 || i == n - 1 || i == j || i == n - 1 - j || (i < n / 2 && i <= j && i <= n - 1 - j))
				process.stdout.write("#");
			else
				process.stdout.write(" ");
		}
		console.log("")
	}
	console.log("Upside down:")
	for (i = 0; i < n; i++) {
		for (j = 0; j < n; j++) {
			if (i == 0 || j == 0 || j == n - 1 || i == n - 1 || i == j || i == n - 1 - j || (i > n / 2 && i >= j && j >= n - 1 - i))
				process.stdout.write("#");
			else
				process.stdout.write(" ");
		}
		console.log("")
	}
}

drawHourglass(20);
