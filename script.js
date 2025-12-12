//////// DO NOT EDIT BELOW THIS LINE ////////////////
/////////////////////////////////////////////////////

let
	Admin = ["Fowlkes", "Lynch", "Woodham", "Stahl", "Peter"],
	CTE = ["Alphonse", "Donahue", "Santana", "Vaduva", "Woods", "Shams", "Urena"],
	History = ["McQuilkin", "Amell", "Hablenko", "Schmidt", "Headlem", "Lucas", "Smith"],
	Counselor = ["Grant", "Weaver"],
	Maths = ["Freck", , "Ventimiglia"],
	Gym = ["Banta", "Proper", "Moll", "Murray"],
	Dean = ["Frazier", "Vaduva", "Mollison"],
	Language = ["Levystone", "Ortiz", "Stratman", "Vaduva", "Streeter", "Weaver"],
	Science = ["Koelsch", "Willet", "Lagana", "Fonrose"],
	English = ["Brown", "DelValle", "Duran", "Griszell", "King", "Fonrose", "Constant"],
	Office = ["Verley"],
	Support = ["Kabir", "Minto"],
	SSC = ["Stephine"];

//////// DO NOT EDIT ABOVE THIS LINE ////////////////
/////////////////////////////////////////////////////

////////// MAKE YOUR UPDATES WITHIN THIS SECTION //// 
Admin.splice(4, 2);  
Admin.splice(3, 1);
Admin.splice(0, 1);
Admin.push("simpkins")




Office.push("mr.marinez")
Office.push("mike")
Office.push("tirido")

Counselor.push("slater")
Counselor.push("cooper")
Counselor.push("molina")

Counselor.splice(0, 2);  




CTE.push("pelzer")
CTE.splice(1, 2);
CTE.splice(1, );
CTE.push("pelzer")
CTE.push("piere")
CTE.push("frazer")
CTE.push("ramswak")
CTE.push("shams")

History.splice(0, 2); 
History.splice(0, 2); 
History.push("urena")
History.push("rodriguez")
History.push("amell")
Maths = Maths.filter(name => name !== "Ventimiglia");

Maths.push("wong")
Maths.push("steel")
Maths.push("minto")
Maths.push("koelsh")
Maths.push("forth")


Gym.splice(1, 2);
Gym.splice(1, 2);
Gym.push("Macalary")





Dean.splice(Dean.indexOf("Vaduva"), 1);

Language.splice(0, Language.length);
Language.push("valejo")
Language.push("weaver")
Language.push("nowakowski")

Science.splice(1, 2);
Science.splice(1, 2);
Science.splice(0, );
Science.push("Simpkins")
Science.push("Lynch")
Science.push("Davies")
Science.push("Kabir")

English.splice(0, 8);
English.push("Grant")
English.push("Taveras")
English.push("Sherman")
English.push("Gomez")
English.push("Slater")
English.push("Grizell")

Support.splice(0, 2);
Support.unshift("david")
Support.push("Jay")
Support.push("Griffen")

SSC.splice(0, 8);
SSC.push("ricardo")






































/////////////////////////////////////////////////////
//////// DO NOT EDIT BELOW THIS LINE ////////////////
/////////////////////////////////////////////////////

const STAFF = [Admin, Office, Counselor, CTE, History, Maths, Gym, Dean, Language, Science, English, Support, SSC];

e("table").innerHTML = createTableCotents();
