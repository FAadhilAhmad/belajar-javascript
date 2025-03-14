var x = 10;
var umur = 20;
var nama = 'fadhil'
var alamat = 'kampung bojong desa cigentur'
console.log('helo wolrd!!');
console.log('hello wolrd variabel dari x adalah ' + x);
console.log('hallo umur saya adalah ' +  umur);
console.log('halo nama saya ' + nama)
console.log( nama + ' adalah nama saya dan umur saya adalah ' + umur)
console.log('dan saya tinggal di ' + alamat)

// pembelajaran tentang pop up 
alert('hello wolrd');
alert('hallo gays selamat datang');
alert('di web pertama saya ');
alert('halo gays nama saya ' + nama);
alert('dan umur saya ' + umur);
alert('dan saya tinggal di ' + alamat);
alert('terimakasih 😽🤗'); 

// belajar popup prmont dan mengkombinasikan dengan variabel
var kamu = prompt('masukan nama');
alert('halo ' + kamu);
var dimana = prompt('dimana kamu tinggal');
alert('oke ' + kamu + ' kamu tinggal di ' + dimana);
var kabar = prompt('bagaimana kabar mu ' + kamu);
alert('ouh jadi kamu merasa ' + kabar);
alert('oke nama kamu ' + kamu +' dan kamu tinggal di ' + dimana + ' dan sekarang kabar kamu ' + kabar)
// pengulangan 
var tes = confirm('kamu yakin');
if( tes === true ){
    alert('user menekan OK!');
} else {
    alert('user menekan CANCEL!');
}
PENGULAGAN 1
alert('halo selamat datang')
var lagi = true;

while( lagi === true){
    var nama = prompt('masukan nama');
    alert('halo ' + nama)
    lagi = confirm('coba lagi');
}
// pengulagan 2
alert('saya akan menayakan kabar mu ')
var kabar = false;
while( kabar === false ){
    var kondisi =prompt('bagaimana kabar mu ')
    kabar = confirm( 'perasaan mu '+ kondisi + ' serius itu perasaan mu')
}

while(true){
    console.log('kage bunsin non justsu')
}
var lagi = true;
while(lagi){
    console.log('hello wolrd')
    lagi = confirm('lagi')
}
var bunsin = true;
while(bunsin){
    alert('kage bunsin non jutsu')
    bunsin = confirm('berhenti')
}
