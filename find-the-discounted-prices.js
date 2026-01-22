// Your friend Cody has to sell a lot of jam, so he applied a good 25 % discount to all his merchandise.

// Trouble is that he mixed all the prices(initial and discounted), so now he needs your cool coding skills to filter out only the discounted prices.

// For example, consider this inputs:

// "15 20 60 75 80 100"
// "9 9 12 12 12 15 16 20"
// They should output:

// "15 60 75"
// "9 9 12 15"
// Every input will always have all the prices in pairs(initial and discounted) sorted from smaller to bigger.

// You might have noticed that the second sample input can be tricky already; also, try to have an eye for performances, as huge inputs could be tested too.

// Final Note: kata blatantly taken from this problem(and still not getting why they created a separated Code Jam for ladies, as I find it rather discriminating...).


function find_discounted_prices(input) {
    const prices = input.trim().split(/\s+/).map(Number);

    // Count how many times each price appears (because duplicates exist).
    const freq = new Map();
    for (const price of prices) {
        freq.set(price, (freq.get(price) ?? 0) + 1);
    }

    const discounted_prices = [];

    // Helper: use one occurrence of `price` (decrement its count).
    function use_one(price) {
        freq.set(price, (freq.get(price) ?? 0) - 1);
    }

    // Helper: check if `price` is still available to use.
    function is_available(price) {
        return (freq.get(price) ?? 0) > 0;
    }

    // Walk from biggest to smallest.
    // The biggest remaining number must be an ORIGINAL price (not discounted),
    // because its original would have to be even bigger, and nothing is bigger than the biggest.
    for (let i = prices.length - 1; i >= 0; i--) {
        const original = prices[i];

        // If we've already used all occurrences of this value, skip it.
        if (!is_available(original)) continue;

        // Mark this original price as used.
        use_one(original);

        // Discounted price is 25% off => pay 75% => original * 3/4
        const discounted = (original * 3) / 4;

        // Mark its discounted partner as used.
        use_one(discounted);

        // Collect discounted prices (these are the ones we must output).
        discounted_prices.push(discounted);
    }

    // We collected them from high -> low, so reverse to return sorted low -> high.
    discounted_prices.reverse();
    return discounted_prices.join(" ");
}
