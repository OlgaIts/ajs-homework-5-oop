export default class Character {
  constructor(name, type) {
    const types = ['Bowerman', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];

    if (name.length < 2 || name.length > 10) {
      throw new Error('Минимальное кол-во символов 2, максимальное 10');
    }

    if (typeof name !== 'string') {
      throw new Error('Неверное имя');
    }

    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Неверный тип');
    }

    this.name = name;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.health = 100;
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
    } else {
      throw new Error('Нельзя повысить уровень умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Персонаж мёртв');
    }
  }
}
