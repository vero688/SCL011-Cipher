window.cipher = {
  encode: (text,offset) => {
    let palabra = '';
    for (let i = 0; i < text.length; i++) {
      let ascii = text.charCodeAt(i); 
      let alfEncode = ((ascii - 65 + offset) % 26 + 65); 
      let alfDecode2 = String.fromCharCode(alfEncode); 
       palabra = palabra.concat(alfDecode2);
    }
    return palabra;
  },

    decode: (text2,offset) => {
      let palabra = '';
    for (let i = 0; i < text2.length; i++) {
      let ascii =text2.charCodeAt(i);
      let alfEncode = ((ascii + 65 - offset) % 26 + 65); 
      let alfDecode3 = String.fromCharCode(alfEncode);
       palabra = palabra.concat(alfDecode3);
  }
  return palabra;
}
};
