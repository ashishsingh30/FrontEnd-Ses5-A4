var Employee =[ {name:"Ashish", age:"23", Salary:"333000", 
Address:{City:"Gandhinagar", State:"Gujarat", Pincode:"382016"}
               },
			    {name:"Jon", age:"29", Salary:"393000", 
Address:{City:"Gwalior", State:"Madhya Pradhesh", Pincode:"502016"}
               },
			    {name:"Ron", age:"27", Salary:"337000", 
Address:{City:"Shimla", State:"Himachal Pradhesh", Pincode:"205678"}
               },
			    {name:"Jack", age:"21", Salary:"433000", 
Address:{City:"Hyderabad", State:"Telangana", Pincode:"500081"}
               },
			    {name:"Joe", age:"24", Salary:"733000", 
Address:{City:"Pune", State:"Maharasthra", Pincode:"389016"}
               }
			   ];
console.log("Name : "+Employee[2].name);
console.log("Age : "+Employee[2].age);
console.log("Salary : "+Employee[2].Salary);
console.log("City : "+Employee[2].Address.City);
console.log("State : "+Employee[2].Address.State);
console.log("Pincode : "+Employee[2].Address.Pincode);