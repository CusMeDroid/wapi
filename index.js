var mSend = document.getElementById("sender");
var mReciv = "6281311924726";
var mSub = document.getElementById("subject");

var instanceId = "YOUR_API_KEY";

function btnSendWApi() {
  if (mSend < 0 || mReciv < 0 || mSub < 0) {
    alert("Harap isi semua bidang");
  } else {
    let uri_wapi = "https://wa.srv16.wapanels.com/send-message?api_key="+instanceId+"&sender="+mReciv+"&number="+mSend.value+"&message="+mSub.value;
    fetch(uri_wapi, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
      },
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
  }
}
