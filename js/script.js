console.log("Hello Walkover");
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