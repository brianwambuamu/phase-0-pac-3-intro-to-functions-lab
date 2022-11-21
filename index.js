function shout(string){
   return string.toUpperCase();
}
shout("hello")

function whisper(string) {
   return string.toLowerCase();
}
whisper("hello");

function logShout(string) {
   console.log("hello".toUpperCase())
}
logShout();

function logWhisper(string) {
   console.log("hello".toLowerCase());
}
logWhisper();

function sayHiToHeadphonedRoommate(string) {
   if(string === string.toLowerCase()){
      return 'I can\'t hear you!';
   }
   else if(string === string.toUpperCase()){
      return'YES INDEED!';
   }
   else{
      return 'I would love to!'
   }
}
sayHiToHeadphonedRoommate("Hello")