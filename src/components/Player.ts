import Card from "./Card";

export default abstract class Player{
  private _name: string;
  private _hp: number = 20;
  private _actions: number = 2;
  private _hands: Array<Card>;
  private _field: Array<Card>;
  private _stack: Array<Card>;

  constructor(name: string, hp: number, hands: Array<Card>, field: Array<Card>, stack: Array<Card>){
    this._name=name;
    this._hp=hp;
    this._hands=hands;
    this._field=field;
    this._stack=stack;
  }

	public get hp(): number  {
		return this._hp;
	}

	public set hp(value: number ) {
		this._hp = value;
	}

	public get actions(): number  {
		return this._actions;
	}

	public set actions(value: number ) {
		this._actions = Math.min(Math.max(0,value),5);
	}

  public set hands(value: Array<Card>) {
    this._hands = value;
  }

  public get hands(): Array<Card> {
    return this._hands;
  }

  public get field(): Array<Card> {
    return this._field;
  }
  public set field(value: Array<Card>) {
    this._field = value;
  }

  public get stack(): Array<Card> {
    return this._stack;
  }
  public set stack(value: Array<Card>) {
    this._stack = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  /**
   * @description Move played card from hand to stack.
  */
  public handToStack (card: Card): void {
    const cardIndex = this.hands.indexOf(card);
    if(cardIndex !== -1){
      this.hands.splice(cardIndex, 1);
      //! debug
      //! card.place = deck
      this.stack.push(card);
    }else{
      console.log(`Can't do. Card ${card.name} not found in hand.`);
    }
  }

  
  IsDead(){
    return this.hp<=0;
  }
}