function inPut(num){
    let input = document.getElementById('input');
    input.innerText += num;
}

function calculate(n1, op, n2) {
    let input = document.getElementById('input');
    let result = 0;
    n1 = Number(n1);
    n2 = Number(n2);
  
    if(op === '+'){
      result = parseFloat(n1)+parseFloat(n2);
      input.innerText += result;
    }
    else if(op === '-'){
      result = parseFloat(n1)-parseFloat(n2);
      input.innerText += result;
    }
    else if(op === '×'){
      result = parseFloat(n1)*parseFloat(n2);
      input.innerText += result;
    }
    else if(op === '÷'){
      result = parseFloat(n1)/parseFloat(n2);
      input.innerText += result;
    }
    return String(result);
  }

function clickEqual() {
    const textarea = document.querySelector('#input').innerText;
    let exp = textarea.split(/([+\-×÷])/);
    let n1 = exp[0].trim();
    let op = exp[1].trim();
    let n2 = exp[2].trim();
    if (exp.length > 3) {
        alert("식이 두개 이상 입력됨(추후 구현 예정)")
        return 0;
    }
    else if (n1 === '' || n2 === '' || op === '') {
        textarea = "식을 입력해주세요.";
        return;
    }
    let result = calculate(n1, op, n2);
    document.querySelector('#input').innerText = result;
}

function clickClear() {
    document.querySelector('#input').innerText = '';
}