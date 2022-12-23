// document.addEventListener("click", function(){
//    alert("clicked the page!"); 
// })
const ethers = require("ethers");


const mybutton = document.getElementById("mybutton");
const getBlockNumber = document.getElementById("getBlockNumber");
const blockNumber = document.getElementById("blockNumber");
const getGasPrice = document.getElementById("getGasPrice");
const gasPrice = document.getElementById("gasPrice");
const getChainId = document.getElementById("getChainId");
const divEthAddress = document.getElementById("ethereumAddress");
const divEthBalance = document.getElementById("ethereumBalance");
const provider = new ethers.providers.Web3Provider(window.ethereum);

console.log(mybutton);
console.log(getBlockNumber);

mybutton.addEventListener("click", function(){
    console.log("My Button was pressed");
    provider.send("eth_requestAccounts", []).then(addresses => {
        console.log(addresses);
        const address = addresses[0];
        console.log(address);
        divEthAddress.innerText = address;

        provider.getBalance(address).then((balance) => {
            console.log(balance.toString());
            divEthBalance.innerText = balance.toString();
          });

    })
});

getBlockNumber.addEventListener("click", function(){
    console.log("test");
    provider.getBlockNumber().then(blockTheNumber => {
        console.log(blockTheNumber.toString());
        blockNumber.innerText = blockTheNumber.toString();

    })


});


getGasPrice.addEventListener("click",function(){
    console.log("testeest");
    provider.getGasPrice().then(gotGasPrice => {
        const readGasPrice = ethers.utils.formatEther(gotGasPrice);
        gasPrice.innerText = readGasPrice;

    })
});
