function calc(){
  // railsのビューファイルから、各入力・出力フォームのIDを取得している
  const total_payment = document.getElementById("total-payment");
  const total_people = document.getElementById("total-people");
  
  const group_people_one = document.getElementById("group-people-one");
  const group_price_one = document.getElementById("group-price-one");

  const group_people_two = document.getElementById("group-people-two");
  const group_price_two = document.getElementById("group-price-two");

  const group_people_three = document.getElementById("group-people-three");
  const group_price_three = document.getElementById("group-price-three");

  const indivisible_number = document.getElementById('indivisible-number');
  // railsのビューファイルから、各入力・出力フォームのIDを取得している

  // 総支払額を打ち込むと、グループ１の（残った人たちの）一人当たりの支払額が表示される
  total_payment.addEventListener('keyup', () => {
    let people_value = total_people.value;
    let people_two_value = group_people_two.value;

    let people_three_value = group_people_three.value;
    
    let people = people_value - people_two_value - people_three_value;
    group_people_one.textContent = people;

    let payment_value = total_payment.value;
    let price_two_value = group_price_two.value;
    let price_three_value = group_price_three.value;

    let payment = (payment_value - ((price_two_value * people_two_value) + (price_three_value * people_three_value))) / people;
    payment_cell = Math.ceil(payment/100)*100;
    group_price_one.textContent =  payment_cell

    formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
    indivisible_number.textContent =  (formula - payment_value);
  });
  // 総支払額を打ち込むと、グループ１の（残った人たちの）一人当たりの支払額が表示される


  // 総人数を打ち込むと、グループ１の（残った人たちの）人数が表示される
  total_people.addEventListener('keyup', () => {
    let people_value = total_people.value;
    let people_two_value = group_people_two.value;

    let people_three_value = group_people_three.value;
    
    let people = people_value - people_two_value - people_three_value;
    group_people_one.textContent = people;

    let payment_value = total_payment.value;
    let price_two_value = group_price_two.value;
    let price_three_value = group_price_three.value;

    let payment = (payment_value - ((price_two_value * people_two_value) + (price_three_value * people_three_value))) / people;
    payment_cell = Math.ceil(payment/100)*100;
    group_price_one.textContent =  payment_cell

    formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
    indivisible_number.textContent =  (formula - payment_value);
    
  });
   // 総人数を打ち込むと、グループ１の（残った人たちの）人数が表示される


  // グループ2（料金が確定している人たち）の人数を打ち込むと、グループ１の（残った人たちの）人数が表示される
  group_people_two.addEventListener('keyup', () => {
    let people_value = total_people.value;
    let people_two_value = group_people_two.value;

    let people_three_value = group_people_three.value;
    
    let people = people_value - people_two_value - people_three_value;
    group_people_one.textContent = people;

    let payment_value = total_payment.value;
    let price_two_value = group_price_two.value;
    let price_three_value = group_price_three.value;

    let payment = (payment_value - ((price_two_value * people_two_value) + (price_three_value * people_three_value))) / people;
    payment_cell = Math.ceil(payment/100)*100;
    group_price_one.textContent =  payment_cell

    formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
    indivisible_number.textContent =  (formula - payment_value);
    
  });
  // グループ2（料金が確定している人たち）の人数を打ち込むと、グループ１の（残った人たちの）人数が表示される


  // グループ2（料金が確定している人たち）の一人当たりの支払額を打ち込むと、グループ１の（残った人たちの）一人当たりの支払額が表示される
  group_price_two.addEventListener('keyup', () => {
    let people_value = total_people.value;
    let people_two_value = group_people_two.value;

    let people_three_value = group_people_three.value;
    
    let people = people_value - people_two_value - people_three_value;
    group_people_one.textContent = people;

    let payment_value = total_payment.value;
    let price_two_value = group_price_two.value;
    let price_three_value = group_price_three.value;

    let payment = (payment_value - ((price_two_value * people_two_value) + (price_three_value * people_three_value))) / people;
    payment_cell = Math.ceil(payment/100)*100;
    group_price_one.textContent =  payment_cell

    formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
    indivisible_number.textContent =  (formula - payment_value);
    
  });
  // グループ2（料金が確定している人たち）の一人当たりの支払額を打ち込むと、グループ１の（残った人たちの）一人当たりの支払額が表示される

  // グループ3（料金が確定している人たち）の人数を打ち込むと、グループ１の（残った人たちの）人数が表示される
  group_people_three.addEventListener('keyup', () => {
    let people_value = total_people.value;
    let people_two_value = group_people_two.value;

    let people_three_value = group_people_three.value;
    
    let people = people_value - people_two_value - people_three_value;
    group_people_one.textContent = people;

    let payment_value = total_payment.value;
    let price_two_value = group_price_two.value;
    let price_three_value = group_price_three.value;

    let payment = (payment_value - ((price_two_value * people_two_value) + (price_three_value * people_three_value))) / people;
    payment_cell = Math.ceil(payment/100)*100;
    group_price_one.textContent =  payment_cell

    formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
    indivisible_number.textContent =  (formula - payment_value);
    
  });
  // グループ3（料金が確定している人たち）の人数を打ち込むと、グループ１の（残った人たちの）人数が表示される

  // グループ3（料金が確定している人たち）の一人当たりの支払額を打ち込むと、グループ１の（残った人たちの）一人当たりの支払額が表示される
  group_price_three.addEventListener('keyup', () => {
    let people_value = total_people.value;
    let people_two_value = group_people_two.value;

    let people_three_value = group_people_three.value;
    
    let people = people_value - people_two_value - people_three_value;
    group_people_one.textContent = people;

    let payment_value = total_payment.value;
    let price_two_value = group_price_two.value;
    let price_three_value = group_price_three.value;

    let payment = (payment_value - ((price_two_value * people_two_value) + (price_three_value * people_three_value))) / people;
    payment_cell = Math.ceil(payment/100)*100;
    group_price_one.textContent =  payment_cell

    formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
    indivisible_number.textContent =  (formula - payment_value);
  });
  // グループ3（料金が確定している人たち）の一人当たりの支払額を打ち込むと、グループ１の（残った人たちの）一人当たりの支払額が表示される

  
 
 }
 window.addEventListener("load", calc);