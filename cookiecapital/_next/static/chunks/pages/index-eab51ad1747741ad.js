(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{45728:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(24847)}])},24847:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(t),n.d(t,{default:function(){return x}});var s=n(85893),u=n(67294),r=n(359),p=n(9008),o=n.n(p);function y(e,t,n){var a=this,i=(0,u.useRef)(null),s=(0,u.useRef)(0),r=(0,u.useRef)(null),p=(0,u.useRef)([]),o=(0,u.useRef)(),y=(0,u.useRef)(),d=(0,u.useRef)(e),m=(0,u.useRef)(!0);(0,u.useEffect)((function(){d.current=e}),[e]);var l=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw new TypeError("Expected a function");t=+t||0;var c=!!(n=n||{}).leading,f=!("trailing"in n)||!!n.trailing,b="maxWait"in n,g=b?Math.max(+n.maxWait||0,t):null;(0,u.useEffect)((function(){return m.current=!0,function(){m.current=!1}}),[]);var v=(0,u.useMemo)((function(){var e=function(e){var t=p.current,n=o.current;return p.current=o.current=null,s.current=e,y.current=d.current.apply(n,t)},n=function(e,t){l&&cancelAnimationFrame(r.current),r.current=l?requestAnimationFrame(e):setTimeout(e,t)},u=function(e){if(!m.current)return!1;var n=e-i.current;return!i.current||n>=t||n<0||b&&e-s.current>=g},v=function(t){return r.current=null,f&&p.current?e(t):(p.current=o.current=null,y.current)},x=function e(){var a=Date.now();if(u(a))return v(a);if(m.current){var r=t-(a-i.current),p=b?Math.min(r,g-(a-s.current)):r;n(e,p)}},w=function(){var d=Date.now(),l=u(d);if(p.current=[].slice.call(arguments),o.current=a,i.current=d,l){if(!r.current&&m.current)return s.current=i.current,n(x,t),c?e(i.current):y.current;if(b)return n(x,t),e(i.current)}return r.current||n(x,t),y.current};return w.cancel=function(){r.current&&(l?cancelAnimationFrame(r.current):clearTimeout(r.current)),s.current=0,p.current=i.current=o.current=r.current=null},w.isPending=function(){return!!r.current},w.flush=function(){return r.current?v(Date.now()):y.current},w}),[c,b,t,g,f,l]);return v}function d(e,t){return e===t}function m(e){return"function"==typeof e?function(){return e}:e}function l(e,t,n){var a,i,s=n&&n.equalityFn||d,r=(a=(0,u.useState)(m(e)),i=a[1],[a[0],(0,u.useCallback)((function(e){return i(m(e))}),[])]),p=r[0],o=r[1],l=y((0,u.useCallback)((function(e){return o(e)}),[o]),t,n),c=(0,u.useRef)(e);return s(c.current,e)||(l(e),c.current=e),[p,l]}var c=n(69077),f=n(73161),b=JSON.parse('[{"name":"Transfer","inputs":[{"name":"sender","type":"address","indexed":true},{"name":"receiver","type":"address","indexed":true},{"name":"value","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"name":"owner","type":"address","indexed":true},{"name":"spender","type":"address","indexed":true},{"name":"value","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"StrategyAdded","inputs":[{"name":"strategy","type":"address","indexed":true},{"name":"debtRatio","type":"uint256","indexed":false},{"name":"minDebtPerHarvest","type":"uint256","indexed":false},{"name":"maxDebtPerHarvest","type":"uint256","indexed":false},{"name":"performanceFee","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"StrategyReported","inputs":[{"name":"strategy","type":"address","indexed":true},{"name":"gain","type":"uint256","indexed":false},{"name":"loss","type":"uint256","indexed":false},{"name":"debtPaid","type":"uint256","indexed":false},{"name":"totalGain","type":"uint256","indexed":false},{"name":"totalLoss","type":"uint256","indexed":false},{"name":"totalDebt","type":"uint256","indexed":false},{"name":"debtAdded","type":"uint256","indexed":false},{"name":"debtRatio","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"UpdateGovernance","inputs":[{"name":"governance","type":"address","indexed":false}],"anonymous":false,"type":"event"},{"name":"UpdateManagement","inputs":[{"name":"management","type":"address","indexed":false}],"anonymous":false,"type":"event"},{"name":"UpdateRewards","inputs":[{"name":"rewards","type":"address","indexed":false}],"anonymous":false,"type":"event"},{"name":"UpdateDepositLimit","inputs":[{"name":"depositLimit","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"UpdatePerformanceFee","inputs":[{"name":"performanceFee","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"UpdateManagementFee","inputs":[{"name":"managementFee","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"UpdateGuardian","inputs":[{"name":"guardian","type":"address","indexed":false}],"anonymous":false,"type":"event"},{"name":"EmergencyShutdown","inputs":[{"name":"active","type":"bool","indexed":false}],"anonymous":false,"type":"event"},{"name":"UpdateWithdrawalQueue","inputs":[{"name":"queue","type":"address[20]","indexed":false}],"anonymous":false,"type":"event"},{"name":"StrategyUpdateDebtRatio","inputs":[{"name":"strategy","type":"address","indexed":true},{"name":"debtRatio","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"StrategyUpdateMinDebtPerHarvest","inputs":[{"name":"strategy","type":"address","indexed":true},{"name":"minDebtPerHarvest","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"StrategyUpdateMaxDebtPerHarvest","inputs":[{"name":"strategy","type":"address","indexed":true},{"name":"maxDebtPerHarvest","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"StrategyUpdatePerformanceFee","inputs":[{"name":"strategy","type":"address","indexed":true},{"name":"performanceFee","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"StrategyMigrated","inputs":[{"name":"oldVersion","type":"address","indexed":true},{"name":"newVersion","type":"address","indexed":true}],"anonymous":false,"type":"event"},{"name":"StrategyRevoked","inputs":[{"name":"strategy","type":"address","indexed":true}],"anonymous":false,"type":"event"},{"name":"StrategyRemovedFromQueue","inputs":[{"name":"strategy","type":"address","indexed":true}],"anonymous":false,"type":"event"},{"name":"StrategyAddedToQueue","inputs":[{"name":"strategy","type":"address","indexed":true}],"anonymous":false,"type":"event"},{"stateMutability":"nonpayable","type":"function","name":"initialize","inputs":[{"name":"token","type":"address"},{"name":"governance","type":"address"},{"name":"rewards","type":"address"},{"name":"nameOverride","type":"string"},{"name":"symbolOverride","type":"string"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"initialize","inputs":[{"name":"token","type":"address"},{"name":"governance","type":"address"},{"name":"rewards","type":"address"},{"name":"nameOverride","type":"string"},{"name":"symbolOverride","type":"string"},{"name":"guardian","type":"address"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"initialize","inputs":[{"name":"token","type":"address"},{"name":"governance","type":"address"},{"name":"rewards","type":"address"},{"name":"nameOverride","type":"string"},{"name":"symbolOverride","type":"string"},{"name":"guardian","type":"address"},{"name":"management","type":"address"}],"outputs":[]},{"stateMutability":"pure","type":"function","name":"apiVersion","inputs":[],"outputs":[{"name":"","type":"string"}],"gas":5946},{"stateMutability":"nonpayable","type":"function","name":"setName","inputs":[{"name":"name","type":"string"}],"outputs":[],"gas":108344},{"stateMutability":"nonpayable","type":"function","name":"setSymbol","inputs":[{"name":"symbol","type":"string"}],"outputs":[],"gas":73194},{"stateMutability":"nonpayable","type":"function","name":"setGovernance","inputs":[{"name":"governance","type":"address"}],"outputs":[],"gas":37665},{"stateMutability":"nonpayable","type":"function","name":"acceptGovernance","inputs":[],"outputs":[],"gas":38937},{"stateMutability":"nonpayable","type":"function","name":"setManagement","inputs":[{"name":"management","type":"address"}],"outputs":[],"gas":39075},{"stateMutability":"nonpayable","type":"function","name":"setRewards","inputs":[{"name":"rewards","type":"address"}],"outputs":[],"gas":39626},{"stateMutability":"nonpayable","type":"function","name":"setLockedProfitDegradation","inputs":[{"name":"degradation","type":"uint256"}],"outputs":[],"gas":37789},{"stateMutability":"nonpayable","type":"function","name":"setDepositLimit","inputs":[{"name":"limit","type":"uint256"}],"outputs":[],"gas":39065},{"stateMutability":"nonpayable","type":"function","name":"setPerformanceFee","inputs":[{"name":"fee","type":"uint256"}],"outputs":[],"gas":39199},{"stateMutability":"nonpayable","type":"function","name":"setManagementFee","inputs":[{"name":"fee","type":"uint256"}],"outputs":[],"gas":39229},{"stateMutability":"nonpayable","type":"function","name":"setGuardian","inputs":[{"name":"guardian","type":"address"}],"outputs":[],"gas":41773},{"stateMutability":"nonpayable","type":"function","name":"setEmergencyShutdown","inputs":[{"name":"active","type":"bool"}],"outputs":[],"gas":41844},{"stateMutability":"nonpayable","type":"function","name":"setWithdrawalQueue","inputs":[{"name":"queue","type":"address[20]"}],"outputs":[],"gas":1090134},{"stateMutability":"nonpayable","type":"function","name":"transfer","inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":79308},{"stateMutability":"nonpayable","type":"function","name":"transferFrom","inputs":[{"name":"sender","type":"address"},{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":121671},{"stateMutability":"nonpayable","type":"function","name":"approve","inputs":[{"name":"spender","type":"address"},{"name":"amount","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":38241},{"stateMutability":"nonpayable","type":"function","name":"increaseAllowance","inputs":[{"name":"spender","type":"address"},{"name":"amount","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":42882},{"stateMutability":"nonpayable","type":"function","name":"decreaseAllowance","inputs":[{"name":"spender","type":"address"},{"name":"amount","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":42906},{"stateMutability":"nonpayable","type":"function","name":"permit","inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"},{"name":"amount","type":"uint256"},{"name":"expiry","type":"uint256"},{"name":"signature","type":"bytes"}],"outputs":[{"name":"","type":"bool"}],"gas":91494},{"stateMutability":"view","type":"function","name":"totalAssets","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":8698},{"stateMutability":"nonpayable","type":"function","name":"deposit","inputs":[],"outputs":[{"name":"","type":"uint256"}]},{"stateMutability":"nonpayable","type":"function","name":"deposit","inputs":[{"name":"_amount","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}]},{"stateMutability":"nonpayable","type":"function","name":"deposit","inputs":[{"name":"_amount","type":"uint256"},{"name":"recipient","type":"address"}],"outputs":[{"name":"","type":"uint256"}]},{"stateMutability":"view","type":"function","name":"maxAvailableShares","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":1576655},{"stateMutability":"nonpayable","type":"function","name":"withdraw","inputs":[],"outputs":[{"name":"","type":"uint256"}]},{"stateMutability":"nonpayable","type":"function","name":"withdraw","inputs":[{"name":"maxShares","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}]},{"stateMutability":"nonpayable","type":"function","name":"withdraw","inputs":[{"name":"maxShares","type":"uint256"},{"name":"recipient","type":"address"}],"outputs":[{"name":"","type":"uint256"}]},{"stateMutability":"nonpayable","type":"function","name":"withdraw","inputs":[{"name":"maxShares","type":"uint256"},{"name":"recipient","type":"address"},{"name":"maxLoss","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}]},{"stateMutability":"view","type":"function","name":"pricePerShare","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":77734},{"stateMutability":"nonpayable","type":"function","name":"addStrategy","inputs":[{"name":"strategy","type":"address"},{"name":"debtRatio","type":"uint256"},{"name":"minDebtPerHarvest","type":"uint256"},{"name":"maxDebtPerHarvest","type":"uint256"},{"name":"performanceFee","type":"uint256"}],"outputs":[],"gas":1523989},{"stateMutability":"nonpayable","type":"function","name":"updateStrategyDebtRatio","inputs":[{"name":"strategy","type":"address"},{"name":"debtRatio","type":"uint256"}],"outputs":[],"gas":124263},{"stateMutability":"nonpayable","type":"function","name":"updateStrategyMinDebtPerHarvest","inputs":[{"name":"strategy","type":"address"},{"name":"minDebtPerHarvest","type":"uint256"}],"outputs":[],"gas":47611},{"stateMutability":"nonpayable","type":"function","name":"updateStrategyMaxDebtPerHarvest","inputs":[{"name":"strategy","type":"address"},{"name":"maxDebtPerHarvest","type":"uint256"}],"outputs":[],"gas":47641},{"stateMutability":"nonpayable","type":"function","name":"updateStrategyPerformanceFee","inputs":[{"name":"strategy","type":"address"},{"name":"performanceFee","type":"uint256"}],"outputs":[],"gas":42854},{"stateMutability":"nonpayable","type":"function","name":"migrateStrategy","inputs":[{"name":"oldVersion","type":"address"},{"name":"newVersion","type":"address"}],"outputs":[],"gas":1190208},{"stateMutability":"nonpayable","type":"function","name":"revokeStrategy","inputs":[],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"revokeStrategy","inputs":[{"name":"strategy","type":"address"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"addStrategyToQueue","inputs":[{"name":"strategy","type":"address"}],"outputs":[],"gas":1255644},{"stateMutability":"nonpayable","type":"function","name":"removeStrategyFromQueue","inputs":[{"name":"strategy","type":"address"}],"outputs":[],"gas":23636673},{"stateMutability":"view","type":"function","name":"debtOutstanding","inputs":[],"outputs":[{"name":"","type":"uint256"}]},{"stateMutability":"view","type":"function","name":"debtOutstanding","inputs":[{"name":"strategy","type":"address"}],"outputs":[{"name":"","type":"uint256"}]},{"stateMutability":"view","type":"function","name":"creditAvailable","inputs":[],"outputs":[{"name":"","type":"uint256"}]},{"stateMutability":"view","type":"function","name":"creditAvailable","inputs":[{"name":"strategy","type":"address"}],"outputs":[{"name":"","type":"uint256"}]},{"stateMutability":"view","type":"function","name":"availableDepositLimit","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":21381},{"stateMutability":"view","type":"function","name":"expectedReturn","inputs":[],"outputs":[{"name":"","type":"uint256"}]},{"stateMutability":"view","type":"function","name":"expectedReturn","inputs":[{"name":"strategy","type":"address"}],"outputs":[{"name":"","type":"uint256"}]},{"stateMutability":"nonpayable","type":"function","name":"report","inputs":[{"name":"gain","type":"uint256"},{"name":"loss","type":"uint256"},{"name":"_debtPayment","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}],"gas":1239256},{"stateMutability":"nonpayable","type":"function","name":"sweep","inputs":[{"name":"token","type":"address"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"sweep","inputs":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"}],"outputs":[]},{"stateMutability":"view","type":"function","name":"name","inputs":[],"outputs":[{"name":"","type":"string"}],"gas":13920},{"stateMutability":"view","type":"function","name":"symbol","inputs":[],"outputs":[{"name":"","type":"string"}],"gas":11673},{"stateMutability":"view","type":"function","name":"decimals","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":3678},{"stateMutability":"view","type":"function","name":"balanceOf","inputs":[{"name":"arg0","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3923},{"stateMutability":"view","type":"function","name":"allowance","inputs":[{"name":"arg0","type":"address"},{"name":"arg1","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":4168},{"stateMutability":"view","type":"function","name":"totalSupply","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":3768},{"stateMutability":"view","type":"function","name":"token","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":3798},{"stateMutability":"view","type":"function","name":"governance","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":3828},{"stateMutability":"view","type":"function","name":"management","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":3858},{"stateMutability":"view","type":"function","name":"guardian","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":3888},{"stateMutability":"view","type":"function","name":"strategies","inputs":[{"name":"arg0","type":"address"}],"outputs":[{"name":"performanceFee","type":"uint256"},{"name":"activation","type":"uint256"},{"name":"debtRatio","type":"uint256"},{"name":"minDebtPerHarvest","type":"uint256"},{"name":"maxDebtPerHarvest","type":"uint256"},{"name":"lastReport","type":"uint256"},{"name":"totalDebt","type":"uint256"},{"name":"totalGain","type":"uint256"},{"name":"totalLoss","type":"uint256"}],"gas":22641},{"stateMutability":"view","type":"function","name":"withdrawalQueue","inputs":[{"name":"arg0","type":"uint256"}],"outputs":[{"name":"","type":"address"}],"gas":4057},{"stateMutability":"view","type":"function","name":"emergencyShutdown","inputs":[],"outputs":[{"name":"","type":"bool"}],"gas":3978},{"stateMutability":"view","type":"function","name":"depositLimit","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":4008},{"stateMutability":"view","type":"function","name":"debtRatio","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":4038},{"stateMutability":"view","type":"function","name":"totalDebt","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":4068},{"stateMutability":"view","type":"function","name":"lastReport","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":4098},{"stateMutability":"view","type":"function","name":"activation","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":4128},{"stateMutability":"view","type":"function","name":"lockedProfit","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":4158},{"stateMutability":"view","type":"function","name":"lockedProfitDegradation","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":4188},{"stateMutability":"view","type":"function","name":"rewards","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":4218},{"stateMutability":"view","type":"function","name":"managementFee","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":4248},{"stateMutability":"view","type":"function","name":"performanceFee","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":4278},{"stateMutability":"view","type":"function","name":"nonces","inputs":[{"name":"arg0","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":4523},{"stateMutability":"view","type":"function","name":"DOMAIN_SEPARATOR","inputs":[],"outputs":[{"name":"","type":"bytes32"}],"gas":4338}]'),g=JSON.parse('[{"inputs":[{"internalType":"address","name":"stakedTokenAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Eat","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Unstaked","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_cookiePower","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_lastStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_staked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_stakedTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_totalCookiesEaten","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"eat","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"harvest","outputs":[{"internalType":"uint256","name":"earnedCookies","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"harvestAndEat","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),v=n(35553),x=function(){var e=(0,c.mA)(),t=e.address,n=e.isConnected,a=(e.isConnecting,e.isDisconnected,(0,c.qL)().disconnect,i(u.useState(""),2)),p=a[0],y=a[1],d=i(l(p,500),1)[0],m=i(u.useState(""),2),x=m[0],w=m[1],M=i(l(x,500),1)[0],h="0xcA51693d286Cd4FA7fBEe4747b98fbE20471007B",T="0x0dec85e74a92c52b7f708c4b10207d9560cefaf0",j=i(u.useState("0"),2),S=j[0],k=j[1],F=i(u.useState("0"),2),A=F[0],P=F[1],N=i(u.useState("0"),2),D=N[0],R=N[1],C=i(u.useState("0"),2),E=C[0],_=C[1],G=i(u.useState("0"),2),O=G[0],U=G[1],H=i(u.useState("0"),2),L=H[0],W=H[1],J=i(u.useState(0),2),Q=J[0],V=J[1];u.useEffect((function(){if(n){var e,t=function(n){V(Number(v.formatUnits(S))*(1e3+Number(null===E||void 0===E?void 0:E.toString()))*((Date.now()-new Date(1e3*D).getTime())/36e5)),e=requestAnimationFrame(t)};return t(),function(){return cancelAnimationFrame(e)}}}),[S]);var q=(0,c.do)({address:h,abi:g,functionName:"balanceOf",args:[t],watch:!0}).data,z=(0,c.do)({address:h,abi:g,functionName:"_staked",args:[t],watch:!0}).data,I=(0,c.do)({address:h,abi:g,functionName:"_lastStaked",args:[t],watch:!0}).data,B=(0,c.do)({address:h,abi:g,functionName:"_cookiePower",args:[t],watch:!0}).data,X=(0,c.do)({address:T,abi:f.em,functionName:"balanceOf",args:[t],watch:!0}).data,K=(0,c.do)({address:T,abi:f.em,functionName:"allowance",args:[t,h],watch:!0}).data,$=(0,c.PJ)({address:T,abi:b,functionName:"approve",args:[h,"115792089237316195423570985008687907853269984665640564039457584007913129639935"]}).config,Y=(0,c.GG)($).write,Z=(0,c.PJ)({address:h,abi:g,functionName:"stake",args:[d]}).config,ee=(0,c.GG)(Z),te=ee.write,ne=(ee.data,(0,c.PJ)({address:h,abi:g,functionName:"unstake",args:[]}).config),ae=(0,c.GG)(ne).write,ie=(0,c.PJ)({address:h,abi:g,functionName:"harvest",args:[]}).config,se=(0,c.GG)(ie).write,ue=(0,c.PJ)({address:h,abi:g,functionName:"eat",args:[M]}).config,re=(0,c.GG)(ue).write,pe=(0,c.PJ)({address:h,abi:g,functionName:"harvestAndEat",args:[]}).config,oe=(0,c.GG)(pe).write;return u.useEffect((function(){k(z),P(q),R(I),_(B),U(X),W(K)}),[z,q,I,B,X,K]),(0,s.jsxs)("div",{children:[(0,s.jsxs)(o(),{children:[(0,s.jsx)("title",{children:"Cookie Capital"}),(0,s.jsx)("meta",{name:"description",content:"Generated by @rainbow-me/create-rainbowkit"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("main",{children:[(0,s.jsxs)("div",{className:"left",children:[(0,s.jsx)("img",{src:"https://i.imgur.com/tKJxANd.png"}),n?(0,s.jsxs)(s.Fragment,{children:["0"===(null===L||void 0===L?void 0:L.toString())&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("button",{disabled:!Y,onClick:function(){null===Y||void 0===Y||Y()},children:"Approve yvWFTM Spending"}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("a",{style:{textAlign:"center"},href:"https://yearn.finance/vaults/250/0x0DEC85e74A92c52b7F708c4B10207D9560CEFaf0",children:"What is yvWFTM?"})]}),"0"!==(null===L||void 0===L?void 0:L.toString())&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"balances",children:[(0,s.jsxs)("div",{className:"l",children:[(0,s.jsx)("span",{children:"yvWFTM:"}),(0,s.jsx)("span",{onClick:function(){y(String(O))},children:O&&Number(v.formatUnits(O)).toFixed(10)})]}),(0,s.jsxs)("div",{className:"r",children:[(0,s.jsx)("span",{children:"yvWFTM Staked"}),(0,s.jsx)("span",{children:S&&Number(v.formatUnits(S)).toFixed(10)})]})]}),(0,s.jsx)("br",{}),(0,s.jsx)("input",{type:"text",placeholder:"amount to stake",onChange:function(e){return y(e.target.value)},value:p}),(0,s.jsx)("div",{children:(0,s.jsx)("button",{disabled:!te,onClick:function(){null===te||void 0===te||te()},children:"Stake yvWFTM"})})]}),0!==Q&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsxs)("span",{style:{fontSize:34},children:["Cookies to Harvest:",(0,s.jsx)("br",{}),Q]}),(0,s.jsx)("br",{}),(0,s.jsx)("button",{disabled:!se,onClick:function(){null===se||void 0===se||se()},children:"Harvest"}),(0,s.jsx)("button",{disabled:!oe,onClick:function(){null===oe||void 0===oe||oe()},children:"Harvest and Eat"}),(0,s.jsx)("button",{disabled:!ae,onClick:function(){null===ae||void 0===ae||ae()},children:"Harvest and Unstake"}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(r.NL,{})]})]}),n&&(0,s.jsxs)("div",{className:"right",children:[(0,s.jsx)("img",{src:"https://i.imgur.com/MnXxiWG.png"}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsxs)("span",{children:["Cookies:",(0,s.jsx)("br",{}),A&&(0===Q?v.formatUnits(A):Number(v.formatUnits(A))+Q)]}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsxs)("span",{children:["Cookie Power: ",1e3+Number(null===E||void 0===E?void 0:E.toString())]}),(0,s.jsx)("span",{style:{fontSize:12},children:"(power = cookies earned per yvFTM staked per hour)"}),(0,s.jsx)("br",{}),(0,s.jsx)("input",{type:"text",placeholder:"amount to eat",onChange:function(e){return w(e.target.value)},value:x}),(0,s.jsx)("button",{disabled:!re,onClick:function(){null===re||void 0===re||re()},children:"Eat"}),(0,s.jsx)("span",{style:{fontSize:12,marginTop:7,textAlign:"center"},children:"(1000 cookies eaten = +1 cookie power)"})]})]}),(0,s.jsx)("footer",{children:(0,s.jsx)("a",{href:"",target:"_blank"})})]})}},9008:function(e,t,n){e.exports=n(5443)}},function(e){e.O(0,[774,888,179],(function(){return t=45728,e(e.s=t);var t}));var t=e.O();_N_E=t}]);