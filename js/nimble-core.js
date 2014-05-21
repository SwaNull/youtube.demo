// Core Math functions
function isWithinThreshold(test, target, threshold) {
	if (((target - threshold) <= test) && (test <= (target + threshold))) {
		return true;
	} else {
		return false;
	}
}