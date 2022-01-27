require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind honey good arena oppose ski'; 
let testAccounts = [
"0x14f6e57c2d28e4f58892d66d35d06a1395b30c961b548b3028f5543aaf41205f",
"0xfa31649ba6caa4de7c4682aede6f5a1a9fa7e0519bdedfc417bd650bff128e5d",
"0x7c7f40a9e13740301a091884c0a01846aad9389561ad9d423718bb403e5a319d",
"0x410ef8e759fd082a03d1d79b4b9b610eb1f2d7bf536b645cfece3011ca6590c6",
"0x806e9be49eb581d6133c687430e7155e4ae02c638db90477b42a3a6be41449fd",
"0x2997682b51d5cb07c664ac719c05a5b4bbcc5b403164cf3bd709728563c74297",
"0xd1c1f5e2fbb2ff4fda33aaa6998e9d2f2ed09e005ccb520c6074313698f8ebb5",
"0x77c41602e9ed7c0cc25385dc16187b2c6f0e02ef68c53f7d16701ee7d6a75e56",
"0x1abc883803b99105ee2998bc73ee94832b6546069a73a9846effb368f5f617e1",
"0xd64d0e2b2351e49edb3ae463369613eab0722874411cfad9b6f17f06bebd599f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


