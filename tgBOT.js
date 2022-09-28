// https://api.telegram.org/bot5519792956:AAFdOoKhnQmpRUP_snJHKWfPu6YlMnp1wCk/getUpdates
// https://api.telegram.org/bot5519792956:AAFdOoKhnQmpRUP_snJHKWfPu6YlMnp1wCk/sendMessage?chat_id=952794633&text=hi,you_loser
// id=-856175878
const { match } = require('assert');
const TGApi =require('node-telegram-bot-api'); 
const { type } = require('os');
const {gameOptions, againOptions}=require('./options')
const token ='5519792956:AAFdOoKhnQmpRUP_snJHKWfPu6YlMnp1wCk'
const bot= new TGApi(token,{polling:true})
// bot.message.first_name='Игровой бот'
const startGame = async (chat_id)=>{
    const randomNumber =Math.floor(Math.random()*10)
    chats[chat_id]=randomNumber;
    await bot.sendMessage(chat_id,`Отгадай число`,gameOptions)
}
const chats ={}

const start= ()=>{
    bot.setMyCommands([
        {command:'/start', description:'start'},
        {command:'/info', description:'info'},
        {command:'/game', description:'game'},
    
    
    
    ])
    bot.on('message',async msg=>{
        const text = msg.text;
        const chat_id= msg.chat.id;
        if(text=='/start'){
          await  bot.sendSticker(chat_id,'https://tlgrm.ru/_/stickers/06c/d14/06cd1435-9376-40d1-b196-097f5c30515c/8.webp')
          return  bot.sendMessage(chat_id,` IloveYOU`)
        //   await bot.sendMessage(chat_id,` /info`)
        }
         if(text=='/info'){
            return  bot.sendMessage(chat_id, `Youre Name ${msg.from.first_name}  ${msg.from.last_name}`)
        }
         if(text=='/game'){
           return startGame(chat_id)
        }
        else{
            await bot.sendMessage(chat_id,` your massege ${text}`)
            return bot.sendMessage(chat_id,` i don't understand you`)}
            
    })
}
bot.on('callback_query', async msg=>{
    const data =msg.data;
    const chat_id=msg.message.chat.id;
    // bot.sendMessage(chat_id,` your massege ${data}`)
    if(data=='/again'){
       return startGame(chat_id)

    }
    if(data==chats[chat_id]){
        //await bot.sendMessage(chat_id,` i don't understand you`)
        return await bot.sendMessage(chat_id,` me digit - ${chats[chat_id]}`, againOptions)}


    console.log(msg)
    console.log(chats[chat_id])

})
start()
// document.querySelector('button').onclick = function(){
//     let massage=document.querySelector('.massege').value;
  
//     let url ='https://api.telegram.org/bot'+token+'/sendMessage?chat_id=-856175878&text='
//     let xhttp= new XMLHttpRequest();
//     xhttp.open("get",url+massage,true)
//     xhttp.send();
//     massage.clear
// }