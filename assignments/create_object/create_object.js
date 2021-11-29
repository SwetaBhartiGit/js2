function CreateObject(arr) {
    // Write your code here
    var result={}
    arr.forEach(function(t) { result[t[0]] =t[1]; });
    return result;

}

module.exports = CreateObject;
