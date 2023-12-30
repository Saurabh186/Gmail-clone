console.log("Hello Walkover, My Javascript code is working fine...");
/**
 * This function take two arguments "id" of element and display property want to set on element
 * 
 * @param {*} id 
 * @param {*} cssValue
 */
function toggle(id, cssValue = 'block'){
    const ref = document.getElementById(id);
    
    if(ref.style.display === 'none'){
        ref.style.display = cssValue;
    } else{
        ref.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(element){
        return new bootstrap.Tooltip(element);
    });
});

document.addEventListener("DOMContentLoaded", function(){
    // Placement of tooltip on top
    var tipTop = document.getElementById("tipTop");
    var tooltipTop = new bootstrap.Tooltip(tipTop, { 
        placement : "top" 
    });

    // Placement of tooltip on right
    var tipRight = document.getElementById("tipRight");
    var tooltipRight = new bootstrap.Tooltip(tipRight, { 
        placement : "right" 
    });
    
    // Placement of tooltip on bottom
    var tipBottom = document.getElementById("tipBottom");
    var tooltipBottom = new bootstrap.Tooltip(tipBottom, { 
        placement : "bottom" 
    });

    // Placement of tooltip on left
    var tipLeft = document.getElementById("tipLeft");
    var tooltipLeft = new bootstrap.Tooltip(tipLeft, { 
        placement : "left" 
    });
});
