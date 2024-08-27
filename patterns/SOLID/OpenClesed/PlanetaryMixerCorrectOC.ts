interface Beater {
    beater(): void
} 

class GlobeBeater implements Beater {
    beater(): void {
      console.log("I can do a icecream using this beater!");
    }
}

class FanBeater implements Beater {
    beater(): void {
      console.log("I can do a cookie using this beater!");
    }
}

class HookBeater implements Beater {
    beater(): void {
      console.log("I can do a bread using this beater!");
    }
}

class PlanetaryMixer {
  constructor(public beater: Beater) {}

  mix() {
    this.beater.beater()
  }
}

const globeBeater = new GlobeBeater()
const planetaryMixer = new PlanetaryMixer(globeBeater);
console.log(planetaryMixer.mix());