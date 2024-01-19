import {Card} from "./Card";

export default class{
    
  private _hp: number = 20;
  private _actions: number = 2;
  private _hands: Array<Card> = [];
  private _field: Array<Card> = [];
  private _stack: Array<Card> = [];

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
		this._actions = Math.max(0,value);
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

  // websocket: ws,
  Player(hp: number,actions: number){
    this.hp=hp;
    this.actions=actions;
  }  
  
  IsDead(){
    return this.hp<=0;
  }

  
}