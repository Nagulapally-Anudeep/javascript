// //for loop
// // for(let i=0;i<5;i++)
// // {
// // 	console.log("in loop:",i);
// // }
// // console.log('loop finished');

// //const names=['itachi','sasuke','naruto','madara'];
// // for(let i=0;i<names.length;i++)
// // {
// // 	console.log(`names ${i+1}:`,names[i]);
// // }
// // let i=0;
// // while(i<names.length)
// // {
// // 	console.log(`names ${i+1}: ${names[i]}`);
// // 	i++;
// // }
// // //do while loop
// // let j=5;
// // do{
// // 	console.log(`value of j is:${j}`);
// // 	j++;
// // }while(j<5);
// let age=25;
// if(age>20)
// {
// 	console.log('you are above 20yrs');
// }
// const password='itac@';
// if(password.length>12 &&password.includes('@'))
// {
// 	console.log('password is very long enough');
// }else if(password.length>=8||password.includes('@')){
// 	console.log('password is long enough');
// }
// else{
// 	console.log('password is not long enough');
// }

// let user=false;
// if(!user)
// {
// 	console.log('u must enter the details to continue');
// }
// //break
// const scores=[20,30,0,67.9,100,99];
// for(let i=0;i<scores.length;i++)
// {   if(scores[i]===0)
// 	{
// 		console.log('no problem');
// 		continue;
// 	}
// 	console.log('your score is:',scores[i]);
// 	if(scores[i]===100)
// 	{
// 		console.log('congrats!!');
// 		break;
// 	}
// }
 
//  //switch statement
// let grade='A';
// switch(grade)
// {
// 	case 'A':
// 	console.log('your grade is A');
// 	break;
// 	case 'B':
// 	console.log('your grade is B');
// 	break;
// 	case 'c':
// 	console.log('your grade is c');
// 	break;
// 	case 'd':
// 	console.log('your grade is d');
// 	break;
// 	default:
// 	console.log('invalid');
// }

// //functions
// function greet()
// {
// 	console.log('hi there!!');
// }
 
// greet();

// let  speak=function(){
// 	console.log('good mrng');
// } 
// speak();
// //
// const calcArea=function(radius){
//    let a=3.14*radius**2;
//    return a;
// };
// const area=calcArea(5)+1.5;
// console.log(area);
// //arrow functions
// const calcVolume=(area,h)=>{
//    return area*h;
// };
// const v=calcVolume(area,5);
// console.log(v);

// //practice arrow func
// const reet=()=>'hi,there';
// let a=reet();
// console.log(a);

// const bill=(products,tax)=>{
// 	let total=0;
// 	for(let i=0;i<products.length;i++){
// 		total +=products[i]+products[i]*tax;
// 	}
// 	return total;
// }

// console.log(bill([10,20],0.9));

/*const greet=()=>'hi';
let result1=greet();
console.log(result1);
//methods
let name='sasuke';
let result2=name.toUpperCase();
console.log(result2);
*/

// //callback
// const myfunc=(view)=>{
//    let value=50;
//    view(value);
// };

// myfunc(a=> {console.log(a);}
// 	);
// const ul=document.querySelector('.people');
// let html=``;
// let people=['sasuke','itachi','naruto','madara'];
// people.forEach(person =>{
//     //create html template
//     html+=`<li style="color:purple">${person}</li>`;
//     // console.log(html);  
// });
// console.log(html);
// ul.innerHTML = html;

// //object literals
// const blogs=[
//    {title:'fire and blood', likes:90},
//    {title:'the mangekyo sharingan', likes:990}
// ];
// console.log(blogs);



// let user={
// 	name: 'anudeep',
// 	age:18,
// 	email:'nanudeep408@gmail.com',
// 	location:'kurnool',
// 	blogs:[   {title:'fire and blood', likes:90},
//               {title:'the mangekyo sharingan', likes:990}],
// 	login(){
// 		console.log('user logged in');
// 	},
// 	logout(){
// 		console.log('user logged out');
// 	},
// 	logblogs(){
// 		console.log('this user has written the following blogs:');
// 		this.blogs.forEach(part=>{
// 			console.log(part.title,part.likes,'likes');
// 		});
// 	}

// };
// //console.log(user);
// // console.log(user['email']);

// // console.log(typeof user);

// // user.login();

// user.logblogs();

//Math object

// console.log(Math);
// const s=9.865;
// console.log(Math.round(s));
// console.log(Math.floor(s));
// console.log(Math.ceil(s));

// const random=Math.random();
// console.log(random);
// console.log(Math.round(random *1000));

// let scoreOne=30;
// let scoreTwo=scoreOne;
// console.log(`scoreOne: ${scoreOne} scoreTwo:${scoreTwo}`);
// scoreOne=200;

// console.log(`scoreOne: ${scoreOne} scoreTwo:${scoreTwo}`);
// const userOne={name:'Anudeep',age:18};
// const userTwo=userOne;
// console.log(userOne,userTwo);
// userOne.age=19;
// console.log(userOne,userTwo);

// const para=document.querySelector('body > div:nth-child(4) > p.error ');

// console.log(para);

// const paras=document.querySelectorAll('p');
// console.log(paras[1]);

// //get an element by id
// const title=document.getElementById('page-title');
// console.log(title);
// //get an element by class
// const errors=document.getElementsByClassName('error');
// console.log(errors);

//get elements by tag name
// const paras=document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[2]);

// const para=document.querySelector('p');
// para.innerText +=' hii';

// const content=document.querySelector('.content');
// content.innerHTML='<h2 style="color: red">I am anudeep</h2>'

// console.log(content);

// const people=['sasuke','itachi','madara'];

// people.forEach(person =>{
// 	content.innerHTML+=`<p>${person}</p>`;
// });
// const link=document.querySelector('a');

// console.log(link.getAttribute('href'));
 
//  link.setAttribute('href','https://www.facebook.com');
//  link.innerText='facebook';

//  link.setAttribute('style','color:magenta;');
//  const msg=document.querySelector('p');
//  console.log(msg.getAttribute('class'));
//  msg.setAttribute('style','color:red ;font-family:cursive');
// //msg.setAttribute('style','font-family:cursive;')
// const head=document.querySelector('h1');
// console.log(head.style.color);
// head.style.margin='50px';

// const para=document.querySelector('p');

// console.log(para.classList);
// para.classList.add('error');
// para.classList.remove('error');
// const paras=document.querySelectorAll('p');

// paras.forEach(para =>{
// 	if(para.textContent.includes('error'))
// 		{para.classList.add('error');
//         }
// 	if(para.innerText.includes('success'))
// 		{para.classList.add('success');
//         }
// });

// const clik=document.querySelector('h1');

// //objects
// let orc={
// 	color:"green",
// 	height:5,
// 	weight:180,
// 	stomachFull:true,
// 	yell:function(){
// 		document.write('sharingan is the best')
// 	}
// };
// document.write(orc.stomachFull);

// console.log(orc.height);

// document.write(orc.weight);
// orc.yell();


// let hello="Hello how are you doing";

// //string Objects in javascript
// hello =hello.toUpperCase();
// document.write(hello);
// hello=hello.charAt(22);
// document.write(hello);

// let num=4.7;
// //math object
// let newnum=9 +Math.round(num);

// document.write(newnum);

//date object
let today=new Date();

document.write(today);
























































































