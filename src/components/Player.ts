import { Room } from "../game/Room";
import Card from "./Card";
import * as ws from "ws";
import { CardPlace } from "./CardPlace";

export default class Player{
  private _name!: string;
  private _hp!: number;
  private _actions!: number;
  private _hands!: Array<Card>;
  private _field!: Array<Card>;
  private _stack!: Array<Card>;
  private _playerId!: number;
  private _room?: Room;
  private _websocket?: WebSocket;

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

  public async waitQuickCard(targetPlayer:Player,CanBeCancelled:boolean,CanBeReduced:boolean){
    return new Promise((resolve,reject)=>{
      this.websocket!.addEventListener("message",(msg)=>{
        let response = JSON.parse(msg.data.toString());
        if(response.type=="quick"){
          validQuick(response,CanBeCancelled,CanBeReduced);
        }
      })
    });
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
   * @description Move played card from hand or field to stack.
  */
  public playToStack (card: Card): void {
    let cardIndex: number;
    switch(card.place){
      case(CardPlace.playerHand):{
        cardIndex = this.hands.indexOf(card);
        break;
      }
      case(CardPlace.playerField):{
        cardIndex = this.field.indexOf(card);
        break;
      }
      default:{
        cardIndex = -1;
      }
    }
    if(cardIndex !== -1){
      this.hands.splice(cardIndex, 1);
      card.place = CardPlace.playerStack;
      this.stack.push(card);
    }else{
      console.log(`Can't do. Card ${card.name} not found in hand or field.`);
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

    public get websocket(): ws | undefined {
      return this._websocket;
    }
    public set websocket(value: ws | undefined) {
      this._websocket = value;
    }
}