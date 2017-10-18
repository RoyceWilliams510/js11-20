/*** Created by h205p2 on 9/29/17. By Royce Williams
 */
function tester() {

    document.getElementById("output").innerHTML = evenlySpaced(4,2,6);
    //document.getElementById("output").innerHTML = firstLast6(true, false);
    //test third method, etc
}
// this function returns true if 6 is the first or last digit of the array
function firstLast6(ints){
    var index = ints;
    if( index[0]==6){
        return true;
    }
    if( index[index.length-1]==6){
        return true;
    }else{
        return false;
    }
}
//if this array contains a 2 or 3 it returns true
function has23(ints){
    var index = ints;
    if(index[0]==2|| index[1]==2) {
        return true;
    }
    if(index[0]==3||index[1]== 3){
        return true;
    }else{
        return false;
    }
}
// if a 2 is followed by a 3 the 3 is rewritten as a 0 in the returned array
function fix23(ints){
    if(ints[0]==2 && ints[1]==3){
        ints[1] = 0;
        return ints;
    }
    if(ints[1]==2&& ints[2]==3){
        ints[2]=0;
        return ints;
    }else{
        return ints;
    }
}

//This function counts the ammount of words ending in a y or z and returns the number of words.
function countYZ(word) {
    var x = 0;
    var i=0;
    word= word.toLowerCase()
    if(word.endsWith("y")||word.endsWith("z")) {
        x+=1;
    }
    if(word.endsWith("Y")||word.endsWith("Z")) {
        x+=1;
    }
    while(i<word.length) {
        if (word[i] === (" "))
            if(word[i-1]=== ("y")|| word[i-1] === ("z")) {
                    x += 1;
                }else if(word[i-1] === ("Y") || word[i-1] === ("Z")) {
                    x += 1;
            }
            i +=1;
        }
    return x;
}
//This function checks if one of the strings ends with the other string then returns true if it does.
function endOther(word, other){
    word = word.toLowerCase();
    other= other.toLowerCase();
    if(word.endsWith(other)){
        return true;
    }
    if(other.endsWith(word)){
        return true;
    }
    return false;
}

//This function seaches a string for a * then deletes the * and its adjacent characters in the returned string
function starOut(word) {
    var i = 0;
    var answer = "";
    while(i<word.length) {
        if(word[i]!= "*" && word[i+1] != "*" && word[i-1]!= "*") {
            answer += word[i];
        }
        i++;
    }
    return answer;
}
// This function returns what is inbetween the first and last appearences of the word bread.
function getSandwich(sando) {
    var bread = sando.indexOf("bread");
    var top = sando.lastIndexOf("bread");
    if(bread ==top){
        return "";
    }
    return sando.substring(bread + 5, top);
}
//This function returns true if the array if there is a space you can divide the array into two sections that has equal sums.
function canBalance(numbers){
    var sum1 = 0;
    var sum2= 0;
    for(var i =0; i<numbers.length; i ++) {
        sum1 +=numbers[i];
        for (var j = i + 1; j < numbers.length; j++) {
            sum2 += numbers[j];
        }
        if (sum1 === sum2) {
            return true;
            }
        sum2 = 0;
    }
    return false;
}
//This function seaches an array for adjacent numbers or "clumps" then returns the number of clumps in it.
function countClumps(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            for (var j = i + 1; j < array.length; j++) {
                if (array[j] != array[i]) {
                    count+=1;
                    i=j;
                }
            }
            if(count==0){
                return 1;
            }
        }
    }
    return count;
}
// This function checks to see if the 3 numbers in the array are evenly spaced out and returns true if they are.
function evenlySpaced(a,b,c) {
    if(b-a==a-c){
        return true
    }else if(c-a==a-b){
        return true
    }else if(a-b==b-c) {
        return true;
    }else if(a-c==c-b) {
        return true;
    }else if(c-b== b-a) {
        return true;
    }else if(b-c==c-a){
        return true;
    }
    else {
        return false;
    }
}
