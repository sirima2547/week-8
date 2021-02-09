//let num ="Mark";
//console.log(num);
//document.getElementById("hContent").innerHTML=num;
//let mark = 70;
let mark = prompt ("Please enter your mark:");
if(mark>=80 && mark <=100)
{
    console.log("Grade A");
    alert(mark + "Grade A");
    document.getElementById("hContent").innerHTML="Grade A";
}
else if(mark>=70 && mark<80)
{
    console.log("Grade B");
    alert(mark + " Grade B");
    document.getElementById("hContent").innerHTML="Grade B";
}
else if(mark>=60 && mark<70)
{
    console.log("Grade C");
    alert(mark + " Grade C");
    document.getElementById("hContent").innerHTML="Grade C";
}
else if(mark>=50 && mark<60)
{
    console.log("Grade D");
    alert(mark + " Grade D");
    document.getElementById("hContent").innerHTML="Grade D";
}
else if(mark>=0 && mark<50)
{
    console.log("Grade F");
    alert(mark + " Grade F");
    document.getElementById("hContent").innerHTML="Grade F";
}
else{
    console.log("ERROR");
    alert(mark + " =ERROR");
    document.getElementById("hContent2").innerHTML="ERROR";
}
