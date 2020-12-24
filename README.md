# ts-blockchain

install
yarn init
yarn global add typescript

tsconfig.json 에서 설정 해주기
index.ts(json에서 설정한 타겟 파일) 작성하기 
터미널에서 tsc or npx tsc 실행->컴파일
index.js생성 실행 시작

-> 자동으로 실행되게 package.json에 start prestart 설정해주기 

ts 
function argument 개수 틀리면 에러 
function (a, b , c?) ->  c is optional 

function(a:string, b:number, c:boolean)

function return 지정
function(a:string, b:number, c:boolean):void=>{

}
function(a:string, b:number, c:boolean):string=>{
 return "hi"   
}

interface -> ts만 가능하고 js에서는 불가능 ! class로 하면 된당!! 
