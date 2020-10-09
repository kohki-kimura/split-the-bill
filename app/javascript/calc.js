function calc(){
  // railsのビューファイルから、各入力・出力フォームのIDを取得
  const total_payment = document.getElementById("total-payment");
  const total_people = document.getElementById("total-people");
  
  const group_people_one = document.getElementById("group-people-one");
  const group_price_one = document.getElementById("group-price-one");
  const group_ratio_one = document.getElementById("group-ratio-one");

  const group_people_two = document.getElementById("group-people-two");
  const group_price_two = document.getElementById("group-price-two");
  const group_ratio_two = document.getElementById("group-ratio-two");

  const group_people_three = document.getElementById("group-people-three");
  const group_price_three = document.getElementById("group-price-three");
  const group_ratio_three = document.getElementById("group-ratio-three");

  const indivisible_number = document.getElementById('indivisible-number');
  // railsのビューファイルから、各入力・出力フォームのIDを取得

  // 総支払額
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
    group_price_one.textContent =  payment_cell ;

    let ratio_two_value = group_ratio_two.value = Math.floor((((price_two_value * people_two_value) / payment_value) * 100) * 100)/100;
    let ratio_three_value = group_ratio_three.value = Math.floor((((price_three_value * people_three_value) / payment_value) * 100) * 100)/100;
    group_ratio_one.textContent = 100 - ratio_two_value - ratio_three_value ;

    formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
    indivisible_number.textContent =  (formula - payment_value);
  });
  // 総支払額


  // 総人数
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
    group_price_one.textContent =  payment_cell ;

    let ratio_two_value = group_ratio_two.value = Math.floor((((price_two_value * people_two_value) / payment_value) * 100) * 100)/100;
    let ratio_three_value = group_ratio_three.value = Math.floor((((price_three_value * people_three_value) / payment_value) * 100) * 100)/100;
    group_ratio_one.textContent = 100 - ratio_two_value - ratio_three_value ;

    formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
    indivisible_number.textContent =  (formula - payment_value);
  });
   // 総人数


  // グループ2 人数
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
    group_price_one.textContent =  payment_cell ;

    let ratio_two_value = group_ratio_two.value = Math.floor((((price_two_value * people_two_value) / payment_value) * 100) * 100)/100;
    let ratio_three_value = group_ratio_three.value = Math.floor((((price_three_value * people_three_value) / payment_value) * 100) * 100)/100;
    group_ratio_one.textContent = 100 - ratio_two_value - ratio_three_value ;

    formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
    indivisible_number.textContent =  (formula - payment_value);
  });
  // グループ2 人数


  // グループ2 料金
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
    group_price_one.textContent =  payment_cell ;

    let ratio_two_value = group_ratio_two.value = Math.floor((((price_two_value * people_two_value) / payment_value) * 100) * 100)/100;
    let ratio_three_value = group_ratio_three.value = Math.floor((((price_three_value * people_three_value) / payment_value) * 100) * 100)/100;
    group_ratio_one.textContent = 100 - ratio_two_value - ratio_three_value ;

    formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
    indivisible_number.textContent =  (formula - payment_value);
  });
  // グループ2 料金

  // グループ3 人数
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
    group_price_one.textContent =  payment_cell ;

    let ratio_two_value = group_ratio_two.value = Math.floor((((price_two_value * people_two_value) / payment_value) * 100) * 100)/100;
    let ratio_three_value = group_ratio_three.value = Math.floor((((price_three_value * people_three_value) / payment_value) * 100) * 100)/100;
    group_ratio_one.textContent = 100 - ratio_two_value - ratio_three_value ;

    formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
    indivisible_number.textContent =  (formula - payment_value);
  });
  // グループ3 人数

  // グループ3 支払額
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
    group_price_one.textContent =  payment_cell ;

    let ratio_two_value = group_ratio_two.value = Math.floor((((price_two_value * people_two_value) / payment_value) * 100) * 100)/100;
    let ratio_three_value = group_ratio_three.value = Math.floor((((price_three_value * people_three_value) / payment_value) * 100) * 100)/100;
    group_ratio_one.textContent = 100 - ratio_two_value - ratio_three_value ;

    formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
    indivisible_number.textContent =  (formula - payment_value);
  });
  // グループ3 支払額

  // グループ2 比率(keyup)
  group_ratio_two.addEventListener('keyup', () => {
    let people_value = isNaN(total_people.value) ? 0 : Number(total_people.value);                    // 総人数
    let payment_value = isNaN(total_payment.value) ? 0 : Number(total_payment.value);                 // 総支払額
    let people_two_value = isNaN(group_people_two.value) ? 0 : Number(group_people_two.value);        // グループ2の人数
    let price_two_value = isNaN(group_price_two.value) ? 0 : Number(group_price_two.value);           // グループ2の金額
    let ratio_two_value = isNaN(group_ratio_two.value) ? 0 : Number(group_ratio_two.value);           // グループ2のパーセント
    let price_three_value = isNaN(group_price_three.value) ? 0 : Number(group_price_three.value);     // グループ3の金額
    let people_three_value = isNaN(group_people_three.value) ? 0 : Number(group_people_three.value);  // グループ3の人数
    let ratio_three_value = isNaN(group_ratio_three.value) ? 0 : Number(group_ratio_three.value);     // グループ3のパーセント

    if (people_two_value) {

      let people = people_value - people_two_value - people_three_value;
      group_people_one.textContent = people;                                                            // グループ1の人数(表示)

      let payment = (payment_value - ((price_two_value * people_two_value) + (price_three_value * people_three_value))) / people;
      let payment_cell = Math.ceil(payment/100)*100;
      group_price_one.textContent =  payment_cell;                                                      // グループ1の金額(表示)

      let ratio_two = ((ratio_two_value / 100) * payment_value) / people_two_value;
      let ratio_cell_two = Math.ceil(ratio_two/100)*100;
      group_price_two.value = ratio_cell_two;                                                           // グループ2の金額(表示)

          if (people_three_value) {
            let ratio_three = ((ratio_three_value / 100) * payment_value) / people_three_value;
            let ratio_cell_three = Math.ceil(ratio_three/100)*100;
            group_price_three.value = ratio_cell_three;                                                       // グループ3の金額(表示)
          }

      group_ratio_one.textContent = 100 - ratio_three_value - ratio_two_value;                          // グループ1のパーセント(表示)

      formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
      indivisible_number.textContent =  (formula - payment_value);                                      // あまり(表示)
    }
  });
  // グループ2 比率(keyup)

  // グループ2 比率(input)
  group_ratio_two.addEventListener('input', () => {
    let people_value = isNaN(total_people.value) ? 0 : Number(total_people.value);                    // 総人数
    let payment_value = isNaN(total_payment.value) ? 0 : Number(total_payment.value);                 // 総支払額
    let people_two_value = isNaN(group_people_two.value) ? 0 : Number(group_people_two.value);        // グループ2の人数
    let price_two_value = isNaN(group_price_two.value) ? 0 : Number(group_price_two.value);           // グループ2の金額
    let ratio_two_value = isNaN(group_ratio_two.value) ? 0 : Number(group_ratio_two.value);           // グループ2のパーセント
    let price_three_value = isNaN(group_price_three.value) ? 0 : Number(group_price_three.value);     // グループ3の金額
    let people_three_value = isNaN(group_people_three.value) ? 0 : Number(group_people_three.value);  // グループ3の人数
    let ratio_three_value = isNaN(group_ratio_three.value) ? 0 : Number(group_ratio_three.value);     // グループ3のパーセント

    if (people_two_value) {

      let people = people_value - people_two_value - people_three_value;
      group_people_one.textContent = people;                                                            // グループ1の人数(表示)

      let payment = (payment_value - ((price_two_value * people_two_value) + (price_three_value * people_three_value))) / people;
      let payment_cell = Math.ceil(payment/100)*100;
      group_price_one.textContent =  payment_cell;                                                      // グループ1の金額(表示)

      let ratio_two = ((ratio_two_value / 100) * payment_value) / people_two_value;
      let ratio_cell_two = Math.ceil(ratio_two/100)*100;
      group_price_two.value = ratio_cell_two;                                                           // グループ2の金額(表示)

          if (people_three_value) {
            let ratio_three = ((ratio_three_value / 100) * payment_value) / people_three_value;
            let ratio_cell_three = Math.ceil(ratio_three/100)*100;
            group_price_three.value = ratio_cell_three;                                                       // グループ3の金額(表示)
          }

      group_ratio_one.textContent = 100 - ratio_three_value - ratio_two_value;                          // グループ1のパーセント(表示)

      formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
      indivisible_number.textContent =  (formula - payment_value);                                      // あまり(表示)
    }
  });
  // グループ2 比率(input)

  // グループ3 比率(keyup)
  group_ratio_three.addEventListener('keyup', () => {
    let people_value = isNaN(total_people.value) ? 0 : Number(total_people.value);                    // 総人数
    let payment_value = isNaN(total_payment.value) ? 0 : Number(total_payment.value);                 // 総支払額
    let people_two_value = isNaN(group_people_two.value) ? 0 : Number(group_people_two.value);        // グループ2の人数
    let price_two_value = isNaN(group_price_two.value) ? 0 : Number(group_price_two.value);           // グループ2の金額
    let ratio_two_value = isNaN(group_ratio_two.value) ? 0 : Number(group_ratio_two.value);           // グループ2のパーセント
    let people_three_value = isNaN(group_people_three.value) ? 0 : Number(group_people_three.value);  // グループ3の人数
    let price_three_value = isNaN(group_price_three.value) ? 0 : Number(group_price_three.value);     // グループ3の金額
    let ratio_three_value = isNaN(group_ratio_three.value) ? 0 : Number(group_ratio_three.value);     // グループ3のパーセント

    if (people_three_value) {
    let people = people_value - people_two_value - people_three_value;
    group_people_one.textContent = people;                                                            // グループ1の人数(表示)

    let payment = (payment_value - ((price_two_value * people_two_value) + (price_three_value * people_three_value))) / people;
    let payment_cell = Math.ceil(payment/100)*100;
    group_price_one.textContent =  payment_cell;                                                      // グループ1の金額(表示)
    
    
    let ratio_three = ((ratio_three_value / 100) * payment_value) / people_three_value;
    let ratio_cell_three = Math.ceil(ratio_three/100)*100;
    group_price_three.value = ratio_cell_three;                                                       // グループ3の金額(表示)

    if (people_two_value) {
      let ratio_two = ((ratio_two_value / 100) * payment_value) / people_two_value;
      let ratio_cell_two = Math.ceil(ratio_two/100)*100;
      group_price_three.value = ratio_cell_three;                                                       // グループ2の金額(表示)
    }
  
    group_ratio_one.textContent = 100  - ratio_three_value - ratio_two_value;                         // グループ1のパーセント(表示)

    formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
    indivisible_number.textContent =  (formula - payment_value);                                      // あまり(表示)
    }
  });
  // グループ3 比率(keyup)

  // グループ3 比率(input)
  group_ratio_three.addEventListener('input', () => {
    let people_value = isNaN(total_people.value) ? 0 : Number(total_people.value);                    // 総人数
    let payment_value = isNaN(total_payment.value) ? 0 : Number(total_payment.value);                 // 総支払額
    let people_two_value = isNaN(group_people_two.value) ? 0 : Number(group_people_two.value);        // グループ2の人数
    let price_two_value = isNaN(group_price_two.value) ? 0 : Number(group_price_two.value);           // グループ2の金額
    let ratio_two_value = isNaN(group_ratio_two.value) ? 0 : Number(group_ratio_two.value);           // グループ2のパーセント
    let people_three_value = isNaN(group_people_three.value) ? 0 : Number(group_people_three.value);  // グループ3の人数
    let price_three_value = isNaN(group_price_three.value) ? 0 : Number(group_price_three.value);     // グループ3の金額
    let ratio_three_value = isNaN(group_ratio_three.value) ? 0 : Number(group_ratio_three.value);     // グループ3のパーセント

    if (people_three_value) {
    let people = people_value - people_two_value - people_three_value;
    group_people_one.textContent = people;                                                            // グループ1の人数(表示)

    let payment = (payment_value - ((price_two_value * people_two_value) + (price_three_value * people_three_value))) / people;
    let payment_cell = Math.ceil(payment/100)*100;
    group_price_one.textContent =  payment_cell;                                                      // グループ1の金額(表示)
    
    
    let ratio_three = ((ratio_three_value / 100) * payment_value) / people_three_value;
    let ratio_cell_three = Math.ceil(ratio_three/100)*100;
    group_price_three.value = ratio_cell_three;                                                       // グループ3の金額(表示)

    if (people_two_value) {
      let ratio_two = ((ratio_two_value / 100) * payment_value) / people_two_value;
      let ratio_cell_two = Math.ceil(ratio_two/100)*100;
      group_price_three.value = ratio_cell_three;                                                       // グループ2の金額(表示)
    }
  
    group_ratio_one.textContent = 100  - ratio_three_value - ratio_two_value;                         // グループ1のパーセント(表示)

    formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
    indivisible_number.textContent =  (formula - payment_value);                                      // あまり(表示)
    }
  });
  // グループ3 比率(input)

  
 
 }
 window.addEventListener("load", calc);