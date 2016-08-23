//Back End
function Account (name, deposit) {
  this.accountName = name;
  this.accountBalance = deposit;
}
Account.prototype.withdraw = function(withdrawl){
  this.accountBalance = this.accountBalance - withdrawl;
  if(this.accountBalance < 0){
    this.accountBalance = this.accountBalance -(withdrawl + 4000);
  }
    this.accountBalance = Math.ceil(this.accountBalance * 100) / 100;
}
Account.prototype.deposit = function(deposit){
  if(this.accountBalance < 0){
    this.accountBalance = this.accountBalance + deposit/20;
  }
  else{
    this.accountBalance = this.accountBalance + deposit;
  }
  this.accountBalance = Math.ceil(this.accountBalance * 100) / 100;
}
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
      $("#results").text("$" + newAccount.accountBalance);
      $("input").val("");
    });
    $("#depositButton").click(function(){
      var deposit = parseFloat($("#deposit").val());
      newAccount.deposit(deposit);
      $("#results").text("$" + newAccount.accountBalance);
      $("input").val("");
    });
  });

  $("#results").text("$" + newAccount.accountBalance);
  $("input").val("");
  });
});
