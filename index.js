var mSend = document.getElementById("sender");
var mReciv = "6281311924726";
var mSub = document.getElementById("subject");

var instanceId = "2de49fb2cbf4e2044d0754f41195e87712eca58e";

function btnSendWApi() {
  if (mSend < 0 || mReciv < 0 || mSub < 0) {
    alert("Harap isi semua bidang");
  } else {
    let uri_wapi = "https://wa.srv16.wapanels.com/send-message?api_key="+instanceId+"&sender="+mSend.value+"&number="+mReciv+"&message="+mSub.value;
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