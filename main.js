
function getParagrph1()
{
    var inputs=[];
    for (var i= 1; i<6; i++)
    {
        inputs.push(document.getElementById("para1_input_" + i).value);
    }
    document.getElementById("showPara1").innerHTML = inputs.join(". ");
}


function getParagrph2()
{
    var inputs=[];
    for (var i= 1; i<6; i++)
    {
        inputs.push(document.getElementById("para2_input_" + i).value);
    }
    document.getElementById("showPara2").innerHTML = inputs.join(". ");
}