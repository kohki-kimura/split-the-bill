function calc(){
  // railsのビューファイルから、各入力・出力フォームのIDを取得
  const total_people = document.getElementById("total-people");                       // 総人数(ID取得)
  const total_payment = document.getElementById("total-payment");                     // 総支払額(ID取得)
  
  
  const group_people_one = document.getElementById("group-people-one");               // グループ１の人数(ID取得)
  const group_price_one = document.getElementById("group-price-one");                 // グループ１の支払額(ID取得)
  const group_ratio_one = document.getElementById("group-ratio-one");                 // グループ１の比率(ID取得)

  const group_people_two = document.getElementById("group-people-two");               // グループ2の人数(ID取得)
  const group_price_two = document.getElementById("group-price-two");                 // グループ2の支払額(ID取得)
  const group_ratio_two = document.getElementById("group-ratio-two");                 // グループ2の比率(ID取得)

  const group_people_three = document.getElementById("group-people-three");           // グループ3の人数(ID取得)
  const group_price_three = document.getElementById("group-price-three");             // グループ3の支払額(ID取得)
  const group_ratio_three = document.getElementById("group-ratio-three");             // グループ3の比率(ID取得)

  const indivisible_number = document.getElementById('indivisible-number');           // あまり(ID取得)
  // railsのビューファイルから、各入力・出力フォームのIDを取得

  // 総支払額のフォームを押した時のイベント発火
  total_payment.addEventListener('input', () => {
    if(total_payment.value){
      let people_value = total_people.value;                    // 総人数
      let payment_value = total_payment.value;                  // 総支払額
      let people_two_value = group_people_two.value;            // グループ2の人数
      let price_two_value = group_price_two.value;              // グループ2の支払額
      let people_three_value = group_people_three.value;        // グループ3の人数
      let price_three_value = group_price_three.value;          // グループ3の支払額
      
      let people = people_value - people_two_value - people_three_value;
      group_people_one.value = people;                                                            // グループ1の人数(表示)

      let payment = (payment_value - ((price_two_value * people_two_value) + (price_three_value * people_three_value))) / people;
      let payment_cell = Math.ceil(payment/100)*100;
      group_price_one.value =  payment_cell;                                                      // グループ1の支払額(表示)

        if(group_ratio_two.value || price_two_value){
        group_ratio_two.value = Math.floor((((price_two_value * people_two_value) / payment_value) * 100) * 100)/100;         // グループ2の比率(表示)
        }

        if(group_ratio_three.value || price_three_value){
        group_ratio_three.value = Math.floor((((price_three_value * people_three_value) / payment_value) * 100) * 100)/100;   // グループ3の比率(表示)
        }
      
      group_ratio_one.value = 100 - group_ratio_two.value - group_ratio_three.value;                          // グループ1の比率(表示)

      formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
      indivisible_number.value =  (formula - payment_value);                                      // あまり(表示)
    }
  });
  // 総支払額のフォームを押した時のイベント発火


  // 総人数のフォームを押した時のイベント発火
  total_people.addEventListener('input', () => {
    if(total_people.value){
      let people_value = total_people.value;                    // 総人数
      let payment_value = total_payment.value;                  // 総支払額
      let people_two_value = group_people_two.value;            // グループ2の人数
      let price_two_value = group_price_two.value;              // グループ2の支払額
      let people_three_value = group_people_three.value;        // グループ3の人数
      let price_three_value = group_price_three.value;          // グループ3の支払額
      
      let people = people_value - people_two_value - people_three_value;
      group_people_one.value = people;                                                            // グループ1の人数(表示)

      let payment = (payment_value - ((price_two_value * people_two_value) + (price_three_value * people_three_value))) / people;
      let payment_cell = Math.ceil(payment/100)*100;
      group_price_one.value =  payment_cell;                                                      // グループ1の支払額(表示)

        if(group_ratio_two.value || price_two_value){
        group_ratio_two.value = Math.floor((((price_two_value * people_two_value) / payment_value) * 100) * 100)/100;         // グループ2の比率(表示)
        }

        if(group_ratio_three.value || price_three_value){
        group_ratio_three.value = Math.floor((((price_three_value * people_three_value) / payment_value) * 100) * 100)/100;   // グループ3の比率(表示)
        }
      
      group_ratio_one.value = 100 - group_ratio_two.value - group_ratio_three.value;                          // グループ1の比率(表示)

      formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
      indivisible_number.value =  (formula - payment_value);                                      // あまり(表示)
    }
  });
   // 総人数のフォームを押した時のイベント発火


  // グループ2 人数のフォームを押した時のイベント発火
  group_people_two.addEventListener('input', () => {
    if(group_people_two.value){
      let people_value = total_people.value;                    // 総人数
      let payment_value = total_payment.value;                  // 総支払額
      let people_two_value = group_people_two.value;            // グループ2の人数
      let price_two_value = group_price_two.value;              // グループ2の支払額
      let people_three_value = group_people_three.value;        // グループ3の人数
      let price_three_value = group_price_three.value;          // グループ3の支払額
      
      let people = people_value - people_two_value - people_three_value;
      group_people_one.value = people;                                                            // グループ1の人数(表示)

      let payment = (payment_value - ((price_two_value * people_two_value) + (price_three_value * people_three_value))) / people;
      let payment_cell = Math.ceil(payment/100)*100;
      group_price_one.value =  payment_cell;                                                      // グループ1の支払額(表示)

        if(group_ratio_two.value || price_two_value){
        group_ratio_two.value = Math.floor((((price_two_value * people_two_value) / payment_value) * 100) * 100)/100;         // グループ2の比率(表示)
        }

        if(group_ratio_three.value || price_three_value){
        group_ratio_three.value = Math.floor((((price_three_value * people_three_value) / payment_value) * 100) * 100)/100;   // グループ3の比率(表示)
        }
      
      group_ratio_one.value = 100 - group_ratio_two.value - group_ratio_three.value;                          // グループ1の比率(表示)

      formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
      indivisible_number.value =  (formula - payment_value);                                      // あまり(表示)
    }
  });
  // グループ2 人数のフォームを押した時のイベント発火


  // グループ2 支払額のフォームを押した時のイベント発火
  group_price_two.addEventListener('input', () => {
    if(group_price_two.value){
      let people_value = total_people.value;                    // 総人数
      let payment_value = total_payment.value;                  // 総支払額
      let people_two_value = group_people_two.value;            // グループ2の人数
      let price_two_value = group_price_two.value;              // グループ2の支払額
      let people_three_value = group_people_three.value;        // グループ3の人数
      let price_three_value = group_price_three.value;          // グループ3の支払額
      
      let people = people_value - people_two_value - people_three_value;
      group_people_one.value = people;                                                            // グループ1の人数(表示)
  
      let payment = (payment_value - ((price_two_value * people_two_value) + (price_three_value * people_three_value))) / people;
      let payment_cell = Math.ceil(payment/100)*100;
      group_price_one.value =  payment_cell;                                                      // グループ1の支払額(表示)
  
        if(group_ratio_two.value || price_two_value){
        group_ratio_two.value = Math.floor((((price_two_value * people_two_value) / payment_value) * 100) * 100)/100;         // グループ2の比率(表示)
        }
  
        if(group_ratio_three.value || price_three_value){
        group_ratio_three.value = Math.floor((((price_three_value * people_three_value) / payment_value) * 100) * 100)/100;   // グループ3の比率(表示)
        }
      
      group_ratio_one.value = 100 - group_ratio_two.value - group_ratio_three.value;                          // グループ1の比率(表示)
  
      formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
      indivisible_number.value =  (formula - payment_value);                                      // あまり(表示)
      }
  });
  // グループ2 支払額のフォームを押した時のイベント発火


  // グループ3 人数のフォームを押した時のイベント発火
  group_people_three.addEventListener('input', () => {
    if(group_people_three.value){
      let people_value = total_people.value;                    // 総人数
      let payment_value = total_payment.value;                  // 総支払額
      let people_two_value = group_people_two.value;            // グループ2の人数
      let price_two_value = group_price_two.value;              // グループ2の支払額
      let people_three_value = group_people_three.value;        // グループ3の人数
      let price_three_value = group_price_three.value;          // グループ3の支払額
      
      let people = people_value - people_two_value - people_three_value;
      group_people_one.value = people;                                                            // グループ1の人数(表示)
  
      let payment = (payment_value - ((price_two_value * people_two_value) + (price_three_value * people_three_value))) / people;
      let payment_cell = Math.ceil(payment/100)*100;
      group_price_one.value =  payment_cell;                                                      // グループ1の支払額(表示)
  
        if(group_ratio_two.value || price_two_value){
        group_ratio_two.value = Math.floor((((price_two_value * people_two_value) / payment_value) * 100) * 100)/100;         // グループ2の比率(表示)
        }
  
        if(group_ratio_three.value || price_three_value){
        group_ratio_three.value = Math.floor((((price_three_value * people_three_value) / payment_value) * 100) * 100)/100;   // グループ3の比率(表示)
        }
      
      group_ratio_one.value = 100 - group_ratio_two.value - group_ratio_three.value;                          // グループ1の比率(表示)
  
      formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
      indivisible_number.value =  (formula - payment_value);                                      // あまり(表示)
      }
  });
  // グループ3 人数のフォームを押した時のイベント発火

  // グループ3 支払額のフォームを押した時のイベント発火
  group_price_three.addEventListener('input', () => {
    if(group_price_three.value){
      let people_value = total_people.value;                    // 総人数
      let payment_value = total_payment.value;                  // 総支払額
      let people_two_value = group_people_two.value;            // グループ2の人数
      let price_two_value = group_price_two.value;              // グループ2の支払額
      let people_three_value = group_people_three.value;        // グループ3の人数
      let price_three_value = group_price_three.value;          // グループ3の支払額
      
      let people = people_value - people_two_value - people_three_value;
      group_people_one.value = people;                                                            // グループ1の人数(表示)
  
      let payment = (payment_value - ((price_two_value * people_two_value) + (price_three_value * people_three_value))) / people;
      let payment_cell = Math.ceil(payment/100)*100;
      group_price_one.value =  payment_cell;                                                      // グループ1の支払額(表示)
  
        if(group_ratio_two.value || price_two_value){
        group_ratio_two.value = Math.floor((((price_two_value * people_two_value) / payment_value) * 100) * 100)/100;         // グループ2の比率(表示)
        }
  
        if(group_ratio_three.value || price_three_value){
        group_ratio_three.value = Math.floor((((price_three_value * people_three_value) / payment_value) * 100) * 100)/100;   // グループ3の比率(表示)
        }
      
      group_ratio_one.value = 100 - group_ratio_two.value - group_ratio_three.value;                          // グループ1の比率(表示)
  
      formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
      indivisible_number.value =  (formula - payment_value);                                      // あまり(表示)
      }
  });
  // グループ3 支払額のフォームを押した時のイベント発火

  // グループ2 比率のフォームを押した時のイベント発火(keyup)
  // group_ratio_two.addEventListener('keyup', () => {
  //   let people_value = isNaN(total_people.value) ? 0 : Number(total_people.value);                    // 総人数
  //   let payment_value = isNaN(total_payment.value) ? 0 : Number(total_payment.value);                 // 総支払額
  //   let people_two_value = isNaN(group_people_two.value) ? 0 : Number(group_people_two.value);        // グループ2の人数
  //   let price_two_value = isNaN(group_price_two.value) ? 0 : Number(group_price_two.value);           // グループ2の支払額
  //   let ratio_two_value = isNaN(group_ratio_two.value) ? 0 : Number(group_ratio_two.value);           // グループ2の比率
  //   let people_three_value = isNaN(group_people_three.value) ? 0 : Number(group_people_three.value);  // グループ3の人数
  //   let price_three_value = isNaN(group_price_three.value) ? 0 : Number(group_price_three.value);     // グループ3の支払額
  //   let ratio_three_value = isNaN(group_ratio_three.value) ? 0 : Number(group_ratio_three.value);     // グループ3の比率

  //   if (people_two_value) {

  //     let people = people_value - people_two_value - people_three_value;
  //     group_people_one.value = people;                                                            // グループ1の人数(表示)

  //     let payment = (payment_value - ((price_two_value * people_two_value) + (price_three_value * people_three_value))) / people;
  //     let payment_cell = Math.ceil(payment/100)*100;
  //     group_price_one.value =  payment_cell;                                                      // グループ1の支払額(表示)

  //     let ratio_two = ((ratio_two_value / 100) * payment_value) / people_two_value;
  //     let ratio_cell_two = Math.ceil(ratio_two/100)*100;
  //     group_price_two.value = ratio_cell_two;                                                           // グループ2の支払額(表示)

  //         if (people_three_value) {
  //           let ratio_three = ((ratio_three_value / 100) * payment_value) / people_three_value;
  //           let ratio_cell_three = Math.ceil(ratio_three/100)*100;
  //           group_price_three.value = ratio_cell_three;                                                 // グループ3の支払額(表示)
  //         }

  //     group_ratio_one.value = 100 - ratio_three_value - ratio_two_value;                          // グループ1の比率(表示)

  //     formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
  //     indivisible_number.value =  (formula - payment_value);                                      // あまり(表示)
  //   }
  // });
  // グループ2 比率のフォームを押した時のイベント発火(keyup)

  // グループ2 比率のフォームを押した時のイベント発火(input)
  group_ratio_two.addEventListener('input', () => {
    let people_value = isNaN(total_people.value) ? 0 : Number(total_people.value);                    // 総人数
    let payment_value = isNaN(total_payment.value) ? 0 : Number(total_payment.value);                 // 総支払額
    let people_two_value = isNaN(group_people_two.value) ? 0 : Number(group_people_two.value);        // グループ2の人数
    let price_two_value = isNaN(group_price_two.value) ? 0 : Number(group_price_two.value);           // グループ2の支払額
    let ratio_two_value = isNaN(group_ratio_two.value) ? 0 : Number(group_ratio_two.value);           // グループ2の比率
    let people_three_value = isNaN(group_people_three.value) ? 0 : Number(group_people_three.value);  // グループ3の人数
    let price_three_value = isNaN(group_price_three.value) ? 0 : Number(group_price_three.value);     // グループ3の支払額
    let ratio_three_value = isNaN(group_ratio_three.value) ? 0 : Number(group_ratio_three.value);     // グループ3の比率

    if (people_two_value) {

      let people = people_value - people_two_value - people_three_value;
      group_people_one.value = people;                                                            // グループ1の人数(表示)

      // let payment = (payment_value - ((price_two_value * people_two_value) + (price_three_value * people_three_value))) / people;
      // let payment_cell = Math.ceil(payment/100)*100;
      // group_price_one.value =  payment_cell;                                                      // グループ1の支払額(表示)

      let ratio_two = ((ratio_two_value / 100) * payment_value) / people_two_value;
      let ratio_cell_two = Math.ceil(ratio_two/100)*100;
      group_price_two.value = ratio_cell_two;                                                           // グループ2の支払額(表示)

          if (people_three_value) {
            let ratio_three = ((ratio_three_value / 100) * payment_value) / people_three_value;
            let ratio_cell_three = Math.ceil(ratio_three/100)*100;
            group_price_three.value = ratio_cell_three;                                                 // グループ3の支払額(表示)
          }

      group_ratio_one.value = 100 - ratio_three_value - ratio_two_value;                          // グループ1の比率(表示)

      formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
      indivisible_number.value =  (formula - payment_value);                                      // あまり(表示)
    }
  });
  // グループ2 比率のフォームを押した時のイベント発火(input)

  // グループ3 比率のフォームを押した時のイベント発火(keyup)
  // group_ratio_three.addEventListener('keyup', () => {
  //   let people_value = isNaN(total_people.value) ? 0 : Number(total_people.value);                    // 総人数
  //   let payment_value = isNaN(total_payment.value) ? 0 : Number(total_payment.value);                 // 総支払額
  //   let people_two_value = isNaN(group_people_two.value) ? 0 : Number(group_people_two.value);        // グループ2の人数
  //   let price_two_value = isNaN(group_price_two.value) ? 0 : Number(group_price_two.value);           // グループ2の支払額
  //   let ratio_two_value = isNaN(group_ratio_two.value) ? 0 : Number(group_ratio_two.value);           // グループ2の比率
  //   let people_three_value = isNaN(group_people_three.value) ? 0 : Number(group_people_three.value);  // グループ3の人数
  //   let price_three_value = isNaN(group_price_three.value) ? 0 : Number(group_price_three.value);     // グループ3の支払額
  //   let ratio_three_value = isNaN(group_ratio_three.value) ? 0 : Number(group_ratio_three.value);     // グループ3の比率

  //   if (people_three_value) {
  //   let people = people_value - people_two_value - people_three_value;
  //   group_people_one.value = people;                                                            // グループ1の人数(表示)

  //   let payment = (payment_value - ((price_two_value * people_two_value) + (price_three_value * people_three_value))) / people;
  //   let payment_cell = Math.ceil(payment/100)*100;
  //   group_price_one.value =  payment_cell;                                                      // グループ1の支払額(表示)
    
    
  //   let ratio_three = ((ratio_three_value / 100) * payment_value) / people_three_value;
  //   let ratio_cell_three = Math.ceil(ratio_three/100)*100;
  //   group_price_three.value = ratio_cell_three;                                                       // グループ3の支払額(表示)

  //     if (people_two_value) {
  //       let ratio_two = ((ratio_two_value / 100) * payment_value) / people_two_value;
  //       let ratio_cell_two = Math.ceil(ratio_two/100)*100;
  //       group_price_three.value = ratio_cell_three;                                                     // グループ2の支払額(表示)
  //     }
  
  //   group_ratio_one.value = 100  - ratio_three_value - ratio_two_value;                         // グループ1の比率(表示)

  //   formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
  //   indivisible_number.value =  (formula - payment_value);                                      // あまり(表示)
  //   }
  // });
  // グループ3 比率のフォームを押した時のイベント発火(keyup)

  // グループ3 比率のフォームを押した時のイベント発火(input)
  group_ratio_three.addEventListener('input', () => {
    let people_value = isNaN(total_people.value) ? 0 : Number(total_people.value);                    // 総人数
    let payment_value = isNaN(total_payment.value) ? 0 : Number(total_payment.value);                 // 総支払額
    let people_two_value = isNaN(group_people_two.value) ? 0 : Number(group_people_two.value);        // グループ2の人数
    let price_two_value = isNaN(group_price_two.value) ? 0 : Number(group_price_two.value);           // グループ2の支払額
    let ratio_two_value = isNaN(group_ratio_two.value) ? 0 : Number(group_ratio_two.value);           // グループ2の比率
    let people_three_value = isNaN(group_people_three.value) ? 0 : Number(group_people_three.value);  // グループ3の人数
    let price_three_value = isNaN(group_price_three.value) ? 0 : Number(group_price_three.value);     // グループ3の支払額
    let ratio_three_value = isNaN(group_ratio_three.value) ? 0 : Number(group_ratio_three.value);     // グループ3の比率

    if (people_three_value) {
    let people = people_value - people_two_value - people_three_value;
    group_people_one.value = people;                                                            // グループ1の人数(表示)

    let payment = (payment_value - ((price_two_value * people_two_value) + (price_three_value * people_three_value))) / people;
    let payment_cell = Math.ceil(payment/100)*100;
    group_price_one.value =  payment_cell;                                                      // グループ1の支払額(表示)
    
    
    let ratio_three = ((ratio_three_value / 100) * payment_value) / people_three_value;
    let ratio_cell_three = Math.ceil(ratio_three/100)*100;
    group_price_three.value = ratio_cell_three;                                                       // グループ3の支払額(表示)

      if (people_two_value) {
        let ratio_two = ((ratio_two_value / 100) * payment_value) / people_two_value;
        let ratio_cell_two = Math.ceil(ratio_two/100)*100;
        group_price_three.value = ratio_cell_three;                                                     // グループ2の支払額(表示)
      }
  
    group_ratio_one.value = 100  - ratio_three_value - ratio_two_value;                         // グループ1の比率(表示)

    formula = (payment_cell * people) + (price_two_value * people_two_value) + (price_three_value * people_three_value);
    indivisible_number.value =  (formula - payment_value);                                      // あまり(表示)
    }
  });
  // グループ3 比率のフォームを押した時のイベント発火(input)

  
 
 }
 window.addEventListener("load", calc);