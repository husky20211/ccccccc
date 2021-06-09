<script src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
var liffID = '1656080150-vN3mKxw3';

liff.init({
  liffId: liffID
}).then(function() {
  console.log('LIFF init');
  
  // 這邊開始寫使用其他功能
  
}).catch(function(error) {
  console.log(error);
});
liff.sendMessages([
    {
      type: 'text',
      text: 'Hello, World!'
    }
  ]).then(function(res) {
      console.log(res)
    })
    .catch(function(error) {
      console.log(error);
    });