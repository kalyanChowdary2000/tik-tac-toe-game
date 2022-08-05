var m=[['-','-','-'],['-','-','-'],['-','-','-']];
console.log("enter matrix locations");

  var text;
  var c=0;
var f=1;
var b=1;
import  boxen from 'boxen';
import  chalk from "chalk";
import ReadLine from 'readline';
const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
   
   };
var y=()=>{
    for(let i=0;i<3;i++){
        if((m[i][0]==m[i][1])&&(m[i][1]==m[i][2])&&(m[i][0]!='-')){
            if(m[i][0]=='x'){console.log(boxen( "player1", boxenOptions ));}
            else{console.log(boxen( "player2", boxenOptions ));}
            i=9;
            c=99;
        }
        else if(((m[0][0]==m[1][1])&&(m[1][1]==m[2][2])&&(m[1][1]!='-'))||((m[0][2]==m[1][1])&&(m[1][1]==m[2][0]))&&(m[1][1]!='-')){
            if(m[i][0]=='x'){console.log(boxen( "player1", boxenOptions ));}
            else{console.log(boxen( "player2", boxenOptions ));}
            i=9;
            c=99;
        }
    }
    if(c!=9){
    for(let i=0;i<3;i++){
        if((m[0][i]==m[1][i])&&(m[1][i]==m[2][i])&&(m[0][i]!='-')){
            if(m[0][i]=='x'){console.log(boxen( "player1", boxenOptions ));}
            else{console.log(boxen( "player2", boxenOptions ));}
            c=99;
            i=9;
        }
    }
}
    
}
const doSomethingAsync = () => {
   // console.log("hi");
    return new Promise(resolve => {
        const rl = ReadLine.createInterface({
            input: process.stdin,
            output: process.stdout
          });
        rl.question('',text=>{
           // console.log("im here",text);
            switch(text){
                case '1':
                    {if(m[0][0]=='-'){
                    if(b==0){
                    m[0][0]='x';}
                    else{m[0][0]='0'}}
                    else{console.log("already given");
                f--;}
                y();}
                    break;
                case '2':
                    {if(m[0][1]=='-'){
                        if(b==0){
                        m[0][1]='x';}
                        else{m[0][1]='0'}}
                        else{console.log("already given");
                    f--;}y();}
                    break;
                case '3':
                    {if(m[0][2]=='-'){
                        if(b==0){
                        m[0][2]='x';}
                        else{m[0][2]='0'}}
                        else{console.log("already given");
                    f--;}y();}
                    break;
                case '4':
                    {if(m[1][0]=='-'){
                        if(b==0){
                        m[1][0]='x';}
                        else{m[1][0]='0'}}
                        else{console.log("already given");
                    f--;}y();}
                    break;
                case '5':
                    {if(m[1][1]=='-'){
                        if(b==0){
                        m[1][1]='x';}
                        else{m[1][1]='0'}}
                        else{console.log("already given");
                    f--;}y();}
                    break;
                case '6':
                    {if(m[1][2]=='-'){
                        if(b==0){
                        m[1][2]='x';}
                        else{m[1][2]='0'}}
                        else{console.log("already given");
                    f--;}y();}
                    break;
                case '7':
                    {if(m[2][0]=='-'){
                        if(b==0){
                        m[2][0]='x';}
                        else{m[2][0]='0'}}
                        else{console.log("already given");
                    f--;}y();}
                    break;
                case '8':
                    {if(m[2][1]=='-'){
                        if(b==0){
                        m[2][1]='x';}
                        else{m[2][1]='0'}}
                        else{console.log("already given");
                    f--;}y();}
                    break;
                case '9':
                    {if(m[2][2]=='-'){
                        if(b==0){
                        m[2][2]='x';}
                        else{m[2][2]='0'}}
                        else{console.log("already given");
                    f--;}y();}
                    break;
                default:
                    {
                        console.log("you entered wrong location");
                        f--;
                    }
                    break;
            }

            rl.close();
            resolve("1");
    
      
        });
    });
  }
  
  const doSomething = async () => {
      while(c<9){
        if(b==0){b=1}else{b=0};
        if(f==0){c--;f=1;if(b==0){b=1}else{b=0};}
          
          
          c++;
          //console.log(c);

    await doSomethingAsync();
    //console.log(m);
    
        console.table([{0:m[0][0],1:m[0][1],2:m[0][2]},{0:m[1][0],1:m[1][1],2:m[1][2]},{0:m[2][0],1:m[2][1],2:m[2][2]}])
            //console.log(m[p][0],'\t',m[p][1],'\t',m[p][2]);
           if(c==9)
           {
            console.log(boxen( "MATCH TIED", boxenOptions ));
           }

}
}
  
  //console.log('Before');
  doSomething();