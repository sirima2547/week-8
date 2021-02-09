let gen = prompt ("Please enter value of generation:");

if(gen>=2540 && gen<=2564)
{
   if(gen>2553 && gen<=2564){
       alert(gen + " = GenAlpha");
       console.log("Gen Alpha");
       document.getElementById("hContent").innerHTML="Gen Alpha";
    }
   else(gen>=2540 && gen<=2553)
    {
       alert(gen + " = Gen");
       console.log("Gen Z");
       document.getElementById("hContent").innerHTML="Gen Z";
    }
}

else if(gen>=2523 && gen<=2540)
{
    console.log("Gen Y Generation");
    alert(mark + " Gen Y Generation");
    document.getElementById("hContent").innerHTML="Gen Y Generation";
}
else if(gen>=2508 && gen<=2522)
{
    console.log("Gen X Generation");
    alert(mark + " Gen X Generation");
    document.getElementById("hContent").innerHTML="Gen X Generation";
}
else if(gen>=2489 && gen<=2507)
{
    console.log("Baby Generation");
    alert(mark + " Baby Generation");
    document.getElementById("hContent").innerHTML="Baby Generation";
}
else if(gen>=2468 && gen<=2488)
{
    console.log("Silent Generation");
    alert(mark + " Silent Generation");
    document.getElementById("hContent").innerHTML="Silent Generation";
}
else if(gen>=2444 && gen <=2467)
{
    console.log("Greatest Generation");
    alert(mark + "Greatest Generation");
    document.getElementById("hContent").innerHTML="Greatest Generation";
}
else{
    console.log("ERROR");
    alert(gen + " =ERROR");
    document.getElementById("hContent2").innerHTML="ERROR";
}
