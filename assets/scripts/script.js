let likesText, dislikesText;
const likesContent = '&#127822; &#127828; &#9917; &#127952; &#127936; &#129461; &#127928; &#128021 &#128665; &#128250;';
const dislikesContent = '&#129324; &#128545; &#128555 &#128008; &#129326; &#128580;';

document.getElementById('likes').onmouseenter = function () {
    likesText = this.textContent;
    this.innerHTML = likesContent;
};

document.getElementById('likes').onmouseleave = function () {
    this.innerHTML = likesText;
};

document.getElementById('dislikes').onmouseenter = function () {
    likesText = this.textContent;
    this.innerHTML = dislikesContent;
};

document.getElementById('dislikes').onmouseleave = function () {
    this.innerHTML = likesText;
};