//Back End
function Account (name, deposit) {
  this.accountName = name;
  this.accountBalance = deposit;
}
//Front End
$(function(){
  $("form#depositForm").submit(function(event){
    event.preventDefault();
  var accountName =  $("input#user-name").val();
  var initialDeposit =  parseFloat($("input#initial-deposit").val());
  var newAccount = new Account(accountName, initialDeposit);
  console.log(newAccount);
  $("#results").text("$"+newAccount.accountBalance);
  });
});
