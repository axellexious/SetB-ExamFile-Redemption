function grade() {
    var eng = document.getElementById("englishh").value;
    var mat = document.getElementById("mathh").value;
    var fil = document.getElementById("filipinoo").value;
    var pe = document.getElementById("pee").value;
    var sci = document.getElementById("sciencee").value;

    eng = parseInt(eng);
    mat = parseInt(mat);
    fil = parseInt(fil);
    pe = parseInt(pe);
    sci = parseInt(sci);


    if (eng <= 100 && eng >= 90)
    {
        document.querySelector("#engRemark").textContent="Average";
    }
    else if (eng <= 89 && eng >= 80)
    {
        document.querySelector("#engRemark").textContent="Back to Studies";
    }
    else if (eng <= 79 && eng >= 70)
    {
        document.querySelector("#engRemark").textContent="Mediocre";
    }
    else if (eng <= 69 && eng >= 60)
    {
        document.querySelector("#engRemark").textContent="Don't come Home";
    }
    else if (eng <= 51 && eng >= 0)
    {
        document.querySelector("#engRemark").textContent="Find new Family";
    }


    if (mat <= 100 && mat >= 90)
    {
        document.querySelector("#maRemark").textContent="Average";
    }
    else if (mat <= 89 && mat >= 80)
    {
        document.querySelector("#maRemark").textContent="Back to Studies";
    }
    else if (mat <= 79 && eng >= 70)
    {
        document.querySelector("#maRemark").textContent="Mediocre";
    }
    else if (mat <= 69 && mat >= 60)
    {
        document.querySelector("#maRemark").textContent="Don't come Home";
    }
    else if (mat <= 51 && mat >= 0)
    {
        document.querySelector("#maRemark").textContent="Find new Family";
    }

    
     if (fil <= 100 && fil >= 90)
     {
         document.querySelector("#filRemark").textContent="Average";
     }
     else if (fil <= 89 && fil >= 80)
     {
         document.querySelector("#filRemark").textContent="Back to Studies";
     }
     else if (fil <= 79 && fil >= 70)
     {
         document.querySelector("#filRemark").textContent="Mediocre";
     }
     else if (fil <= 69 && fil >= 60)
     {
         document.querySelector("#filRemark").textContent="Don't come Home";
     }
     else if (fil <= 51 && fil >= 0)
     {
         document.querySelector("#filRemark").textContent="Find new Family";
     }


    if (pe <= 100 && pe >= 90)
    {
        document.querySelector("#pRemark").textContent="Average";
    }
    else if (pe <= 89 && pe >= 80)
    {
        document.querySelector("#pRemark").textContent="Back to Studies";
    }
    else if (pe <= 79 && pe >= 70)
    {
        document.querySelector("#pRemark").textContent="Mediocre";
    }
    else if (pe <= 69 && pe >= 60)
    {
        document.querySelector("#pRemark").textContent="Don't come Home";
    }
    else if (pe <= 51 && pe >= 0)
    {
        document.querySelector("#pRemark").textContent="Find new Family";
    }


     if (sci <= 100 && sci >= 90)
     {
         document.querySelector("#sciRemark").textContent="Average";
     }
     else if (sci <= 89 && sci >= 80)
     {
         document.querySelector("#sciRemark").textContent="Back to Studies";
     }
     else if (sci <= 79 && sci >= 70)
     {
         document.querySelector("#sciRemark").textContent="Mediocre";
     }
     else if (sci <= 69 && sci >= 60)
     {
         document.querySelector("#sciRemark").textContent="Don't come Home";
     }
     else if (sci <= 51 && sci >= 0)
     {
         document.querySelector("#sciRemark").textContent="Find new Family";
     }


    if (mat <= 100 && mat >= 90 && sci <= 100 && sci >= 90 && eng <= 100 && eng >= 90 && fil <= 100 && fil >= 90 && pe <= 100 && pe >= 90)
    {
        document.getElementById("rank").textContent = "Top Honor"
    }
    else if (sci <= 69 && sci >= 0 && pe <= 69 && pe >= 0 && fil <= 69 && fil >= 0 && mat <= 69 && mat >= 0 && eng <= 69 && eng >= 0)
     {
         document.getElementById("rank").textContent="Repeater";
     }
    else if ((mat <= 100 && mat >= 90 && sci <= 100 && sci >= 90 && pe <= 100 && pe >= 90) || (mat <= 100 && mat >= 90 && sci <= 100 && sci >= 90 && fil <= 100 && fil >= 90) ||(mat <= 100 && mat >= 90 && sci <= 100 && sci >= 90 && eng <= 100 && eng >= 90) || (mat <= 100 && mat >= 90 && fil <= 100 && fil >= 90 && pe <= 100 && pe >= 90) || (mat <= 100 && mat >= 90 && eng <= 100 && eng >= 90 && pe <= 100 && pe >= 90) || (mat <= 100 && mat >= 90 && fil <= 100 && fil >= 90 && eng <= 100 && eng >= 90) || (fil <= 100 && fil >= 90 && sci <= 100 && sci >= 90 && pe <= 100 && pe >= 90) || (eng <= 100 && eng >= 90 && sci <= 100 && sci >= 90 && pe <= 100 && pe >= 90) || (eng <= 100 && eng >= 90 && sci <= 100 && sci >= 90 && fil <= 100 && fil >= 90) ||(eng <= 100 && eng >= 90 && fil <= 100 && fil >= 90 && pe <= 100 && pe >= 90) )
    {
        document.getElementById("rank").textContent="Second Honor";
    }
    else
     {
         document.getElementById("rank").textContent="No Rank";
     }
}
function getName(){
    var getName = prompt("Name:");
    
    if (getName != null)
    {
        document.getElementById("stdName").innerHTML = "Student Name:" + " " + getName;
    }
}
