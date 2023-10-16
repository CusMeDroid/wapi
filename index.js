var mReciv = document.getElementById("recive");
var mSub = document.getElementById("subject");
var instanceId = ""; // YOUR API_KEY
var mSends = ""; // YOUR NUMBER
var mImg = document.getElementById("gambar");

function btnSendWApi() {
  if (mReciv.value < 1 || mSub.value < 1) {
    alert("Harap isi semua bidang");
  } else {
    if (mImg.value < 1) {
      var uri_wapi = "https://wa.srv16.wapanels.com/send-message?api_key="+instanceId+"&sender="+mSends+"&number="+mReciv.value+"&message="+mSub.value+" *Example by WAPI*";
      fetch(uri_wapi, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
      })
      .then(response => response.json())
      .then(response => console.log(JSON.stringify(response)))
      console.log(uri_wapi);
    } else {
      var uri_wapi = "https://wa.srv16.wapanels.com/send-media?api_key="+instanceId+"&sender="+mSends+"&number="+mReciv.value+"&media_type=image&caption="+mSub.value+" *Example by WAPI*"+"&url="+mImg.value;
      fetch(uri_wapi, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
      })
      .then(response => response.json())
      .then(response => console.log(JSON.stringify(response)))
      console.log(uri_wapi);
    }
  }
}
