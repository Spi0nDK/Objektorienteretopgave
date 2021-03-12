class weapon {
    constructor (firerate, ammo, mags, damage, damagesum) {
        this.firerate = firerate;
        this.ammo = ammo;
        this.mags = mags;
        this.damage = damage;
        this.damagesum = damagesum;
  }

  damagesum () {
    this.damagesum += this.damage;
  }

  ammousage () {
    this.ammo *= -1;
  }

  mags () {
    if (this.ammo = 0);
      this.mags *= -1;
      this.ammo += 30;
  }

}

let m16 = new weapon(0.8, 30, 4, 37, 0);
let ak47 = new weapon(0.65, 30, 4, 48, 0);

for(let i = 0; i < 20; ++i) {
    console.log(m16);
    console.log(ak47);
    m16.damagesum += m16.damage
    ak47.damagesum += ak47.damage
  }

if(m16.damagesum > ak47.damagesum)
  console.log("M16 vinder!");
else {
  console.log("AK-47 vinder!")
}
