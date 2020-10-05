function calc(){
  const total_payment = document.getElementById("total-payment");
  const total_people = document.getElementById("total-people");
  const group_people_one = document.getElementById("group-people-one");
  const group_price_one = document.getElementById("group-price-one");
  const group_people_two = document.getElementById("group-people-two");
  const group_price_two = document.getElementById("group-price-two");

  group_people_two.addEventListener('keyup', () => {
    const people_value = total_people.value;
    const people_two_value = group_people_two.value;
    
    let people = people_value - people_two_value;
    group_people_one.textContent = people;
  });

  group_price_two.addEventListener('keyup', () => {
    const payment_value = total_payment.value;
    const price_two_value = group_price_two.value;
    const people_two_value = group_people_two.value;
    
    let payment = payment_value - price_two_value * people_two_value;
    group_price_one.textContent = payment;
    
  });
 
 }
 window.addEventListener("load", calc);