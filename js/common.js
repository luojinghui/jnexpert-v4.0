/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/9/28
 * Time: 下午6:06
 */
function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

function closeModel(loginModel) {
    var model = document.getElementById(loginModel);
    console.log(model);

    model.style.display = "none";
}

function openModel(openModel) {
    document.getElementById(openModel).style.display = "block";
}
