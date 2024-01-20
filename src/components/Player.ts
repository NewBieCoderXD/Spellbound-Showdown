import { Room } from "../game/Room";
import Card from "./Card";

export default class Player{
  private _name!: string;
  private _hp!: number;
  private _actions!: number;
  private _hands!: Array<Card>;
  private _field!: Array<Card>;
  private _stack!: Array<Card>;
  private _playerId!: number;
  private _room?: Room;

  constructor(
    name: string,
    hp: number,
    actions: number,
    hands: Array<Card>,
    field: Array<Card>,
    stack: Array<Card>,
    playerId: number
  ){
    this.name=name;
    this.hp=hp;
    this.actions=actions;
    this.hands=hands;
    this.field=field;
    this.stack=stack;
    this.playerId=playerId;
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

  public get playerId(): number {
    return this._playerId;
  }
  public set playerId(value: number) {
    this._playerId = value;
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


    public get room(): Room | undefined {
      return this._room;
    }
    public set room(value: Room | undefined) {
      this._room = value;
    }
}