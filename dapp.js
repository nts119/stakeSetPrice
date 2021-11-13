
App = {
    web3Provider: null,
    contracts: {
      BscTopStake2: null
    },
    currentAddress: '',
    contractAddress: '0x3dC308D9404B5f9Db1cEfF0AD42f051Bf5369538',
    contractAbi: [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"intro","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"BindIntroLogs","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"recordId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"RewardPaidRecord","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"productId","type":"uint256"},{"indexed":false,"internalType":"address","name":"mainToken","type":"address"},{"indexed":false,"internalType":"address","name":"deputyToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"mainTokenAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"deputyTokenAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"power","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"StakedRecord","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"UpgradeLevelLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"productId","type":"uint256"},{"indexed":false,"internalType":"address","name":"mainToken","type":"address"},{"indexed":false,"internalType":"address","name":"deputyToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"mainTokenAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"deputyTokenAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"power","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mainAmountFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"deputyAmountFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"withdrawRecordLog","type":"event"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_productId","type":"uint256"},{"internalType":"address","name":"_mainToken","type":"address"},{"internalType":"address","name":"_deputyToken","type":"address"}],"name":"addProduct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rateTypeId","type":"uint256"},{"internalType":"uint256","name":"_mainRate","type":"uint256"},{"internalType":"uint256","name":"_power","type":"uint256"}],"name":"addRateType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_intro","type":"address"}],"name":"bindIntro","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_productId","type":"uint256"}],"name":"deleteProduct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rateTypeId","type":"uint256"}],"name":"deleteRateType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllProductStruct","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"mainToken","type":"address"},{"internalType":"address","name":"deputyToken","type":"address"},{"internalType":"string","name":"mainTokenSympol","type":"string"},{"internalType":"string","name":"deputyTokenSympol","type":"string"}],"internalType":"struct BscTopStake2.Product[]","name":"productArr","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllRateTypeStruct","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"mainRate","type":"uint256"},{"internalType":"uint256","name":"deputyRate","type":"uint256"},{"internalType":"uint256","name":"power","type":"uint256"}],"internalType":"struct BscTopStake2.RateType[]","name":"rateTypeArr","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"mainToken","type":"address"},{"internalType":"address","name":"deputyToken","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_deputyRate","type":"uint256"}],"name":"getNeedAmount","outputs":[{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_productId","type":"uint256"}],"name":"getProduct","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"mainToken","type":"address"},{"internalType":"address","name":"deputyToken","type":"address"},{"internalType":"string","name":"mainTokenSympol","type":"string"},{"internalType":"string","name":"deputyTokenSympol","type":"string"}],"internalType":"struct BscTopStake2.Product","name":"product","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"getRateAmount","outputs":[{"internalType":"uint256","name":"rateNum","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rateType","type":"uint256"}],"name":"getRateType","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"mainRate","type":"uint256"},{"internalType":"uint256","name":"deputyRate","type":"uint256"},{"internalType":"uint256","name":"power","type":"uint256"}],"internalType":"struct BscTopStake2.RateType","name":"rateType","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_productId","type":"uint256"}],"name":"getRecord","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"investor","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"mainTokenAmount","type":"uint256"},{"internalType":"uint256","name":"deputyTokenAmount","type":"uint256"},{"internalType":"uint256","name":"stakeType","type":"uint256"},{"internalType":"uint256","name":"rateType","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"power","type":"uint256"}],"internalType":"struct BscTopStake2.Record","name":"record","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getRewardRate","outputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserInfo","outputs":[{"components":[{"internalType":"address","name":"intro","type":"address"},{"internalType":"uint256","name":"userRewardPerTokenPaid","type":"uint256"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"address[]","name":"children","type":"address[]"},{"internalType":"bool","name":"isExist","type":"bool"}],"internalType":"struct BscTopStake2.User","name":"user","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"isActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"limitAddToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"limitPower","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ntsPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolTotalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"receiveAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rootAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"routerPath","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_burnAddress","type":"address"}],"name":"setBurnAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_burnRate","type":"uint256"}],"name":"setBurnRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_foundationAddress","type":"address"}],"name":"setFoundationAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_foundationRate","type":"uint256"}],"name":"setFoundationRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_limitAddToken","type":"uint256"}],"name":"setLimitAddToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_limitPower","type":"uint256"}],"name":"setLimitPower","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nodeAddress","type":"address"}],"name":"setNodeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_nodeRate","type":"uint256"}],"name":"setNodeRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setNtsPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_periodTime","type":"uint256"}],"name":"setPeriodTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_receiveAddress","type":"address"}],"name":"setReceiveAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsToken","type":"address"}],"name":"setRewardsToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_routerPath","type":"address"}],"name":"setRouterPath","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_superNodeAddress","type":"address"}],"name":"setSuperNodeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_superNodeRate","type":"uint256"}],"name":"setSuperNodeRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_usdt","type":"address"}],"name":"setUsdt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_userPancakePrice","type":"bool"}],"name":"setUserPancakePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_bnb","type":"address"}],"name":"setWbnb","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawRate","type":"uint256"}],"name":"setWithdrawRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_productId","type":"uint256"},{"internalType":"uint256","name":"_rateType","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"totalBurn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakeNts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_productId","type":"uint256"},{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"withdrawRecord","outputs":[],"stateMutability":"nonpayable","type":"function"}],
    initWeb3: async function () {
      if (window.ethereum) {
        App.web3Provider = window.ethereum
        web3 = new Web3(App.web3Provider);
        try {
          // await App.changeNetwork()
          await ethereum.enable()
        } catch (error) {
        }
      } else {
        if (window.web3) {
          App.web3Provider = web3.currentProvider
          web3 = new Web3(App.web3Provider);
        } else {
          App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
          web3 = new Web3(App.web3Provider);
        }
      }
      web3.eth.getAccounts((err, accounts) => {
        if (err) {
          return
        }
        App.currentAddress = accounts[0]
        return App.initContract();
      });
    },
    initContract: function () {
      App.contracts.BscTopStake2 = new web3.eth.Contract(App.contractAbi, App.contractAddress);
      return App.bindEvents();
    },
    bindEvents: function () {
      $(document).on('change', '#select', App.selectFunction);
    },
    selectFunction: function () {
      let index = $('#select').val()
      let functionAbi = App.contractAbi[index]
      $('#' +functionAbi.name + 'Box').show().siblings().hide()

    },
    addProduct:async function (){
            let _productId = $('#_productId').val()
      let _mainToken = $('#_mainToken').val()
      let _deputyToken = $('#_deputyToken').val()
      
            let data = await App.contracts.BscTopStake2.methods.addProduct(_productId,_mainToken,_deputyToken).send({from:App.currentAddress})
          },
          addRateType:async function (){
            let _rateTypeId = $('#_rateTypeId').val()
      let _mainRate = $('#_mainRate').val()
      let _power = $('#_power').val()
      
            let data = await App.contracts.BscTopStake2.methods.addRateType(_rateTypeId,_mainRate,_power).send({from:App.currentAddress})
          },
          bindIntro:async function (){
            let _intro = $('#_intro').val()
      
            let data = await App.contracts.BscTopStake2.methods.bindIntro(_intro).send({from:App.currentAddress})
          },
          deleteProduct:async function (){
            let _productId = $('#_productId').val()
      
            let data = await App.contracts.BscTopStake2.methods.deleteProduct(_productId).send({from:App.currentAddress})
          },
          deleteRateType:async function (){
            let _rateTypeId = $('#_rateTypeId').val()
      
            let data = await App.contracts.BscTopStake2.methods.deleteRateType(_rateTypeId).send({from:App.currentAddress})
          },
          getETH:async function (){
            let _amount = $('#_amount').val()
      
            let data = await App.contracts.BscTopStake2.methods.getETH(_amount).send({from:App.currentAddress})
          },
          getRateAmount:async function (){
            let _amount = $('#_amount').val()
      let _rate = $('#_rate').val()
      
            let data = await App.contracts.BscTopStake2.methods.getRateAmount(_amount,_rate).send({from:App.currentAddress})
          },
          getReward:async function (){
            
            let data = await App.contracts.BscTopStake2.methods.getReward().send({from:App.currentAddress})
          },
          getToken:async function (){
            let _token = $('#_token').val()
      let _amount = $('#_amount').val()
      
            let data = await App.contracts.BscTopStake2.methods.getToken(_token,_amount).send({from:App.currentAddress})
          },
          initialize:async function (){
            
            let data = await App.contracts.BscTopStake2.methods.initialize().send({from:App.currentAddress})
          },
          renounceOwnership:async function (){
            
            let data = await App.contracts.BscTopStake2.methods.renounceOwnership().send({from:App.currentAddress})
          },
          setBurnAddress:async function (){
            let _burnAddress = $('#_burnAddress').val()
      
            let data = await App.contracts.BscTopStake2.methods.setBurnAddress(_burnAddress).send({from:App.currentAddress})
          },
          setBurnRate:async function (){
            let _burnRate = $('#_burnRate').val()
      
            let data = await App.contracts.BscTopStake2.methods.setBurnRate(_burnRate).send({from:App.currentAddress})
          },
          setFoundationAddress:async function (){
            let _foundationAddress = $('#_foundationAddress').val()
      
            let data = await App.contracts.BscTopStake2.methods.setFoundationAddress(_foundationAddress).send({from:App.currentAddress})
          },
          setFoundationRate:async function (){
            let _foundationRate = $('#_foundationRate').val()
      
            let data = await App.contracts.BscTopStake2.methods.setFoundationRate(_foundationRate).send({from:App.currentAddress})
          },
          setLimitAddToken:async function (){
            let _limitAddToken = $('#_limitAddToken').val()
      
            let data = await App.contracts.BscTopStake2.methods.setLimitAddToken(_limitAddToken).send({from:App.currentAddress})
          },
          setLimitPower:async function (){
            let _limitPower = $('#_limitPower').val()
      
            let data = await App.contracts.BscTopStake2.methods.setLimitPower(_limitPower).send({from:App.currentAddress})
          },
          setNodeAddress:async function (){
            let _nodeAddress = $('#_nodeAddress').val()
      
            let data = await App.contracts.BscTopStake2.methods.setNodeAddress(_nodeAddress).send({from:App.currentAddress})
          },
          setNodeRate:async function (){
            let _nodeRate = $('#_nodeRate').val()
      
            let data = await App.contracts.BscTopStake2.methods.setNodeRate(_nodeRate).send({from:App.currentAddress})
          },
          setNtsPrice:async function (){
            let _price = $('#_price').val()
      
            let data = await App.contracts.BscTopStake2.methods.setNtsPrice(_price).send({from:App.currentAddress})
          },
          setPeriodTime:async function (){
            let _periodTime = $('#_periodTime').val()
      
            let data = await App.contracts.BscTopStake2.methods.setPeriodTime(_periodTime).send({from:App.currentAddress})
          },
          setReceiveAddress:async function (){
            let _receiveAddress = $('#_receiveAddress').val()
      
            let data = await App.contracts.BscTopStake2.methods.setReceiveAddress(_receiveAddress).send({from:App.currentAddress})
          },
          setRewardsToken:async function (){
            let _rewardsToken = $('#_rewardsToken').val()
      
            let data = await App.contracts.BscTopStake2.methods.setRewardsToken(_rewardsToken).send({from:App.currentAddress})
          },
          setRouterPath:async function (){
            let _routerPath = $('#_routerPath').val()
      
            let data = await App.contracts.BscTopStake2.methods.setRouterPath(_routerPath).send({from:App.currentAddress})
          },
          setSuperNodeAddress:async function (){
            let _superNodeAddress = $('#_superNodeAddress').val()
      
            let data = await App.contracts.BscTopStake2.methods.setSuperNodeAddress(_superNodeAddress).send({from:App.currentAddress})
          },
          setSuperNodeRate:async function (){
            let _superNodeRate = $('#_superNodeRate').val()
      
            let data = await App.contracts.BscTopStake2.methods.setSuperNodeRate(_superNodeRate).send({from:App.currentAddress})
          },
          setUsdt:async function (){
            let _usdt = $('#_usdt').val()
      
            let data = await App.contracts.BscTopStake2.methods.setUsdt(_usdt).send({from:App.currentAddress})
          },
          setUserPancakePrice:async function (){
            let _userPancakePrice = $('#_userPancakePrice').val()
      
            let data = await App.contracts.BscTopStake2.methods.setUserPancakePrice(_userPancakePrice).send({from:App.currentAddress})
          },
          setWbnb:async function (){
            let _bnb = $('#_bnb').val()
      
            let data = await App.contracts.BscTopStake2.methods.setWbnb(_bnb).send({from:App.currentAddress})
          },
          setWithdrawRate:async function (){
            let _withdrawRate = $('#_withdrawRate').val()
      
            let data = await App.contracts.BscTopStake2.methods.setWithdrawRate(_withdrawRate).send({from:App.currentAddress})
          },
          stake:async function (){
            let _amount = $('#_amount').val()
      let _productId = $('#_productId').val()
      let _rateType = $('#_rateType').val()
      
            let ethValue = $('#ethValue').val()
            let data = await App.contracts.BscTopStake2.methods.stake(_amount,_productId,_rateType).send({from:App.currentAddress,value: ethValue})
          },
          transferOwnership:async function (){
            let newOwner = $('#newOwner').val()
      
            let data = await App.contracts.BscTopStake2.methods.transferOwnership(newOwner).send({from:App.currentAddress})
          },
          withdrawRecord:async function (){
            let _productId = $('#_productId').val()
      let _rate = $('#_rate').val()
      
            let data = await App.contracts.BscTopStake2.methods.withdrawRecord(_productId,_rate).send({from:App.currentAddress})
          },
          
  };
  
  (function () {
     App.initWeb3();
  })();
  
  
