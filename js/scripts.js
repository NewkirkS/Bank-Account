//Back End
function Account (name, deposit) {
  this.accountName = name;
  this.accountBalance = deposit;
}
Account.prototype.withdraw = function(withdrawl){
  if(withdrawl > 0){
    this.accountBalance = this.accountBalance - withdrawl;
    if(this.accountBalance < 0){
      this.accountBalance = this.accountBalance -(withdrawl + 4000);
    }
      this.accountBalance = Math.ceil(this.accountBalance * 100) / 100;
    }
  else{
    alert("bad")
  }
}//end withdraw prototype

Account.prototype.deposit = function(deposit){
  if(deposit > 0){
    if(this.accountBalance < 0){
      this.accountBalance = this.accountBalance + deposit/20;
    }
    else{
      this.accountBalance = this.accountBalance + deposit;
    }
  }
  else{
    alert("bad")
  }
  this.accountBalance = Math.ceil(this.accountBalance * 100) / 100;
}//end deposit prototype
//Front End
$(function(){
  $("form#depositForm").submit(function(event){
    event.preventDefault();
  var accountName =  $("input#user-name").val();
  var initialDeposit =  parseFloat($("input#initial-deposit").val());
  var newAccount = new Account(accountName, initialDeposit);
  $("#clickableName").append("<li class='accountHolders'>" + accountName + "</li>");
  $(".accountHolders").last().click(function() {
    $("#withdrawButton").off();
    $("#depositButton").off();
    $("#results").text("$" + newAccount.accountBalance);
    $("#withdrawButton").click(function(){
      var withdrawl = parseFloat($("#withdrawl").val());
      newAccount.withdraw(withdrawl);
      if(newAccount.accountBalance < 0){
        $("form").addClass("shake-hard");
        $("h1").addClass("shake-hard");
        $("#results").addClass("red");
        $("h1").addClass("red");
        $("h1").text("WELCOME TO HELLS FARGO");
        $("body").addClass("hell");
      }
      $("#results").text("$" + newAccount.accountBalance);
      $("input").val("");
    });
    $("#depositButton").click(function(){

      var deposit = parseFloat($("#deposit").val());
      newAccount.deposit(deposit);
      if(newAccount.accountBalance > 0){
        $("form").removeClass("shake-hard");
        $("h1").removeClass("shake-hard");
        $("#results").removeClass("red");
        $("h1").removeClass("red");
        $("h1").text("Welcome to Wells Fargo");
        $("body").removeClass("hell");
      }
      $("#results").text("$" + newAccount.accountBalance);
      $("input").val("");
    });
  });


  $("#results").text("$" + newAccount.accountBalance);
  $("input").val("");
  });
});
