var background = new Path.Rectangle(view.bounds);
background.fillColor = 'white';

var circle = new Path.Circle(new Point(80, 50), 35);
circle.fillColor = 'red';

var circle2 = new Path.Circle(new Point(120, 50), 35);
circle2.fillColor = 'blue';

// Set the blend mode of circle2:
circle2.blendMode = 'multiply';

var points = 25;

// The distance between the points:
var length = 45;

var path = new Path({
  strokeColor: '#000000',
  strokeWidth: 40,
  strokeCap: 'round'
});

var start = view.center / [10, 1];
for (var i = 0; i < points; i++)
  path.add(start + new Point(i * length, 0));

function onMouseMove(event) {
  path.firstSegment.point = event.point;
  for (var i = 0; i < points - 1; i++) {
    var segment = path.segments[i];
    var nextSegment = segment.next;
    var vector = segment.point - nextSegment.point;
    vector.length = length;
    nextSegment.point = segment.point - vector;
  }
  path.smooth({ type: 'continuous' });
}
