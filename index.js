//var katzDeli = [];
var servingCounter = 0;

function takeANumber(katzDeliLine){
  //katzDeliLine.push(name);
  //var tempLineNum = katzDeliLine.indexOf(name, 0) + 1;
  
  
  //CODE HAS CHANGED DURING TECHNICAL INTERVIEW ON 05JUNE2018 1040-11AM;
  //Parameter "name" has been deleted;
  //New array contains the number of people served throughout the day and not names of people;
  //Function now returns the number a person has rather than their name and place in line;
  
  
  servingCounter++;
  katzDeliLine.push(servingCounter);
  return "Welcome, you are number " + servingCounter + ".";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length >= 1){
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
  
  return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length >= 1){
    var tempString = "The line is currently: ";
    var i = 0;
    var j = 1;
    var k = katzDeliLine.length; //will be used to test for last or only item
    
    while (i < katzDeliLine.length){
      if(k === 1){
        tempString = tempString + j + ". " + katzDeliLine[i];
      }
      else {
        tempString = tempString + j + ". " + katzDeliLine[i] + ", ";
      }
      i++;
      j++;
      k--;
    }
    return tempString;
  }
  else {
    return "The line is currently empty.";
  }
}
