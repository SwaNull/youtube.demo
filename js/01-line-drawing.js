AdobeEdge.bootstrapCallback(function (compId) {
	comp = AdobeEdge.getComposition('EDGE-50899785').getStage();
});

//Adding a comment here.

var s, test, target,
	targetx1 = 225,
	targety1 = 218,
	targetx2 = 523,
	targety2 = 111,
	// Slopes of cardinal and ordinal paths, for constrained drawing
	slopeBound = [0, 0.414, 1, 2.414, Infinity, -2.414, -1, -0.414],
	slope;

function gameRemove01() {
	$('#Stage_snap').remove();
	$('#Stage').off('mousedown mouseup mousemove keydown keyup');

}

// Test the line
function lineTest(tester) {
	if (isWithinThreshold(tester.attr('x1'), targetx1, 5) &&
		isWithinThreshold(tester.attr('y1'), targety1, 5) &&
		isWithinThreshold(tester.attr('x2'), targetx2, 5) &&
		isWithinThreshold(tester.attr('y2'), targety2, 5)) {
		success();
	} else if (isWithinThreshold(tester.attr('x1'), targetx2, 5) &&
			   isWithinThreshold(tester.attr('y1'), targety2, 5) &&
			   isWithinThreshold(tester.attr('x2'), targetx1, 5) &&
			   isWithinThreshold(tester.attr('y2'), targety1, 5)) {
		success();
	} else {
		failure();
	}

	function success() {
		$('#Stage_snap').css({
			'pointer-events' : 'none'
		});
		$('#Stage_success-state').detach().appendTo('#Stage');
		comp.play('success');
	}

	function failure() {
		comp.play('fail-state');
		$('#Stage_snap').css({
			'pointer-events' : 'none'
		});
		$('#Stage_fail-state').detach().appendTo('#Stage');
		console.log('failure');
	}
}

function newGame01() {
	// Create Snap canvas, inject it into the Edge Stage
	var s = new Snap('615', '360'); // Create the Snap stage
	$('svg').attr('id', 'Stage_snap'); // Add the #Stage_snap id to the Snap stage
	$('svg').css({
		'position': 'absolute',
		'z-index': '100'
	});
	$('#Stage_snap').detach().prependTo('#Stage'); // Reorder the Snap stage, placing it on top of the stacking order

	// Create the empty test line for users to draw
	var testLine, // The line to store the test
		testx1,
		testy1,
		testx2,
		testy2,
		dx,
		dy,
		greater,
		lesser,
		targetLine = s.line(targetx1, targety1, targetx2, targetx2);

	var dragging = false; //
	$('#Stage_snap').mousedown(function (e) {
		testy1 = e.pageY ;//- (Math.floor($(this).offset().top));
		testx1 = e.pageX ;//- (Math.floor($(this).offset().left));
		console.log( e.pageX + ","+ e.pageY);
		testLine = s.line(testx1, testy1, testx1, testy1);
		dragging = true;
		testLine.attr({
			stroke : '#fff',
			strokeWidth : '2.5px',
			strokeLinecap : 'butt'
		});
	});

	// Attach event handlers to mouseup and mouseout to finish line drawing
	$('#Stage_snap').mouseup(function (e) {
		dragging = false;
		lineTest(testLine);
	});

	// Attach event handlers to the mousemove for when users are dragging out the line
	$('#Stage_snap').mousemove(function drawLine(e) {
		if (dragging) {
			testx2 = e.pageX;
			testy2 = e.pageY;
			dx = testx2 - testx1;
			dy = testy2 - testy1;
			if (e.shiftKey) {
				slope = (dy / dx);
				if (Math.abs(slope) < slopeBound[1]) {
					testLine.attr({
						x2 : testx2,
						y2 : testy1
					});
				} else if (Math.abs(slope) > slopeBound[3]) {
					testLine.attr({
						x2 : testx1,
						y2 : testy2
					});
				} else if ((slopeBound[1] < slope) && (slope < slopeBound[3])) {
					greater = Math.max(dx, dy);
					lesser = Math.min(dx, dy);
					testLine.attr({
						x2 : (((greater - lesser) / 2) + lesser) + testx1,
						y2 : (((greater - lesser) / 2) + lesser) + testy1
					});
				} else if ((slopeBound[5] < slope) && (slope < slopeBound[7])) {
					greater = Math.max(Math.abs(dx), Math.abs(dy));
					lesser = Math.min(Math.abs(dx), Math.abs(dy));
					var signX = dx > 0 ? 1 : dx === 0 ? 0 : -1;
					var signY = dy > 0 ? 1 : dy === 0 ? 0 : -1;
					testLine.attr({
						x2 : signX * Math.abs((((greater - lesser) / 2) + lesser)) + testx1,
						y2 : signY * Math.abs((((greater - lesser) / 2) + lesser)) + testy1
					});
				}
			} else {
				testLine.attr({
					x2 : testx2,
					y2 : testy2
				});
			}
		}
	});
}