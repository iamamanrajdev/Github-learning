//*GIT IS VERY IMP DONT MEMORIZE IT INTERNALLY SAMJHO
let name ="aman";
let age=90;
let year=2025;
let late=230;

function updatebalance(){
    balance+=30;

}
updatebalance();
console.log(balance);
//*---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//*TO JAISE HM LOG FIRSTCOMMIT PHIR SECOND COMMIT PHIR THIR COMMIT KIYA TO YE SARE KO MASTER BRANCH BOLTE HAI
//*AUR JO LATEST COMMIT HOTA HAI USPE HEAD REHTA HAI
//*aur ye sare branch apne parent per depend hote hai third to second se modify hoke hi na bana hoga
//*------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//*1-GIT LOG -SARA DETAILS DEGA KITNA COMMIT HUA
//* 2-GIT LOG --ONELINE SHORT ME COMMIT KA ID DETA HAI 
//*3-GIT SHOW lateest commit me kya kya change hua hai wo dikhayega
//*4 git show <commitid> batat hai us particula commit me kya change hua
//*--------------------------------------------------------------------------------------------------------------------------------------------------------------------
//*git reset --hard <code>
//*Ab Manlo latest commit per head hai AUR US COMMIT KE KARAN CODE FAT GAYA TO TMKO HEAD KO REVERT BACK KARKE PURANE WALEPER LANA HAI
//*SABSE PEHLE CHECK KARENGE HEAD KISPER HAI git log se then git reset --hard commit code to ye latest commit 
//*wala sara code delete ho jayega ya ni wo ek stage piche chala gaya

//*DISADVANTAGE HAI KI JIS CODE SE ISKO PICHE LE JAYENGE MAN LO THIRD COMMIT PER HAI AUR FIRST COMMIT
//*PER LEKAR JA RHE HAI TO YE THIRD SECOND SARA CODE JO CHANGE HUA HOGA DELETE KAR DEGA


//*AB MAN LO SECOND COMMIT EK WEBISE ME BUTTON ADD KIYE PHIR USKO COMMIT KIYE USKE KARAN CODE FAT GAYA TO RESET HARD KARNE PER TO BAKI SARA CODE DELETE KAREGA
//*HMKO TO SIRF BUTTON WALA CODE DELETE KARNA HAI
//*---------------------------------------------------------------------------------------------------------------------------------------------------
//*Git revert
//*ISKO ACHIEVE KARENE KE LIYE GIT REVERT USE KARENGE 
//*git revert commit id
//*ye bhi new commit bana ta hai jis commit se button hatana tha wo button wala code hatake baki ka code is naye commit me dalega purni wali history
//*delete nai hoti isliye new commit per wo buton wala code hatake baki ka is new waleme dal dega
//*--------------------------------------------------------------------------------------------------------------------------------------------
//*Concept of BRANCHING
//* MAN LO EK WEBISTE LIVE CHAL RHA HAI AB TMHE USPER PAYMENT GATEWAY ADD KARNA HAI
// *WEBISTE TO MASTER BRANCH KE CODE ME COMMIT HAI USKA AB TM WAHA JAKE PAYMENT GATEWAY KA CODE LIKHOGE 4-5 DIN 
// *TO JAYEGA HI TO MAIN BRANCH PER LIKHOGE TO WO WEBSITE PER BHI DIKHEGA ACCHA ABHI YE COMPANY
//* PAYMENT GATEWAY ME CHANGE KAR RAHI DOOSRA CASE TM PAYMENT GATEWAY ADD KAR RAHE HO TMHARE TEAM KA DUSRA BANDA 
// *KOI BUTTON KAR RHA PHIR TMHAE PAYMENT GATEWAY KE CODE ME KUCH ISSUE HO GAYA TO TMHE POORA CODE REVERT YA RESET KARNA PADEGA
//* POORA MASTER BRANCH KA CODE LENGTHY HO JAYEGA

//* ISLIYE MASTERBRANCH TMHE YE POWER DETA HAI EK KAM HAI TU APNA PAYMENT GATEWAY MAIN APNA BRANCH KA COPY
//* BANA KE DE RHA HU USME APNA CODE LIKH JO BHI ERROR HAI SOLVE KAR PHIT JAB SAHI CHALEGA TO WO CODE MERE 
//* ME MERGE KARDE .

console.log("aman") 
//*-----------------------------------------------------------------------------------------------------------
//*git checkout -b name se new branch create hoga
//*jo bhi change karna hai delete karna hai isme hoga  commit karte jao 
//*check kar lo kaun se branch me ho gitbranch type karke
//*phir git merge se feature branch master branch ke sath merge kardo done
//*-------------------------------------------------------------------------------------------------------------------
console.log("main hun merge conflict") //*merge karna haigit
console.log("main hoon don")

//*merge conflict
//*pehle git checkout  -b file name karke branch create karo 
//*phir usme jo change karna hai karo phir git checkout master karke master me switch ho jao
//*phir git merge ka use karo then merge conflict aata hai to tm dekho kaun sa call lena hai

//*------------------------------------------------------------------------------------------------------------------------------
//*How to delete branches
//*git branch -D feature file name
//*---------------------------------------------------------------------------------------------------------------------------


