const name="AMAN";
const age="23";

let balance="4200";

// function updatebalance(value){
// balance+=value;
// }
// updatebalance(1)
// console.log(balance)

// while(true){
//     console.log(20)} //*Kaise Malum Chalega is code ke wajah se site crash ho gaya

//*Problem1- kaun se code ke changr hua jiske karan site crash hui to purane wale code me revert karna padega na to wo kaun sa code hai malum hona chhaiye
//*Problem2- Ownership of code pata hona chhaiye kisne code likha hai
//*Chalo aisa samjho- ek bande ko baitha lete hai wo tracker ka kaam karega kaunsa code kisne likha isse malum chal jayega na kaun sa code kisne likha aur kitne baje likha kya change kiya sab
//*Tracking ka kaam git note kar rha hai 
//* 1pm-code likha 2pm-code likha 3pm-code 4pm code likha 5pm code likha 6pm-code likha
//* website crash to git 5 baje wale code me auto revert kar deta hai

//*Git har important code change (commit) ko ek alag version ke form me store karta hai — jaise time-based snapshots.
//* 🔄 Socho aise:Agar tum 1 baje code likhte ho aur commit karte ho:git commit -m "Added login feature"
//* 🔹 Git uss waqt ka pura code ek snapshot (version) ke form me save kar leta hai.
//* Phir tum 2 baje aur changes karte ho aur dubara commit karte ho:git commit -m "Fixed login bug"
//* 🔹 Git ab ek naya version create karta hai — jo pehle version se linked hota hai.

//* Jaise time-1pm commit message-first commit version(commit id)=a1b2c3

 let one=3455;
 let sabji="dhaniya";

function balancechecker(){
    //
}

//* ✅ 1. git init

// *Ye command current folder ko Git repository bana deta hai.
//* git init-📦 Creates a hidden .git/ folder.

//* ✅ 2. git add → Stage file

//* Git me koi bhi file direct commit nahi hoti.
//* Pehle use “stage” karna padta hai:
// *git add filename     # ek specific file
//* git add .            # sabhi changes ko stage me lao 🟡 “Staging” = Final commit ke liye ready karna

//* ✅ 3. git status → Check kya ho raha hai-git status
// 	*•	🔴 Red → Not staged (only modified)
// *	•	🟢 Green → Staged (ready to commit)

//*✅ 4. git commit → Save a snapshot-git commit -m "Meaningful message"
//*💡 Commit sirf staged files ka snapshot save karta hai.
//*✅ 5. git diff → Dekho kya badla hai
//*🔍 Dikhata hai unstaged changes (jo git add ke baad nahi aaye)

// *✅ 6. File ko Stage se hataana (undo git add)
//* Galti se add kar diya? git restore --staged filename 🧽 Ye sirf stage se hatata hai, file delete nahi hoti.
//* ⚠️ Agar sirf staging se hataana hai, file ko delete nahi karna:
//* git restore --staged Day01/first.js

let fame="1234";