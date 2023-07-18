// // 1-Vazifa  Map va methodlari---set,get,size,delete,clear,has;

// // 1-misol

// // ---set
// let fruits=new Map();
// fruits.set('apple','15000 som');
// fruits.set('banana','4000 som');
// fruits.set('pear','12000 som');
// fruits.set('cherry','9000 som');

// // ----get
// fruits.get('apple'); //log

// // --size
// fruits.size;  //log

// // ----delete
// // fruits.delete('apple');

// // ----clear
// // fruits.clear()

// // ----has
// // fruits.has('nok'); //log

// // 2-misol

// // ---set
// const compyuter= new Map()
// compyuter.set('Acer','i7');
// compyuter.set('HP','i5');
// compyuter.set('Samsung','i7');
// compyuter.set('Msi leopard','i7');

// // get
// compyuter.get('aser'); //log

// // ---size
// compyuter.size //log

// // delete
// compyuter.delete('HP');

// // clear
// // compyuter.clear();

// // has
// // compyuter.has();

// // 3-misol

// // ---set
// let ball=new Map();
// ball.set('Nozima',5);
// ball.set('Akbar',4);
// ball.set('Komil',5);
// ball.set('Bobur',3);

// // --- get
// ball.get('Akbar'); //log

// // ---size
// ball.size  //log

// // ---delete
// ball.delete('Bobur');

// // clear
// // ball.clear();

// // ---has
// ball.has('Nozima');

// // 4-misol

// // ---set
// var region= new Map()
// region.set("Farg'ona",12);
// region.set("Andijon",14);
// region.set("Namangan",11);
// region.set("Jizzax",15);

// // --get
// region.get("Farg'ona"); //log

// // ---size
// region.size  //log

// // ---delete
// region.delete('Andijon');

// // ---clear
// // region.clear();

// // --- has
// region.has('Xorazm'); //log

// // 5-misol

// // --set
// let food=new Map();
// food.set('Osh',"30000 so'm");
// food.set("Sho'rva","25000 so'm");
// food.set('Norn',"35000 so'm");
// food.set('Lagmon',"30000 so'm");
// food.set('jiz',"50000 so'm");

// // ---get
// food.get('Norn'); //log

// // size
// food.size  //log

// // ---delete
// food.delete("Sho'rva");

// // ---clear
// // food.clear();

// // ---has
// food.has("Manti"); //log

// // 6-misol

// // ---set
// let color=new Map();
// color.set("yellov",2);
// color.set("green",3);
// color.set("blue",4);
// color.set("red",1);

// // ---get
// color.get("green");//log

// // ---size
// color.size  //log

// // ---delete
// color.delete("red");

// // ---clear
// // color.clear();

// // ---has
// color.has("white");

// // 7-misol

// // --set
// const person=new Map();
// person.set("Hushnoza",9);
// person.set("Shahrizoda",9);
// person.set("Shukron",7);
// person.set("Mubina",7);
// person.set("Ruxshona",10);
// person.set("Imona",4);
// person.set("Madina",6);

// // ---get
// person.get("Imona"); //log

// // ----size
// person.size  //log

// // ---delete
// person.delete("Madina");

// // ---clear
// // person.clear();

// // ---has
// person.has("Nodira"); //log

// // 8-misol

// // ---set
// let programm=new Map();
// programm.set(1,"colculator");
// programm.set(2,"telegram");
// programm.set(3,"facebook");
// programm.set(4,"instagram");
// programm.set(5,"youtube");

// // ---get
// programm.get(1); //log

// // size
// programm.size   //log

// // ---delete
// programm.delete(5);

// // --clear
// // programm.clear();

// // ---has
// programm.has(8);//log

// // 9-misol

// // --set
// let bank=new Map();
// bank.set(1,"Islom banki");
// bank.set(2,"Investitsiya banki");
// bank.set(3,"Tijorat qurilish");
// bank.set(4,"Tashqi bank");

// // ---get
// bank.get(1); //log

// // ---size
// bank.size  //log

// // ---delet
// bank.delete(4);

// // ---clear
// // bank.clear();

// // has
// bank.has(3); //log

// // 10-misol

// // ---set
// const week=new Map();
// week.set(1,"Monday");
// week.set(2,"Tuesday");
// week.set(3,"Wednesday");
// week.set(4,"Thursday");
// week.set(5,"Friday");
// week.set(6,"Saturday");
// week.set(7,"Sunday");

// // ---get
// week.get(5); //log

// // size
// week.size  //log

// // delete
// week.delete(2);

// // --clear
// // week.clear();

// // has
// week.has(2);

// 2- Vazifa DOM va methdlari

// console.dir(document);
console.log(document.all);
// console.log(document.domain);
// console.log(document.URL);
// let htmlTag=document.all
// console.log(htmlTag);
// let mavzu=htmlTag[5]
// console.log(mavzu);


// 1-misol
let h2=document.all[7];
console.log(h2.style.color='red');
console.log(h2.style.fontSize='50px');
console.log(h2.style.background='yellow');
// 2-misol
let form=document.forms
for(let i=0;i<form.length;i++){
form[i].style.fontSize='30px'
}  
console.log(form[0].style.color='red');
console.log(form[1].style.color='blue');
console.log(form[2].textContent='forms');

// 3-misol
let link=document.links;
for(let i=0; i<link.length;i++){
 link[i].textContent='linklar uchun';
console.log(link[0].style.fontSize='10px');
console.log(link[1].style.color='red');
console.log(link[2].style.marginLeft ='10px');
}

// 4-misol
let iShrift=document.all[14]
console.log(iShrift.style.fontSize="30px");
console.log(iShrift.style.color="yellow");
console.log(iShrift.style.background="black");
console.log(iShrift.textContent='hello !!!');
 
