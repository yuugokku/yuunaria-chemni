const inputTextarea = document.querySelector("#input-textarea");
const outputTextarea = document.querySelector("#output-textarea");

const corr = [
  // 長母音
  [/aa/g, 'aq'],[/Aa/g, 'Aq'],[/AA/g, 'AQ'],
  [/ii/g, 'iq'],[/Ii/g, 'Iq'],[/II/g, 'IQ'],
  [/uu/g, 'uq'],[/Uu/g, 'Uq'],[/UU/g, 'UQ'],
  [/ee/g, 'eq'],[/Ee/g, 'Eq'],[/EE/g, 'EQ'],
  [/oo/g, 'oq'],[/Oo/g, 'Oq'],[/OO/g, 'OQ'],

  // 二文字で転写される子音
  [/th/g, 'l'],[/Th/gi, 'L'],
  [/ch/g, 'c'],[/Ch/gi, 'C'],

  // 長子音
  [/tl/g, 'vl'],[/Tl/g, 'Vl'],[/TL/g, 'VL'],
  [/cc/g, 'vc'],[/Cc/g, 'Vc'],[/CC/g, 'VC'],
  [/zz/g, 'vz'],[/Zz/g, 'Vz'],[/ZZ/g, 'VZ'],
  [/ss/g, 'vs'],[/Ss/g, 'Vs'],[/SS/g, 'VS'],
  [/dd/g, 'vd'],[/Dd/g, 'Vd'],[/DD/g, 'VD'],
  [/rr/g, 'vr'],[/Rr/g, 'Vr'],[/RR/g, 'VR'],
  [/ff/g, 'vf'],[/Ff/g, 'Vf'],[/FF/g, 'VF'],
  [/tt/g, 'vt'],[/Tt/g, 'Vt'],[/TT/g, 'VT'],
  [/gg/g, 'vg'],[/Gg/g, 'Vg'],[/GG/g, 'VG'],
  [/bb/g, 'vb'],[/Bb/g, 'Vb'],[/BB/g, 'VB'],
  [/hh/g, 'vh'],[/Hh/g, 'Vh'],[/HH/g, 'VH'],
  [/nn/g, 'vn'],[/Nn/g, 'Vn'],[/NN/g, 'VN'],
  [/nn/g, 'vn'],[/Nn/g, 'Vn'],[/NN/g, 'VN'],
  [/jj/g, 'vj'],[/Jj/g, 'Vj'],[/JJ/g, 'VJ'],
  [/mm/g, 'vm'],[/Mm/g, 'Vm'],[/MM/g, 'VM'],
  [/kk/g, 'vk'],[/Kk/g, 'Vk'],[/KK/g, 'VK'],
  [/pp/g, 'vp'],[/Pp/g, 'Vp'],[/PP/g, 'VP']
];

function convertLatinToYuqnaria() {
  let text = inputTextarea.value;
  for(let i = 0; i < corr.length; i++) {
    text = text.replace(corr[i][0], corr[i][1]);
  }
  outputTextarea.value = text;
}

function convertYuqnariaToLatin() {
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
