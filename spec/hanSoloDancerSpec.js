describe('hanSoloDancer', function() {
  var hanSoloDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new hanSoloDancer(10, 20, timeBetweenSteps);
  });
});