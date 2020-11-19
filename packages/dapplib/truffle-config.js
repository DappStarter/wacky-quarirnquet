require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture strike rival magic essay include inform front sketch'; 
let testAccounts = [
"0x59daa114abc104b47ef36d38aa23573f5dc0ca929a15384ecfdc845bc189d034",
"0xd546a84c15372c7b2077212246c9a776ce4cc48189e32b4d4b13af10d7f0b793",
"0xe98e6d536b823e4404d9812a5a876b5a64c48fbc8a6ab6511cde806e04d0ece2",
"0x52ccc5dbe5dacac4cde69678928ff3f4a23c9073a229434623dfc7e1c79b1d80",
"0xbb373ad017f29781e06a58f3f9f3ad8d4b7261e91d0f673919c403c02ee295dd",
"0xf2486af195d6b6396fda3107814505715b64abad907f5c0547a7a4382988d854",
"0xcac99f19996ff6296f20256bfe839fd99501e12d8f79b805808285fc8b3b4cb0",
"0x3ebc8d2398c3b5e6507a1d29647d0f32ee67de2f64194ca79e149f73489bad75",
"0x6adf1c1b89ab466bfe819a37391f438a57ec7edda72e1fafdb550a74f63c53d7",
"0xaa945bbf392f57a0ae0dc3faf9493266418b302953e9340969c3b06d99f00fae"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
