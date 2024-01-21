import Card from "../components/Card";
import { Stack } from "../utils/Stack";
import * as fs from 'fs';
import * as path from "path"
import { shuffleDeck } from "./shuffleDeck";

let deck: Stack<Card> | undefined;
export async function loadDeck(){
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
    return deck;
}

// !async function start(){
//     console.log(shuffleDeck((await loadDeck())).store.map((card)=>{
//         return card.name;
//     }));
// }()