var expanded = false;

function Move(block, direction) {
    var itemScroller = document.getElementById(block);
    if (direction === "left") {
        itemScroller.scrollLeft -= 1000;
    } else if (direction === "right") {
        itemScroller.scrollLeft += 1000;
    } else alert("error");
}

function Expand(block, button) {
    if (!expanded) {
        document.getElementById(button).setAttribute('style', 'transform: rotate(180deg)');
        document.getElementById(block).setAttribute('style', 'grid-template-rows: 1fr;');
        expanded = true;
    } else {
        document.getElementById(button).setAttribute('style', 'transform: rotate(45deg)');
        document.getElementById(block).setAttribute('style', 'grid-template-rows: 0fr;');
        expanded = false;
    }
}
