let likesTexst, dislikesTexst;

function changeBackground(color) {
    if (color > 8 || color < 6) {
        let colorChangebleItems = Array.prototype.slice.call(document.getElementsByClassName('color-changeble'));
        colorChangebleItems.forEach((element) => {
            element.style.backgroundColor = `rgb(${color * 16}, ${color * 16}, ${color * 16})`;
            element.style.color = `rgb(${255 - color * 16}, ${255 - color * 16}, ${255 - color * 16})`;
        });
    }
}

window.onload = changeBackground(3);

document.getElementById('likes').onmouseenter = function () {
    likesTexst = this.textContent;
    this.innerHTML = '&#127822; &#127828; &#9917; &#127952; &#127936; &#129461; &#127928; &#128021 &#128665; &#128250;';
};

document.getElementById('likes').onmouseleave = function () {
    this.innerHTML = likesTexst;
};

document.getElementById('dislikes').onmouseenter = function () {
    dislikesTexst = this.textContent;
    this.innerHTML = '&#129324; &#128545; &#128555 &#128008; &#129326; &#128580;';
};

document.getElementById('dislikes').onmouseleave = function () {
    this.innerHTML = dislikesTexst;
};