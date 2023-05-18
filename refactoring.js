function plumages(birds) {
  return new Map(birds.map(b => createBird(b))
    .map(bird => [bird.name, bird.plumage]));
}

function speeds(birds) {
  return new Map(birds.map(b => createBird(b)).map(bird => [bird.name, bird.airSpeedVelocity]));
}

function plumage(bird) {
  return createBird(bird).plumage;
}

function airSpeedVelocity(bird) {
  return createBird(bird).airSpeedVelocity;
}

function createBird(bird) {
  switch (bird.type)
  {
    case '유럽 제비':
      return new EuropeanSwallow(bird);
    case '아프리카 제비':
      return new AfricanSwallow(bird);
    case '노르웨이 파랑 앵무':
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}


class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }
  get plumage() {
    return '알 수 없다'
  }

  get airSpeedVelocity() {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  get plumage() {
    return '보통이다'
  }
  get airSpeedVelocity() {
    return 35
  }
}

class AfricanSwallow extends Bird {
  get plumage() {
    return (this.numberOfCoconuts > 2) ? '지쳤다' : '보통이다';
  }
  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  get plumage() {
    return (this.voltage > 100) ? '그을렸다' : '예쁘다';
  }
  get airSpeedVelocity() {
    return (this.isNailed) ? 0 : 10 + this.voltage / 10;
  }
}

const europeanSwallow = { type: '유럽 제비', name: '유럽 제비' };
const africanSwallow = { type: '아프리카 제비', numberOfCoconuts: 3, name: '아프리카 제비' };
const norwegianBlueParrot = { type: '노르웨이 파랑 앵무', voltage: 103, isNailed: true, name: '노르웨이 파랑 앵무' };


const birds = [europeanSwallow, africanSwallow, norwegianBlueParrot];
const birdPlumages = plumages(birds);
console.log(birdPlumages);

const birdSpeeds = speeds(birds);
console.log(birdSpeeds);
