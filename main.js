const inputTextarea = document.querySelector("#input-textarea");
const outputTextarea = document.querySelector("#output-textarea");

const corr = [
  ['aa', 'aq'],['Aa', 'Aq'],['AA', 'AQ'],
  ['ii', 'iq'],['Ii', 'Iq'],['II', 'IQ'],
  ['uu', 'uq'],['Uu', 'Uq'],['UU', 'UQ'],
  ['ee', 'eq'],['Ee', 'Eq'],['EE', 'EQ'],
  ['oo', 'oq'],['Oo', 'Oq'],['OO', 'OQ'],

  ['th', 'l' ],['Th', 'L' ],
  ['ch', 'c' ],['Ch', 'C' ],

  ['tl', 'vl'],['Tl', 'Vl'],['TL', 'VL'],
  ['cc', 'vc'],['Cc', 'Vc'],['CC', 'VC'],
  ['zz', 'vz'],['Zz', 'Vz'],['ZZ', 'VZ'],
  ['ss', 'vs'],['Ss', 'Vs'],['SS', 'VS'],
  ['dd', 'vd'],['Dd', 'Vd'],['DD', 'VD'],
  ['rr', 'vr'],['Rr', 'Vr'],['RR', 'VR'],
  ['ff', 'vf'],['Ff', 'Vf'],['FF', 'VF'],
  ['tt', 'vt'],['Tt', 'Vt'],['TT', 'VT'],
  ['gg', 'vg'],['Gg', 'Vg'],['GG', 'VG'],
  ['bb', 'vb'],['Bb', 'Vb'],['BB', 'VB'],
  ['hh', 'vh'],['Hh', 'Vh'],['HH', 'VH'],
  ['nn', 'vn'],['Nn', 'Vn'],['NN', 'VN'],
  ['nn', 'vn'],['Nn', 'Vn'],['NN', 'VN'],
  ['jj', 'vj'],['Jj', 'Vj'],['JJ', 'VJ'],
  ['mm', 'vm'],['Mm', 'Vm'],['MM', 'VM'],
  ['kk', 'vk'],['Kk', 'Vk'],['KK', 'VK'],
  ['pp', 'vp'],['Pp', 'Vp'],['PP', 'VP']
];

function convertLatinToYuqnaria() {
  let text = inputTextarea.value;
  for(let i = 0; i < corr.length; i++) {
    const re = new RegExp(corr[i][0], "g");
    text = text.replace(re, corr[i][1]);
  }
  text = text.replace(/(T|C)H/g, "$1");
  outputTextarea.value = text;
}

function convertYuqnariaToLatin() {
  let text = inputTextarea.value;
  for(let i = 0; i < corr.length; i++) {
    const re = new RegExp(corr[i][1], "g")
    text = text.replace(re, corr[i][0]);
  }
  text = text.replace(/(T|C)h([A-Z])/g, "$1H$2"),
  outputTextarea.value = text;
}

const latinToYuqnariaButton = document.querySelector("#latin-to-yuqnaria");
latinToYuqnariaButton.addEventListener("click", convertLatinToYuqnaria);
const yuqnariaToLatinButton = document.querySelector("#yuqnaria-to-latin");
yuqnariaToLatinButton.addEventListener("click", convertYuqnariaToLatin);
const copyButton = document.querySelector("#copy-output");
copyButton.addEventListener("click", () => {
  console.log(outputTextarea.value);
  navigator.clipboard.writeText(outputTextarea.value);
  copyButton.textContent = "コピーしました！";
  setTimeout(() => {copyButton.textContent = "結果をコピー"}, 1000);
});
console.log(corr);
