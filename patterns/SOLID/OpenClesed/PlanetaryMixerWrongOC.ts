type BeaterWrong = "globe" | "fan" | "hook";

class PlanetaryMixerWrong {
  constructor(public beater: BeaterWrong) {}

  mix() {
    if (this.beater === "globe") {
      console.log("I can do a icecream using this beater!");
    }

    if (this.beater === "fan") {
      console.log("I can do a cookie using this beater!");
    }

    if (this.beater === "hook") {
      console.log("I can do a bread using this beater!");
    }
  }
}
const mixer = new PlanetaryMixerWrong("globe");
console.log(mixer.mix());