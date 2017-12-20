var wages = 0.01;
var totdollars = 0.01;

for (var i = 2; i <= 100; i++) {
    wages = wages * 2;
    console.log ("wages", wages);
    totdollars = wages + totdollars;
    console.log ("total dollars", totdollars);
    if (totdollars == Infinity) {
        console.log(i);
        break
    }
}
//reward was $21,474,836.48 after 30 days with total dollars = $21,474,836.47
//20 days to make $10,000.00 (total dollars)
//35 days to make 1 billion