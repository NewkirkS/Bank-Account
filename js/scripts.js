//Back End
function Account (name, deposit) {
  this.accountName = name;
  this.accountBalance = deposit;
}
Account.prototype.withdraw = function(withdrawl){
  this.accountBalance = this.accountBalance - withdrawl
}
Account.prototype.deposit = function(deposit){
  this.accountBalance = this.accountBalance + deposit
}
//Front End
$(function(){
  $("form#depositForm").submit(function(event){
    event.preventDefault();
  var accountName =  $("input#user-name").val();
  var initialDeposit =  parseFloat($("input#initial-deposit").val());
  var newAccount = new Account(accountName, initialDeposit);
  $("#withdrawButton").click(function(event){
    var withdrawl = parseFloat($("#withdrawl").val());
    newAccount.withdraw(withdrawl);
    $("#results").text("$"+newAccount.accountBalance);
  });
  $("#depositButton").click(function(event){
    var deposit = parseFloat($("#deposit").val());
    newAccount.deposit(deposit);
    $("#results").text("$"+newAccount.accountBalance);
  });
  $("#results").text("$"+newAccount.accountBalance);
  });
});
