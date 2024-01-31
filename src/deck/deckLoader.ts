import Card from "../components/Card";
import { Stack } from "../utils/Stack";
import * as fs from 'fs';
import * as path from "path"
import { shuffleDeck } from "./shuffleDeck";

let deck: Stack<Card> | undefined;
export async function setupDeck(){
    if(deck==undefined){
        deck=new Stack();
        console.log("loading deck...")
        let cardsListDir=path.resolve(__dirname,"./../cardsList")
        let filesList = fs.readdirSync(cardsListDir);
        for(let file of filesList){
            // console.log(file)
            let card = await import(path.resolve(cardsListDir,file));
            let className = path.parse(file).name;
            deck.push(new card[className]());
        }
    }
    else{
        throw new Error("nope, already set up");
    }
}
export function loadDeck(){
    if(deck==undefined){
        throw new Error("deck's not loaded");
    }
    return deck;
}

// !async function start(){
//     console.log(shuffleDeck((await loadDeck())).store.map((card)=>{
//         return card.name;
//     }));
// }()