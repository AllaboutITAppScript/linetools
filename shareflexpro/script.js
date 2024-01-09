function resetJson(){
  $('#flexjson').val("") 
  $('#flex1').html("") 

}

// รับข้อมูลที่คัดลอกจากคลิปบอร์ด
function paste() {
    navigator.clipboard.readText()
        .then((text) => {
            // นำข้อมูลที่คัดลอกมาแปะในส่วนที่คุณต้องการ
            document.getElementById("flexjson").value = text;
        myFunction() 
        })
        .catch((err) => {
            console.error('ไม่สามารถแปะข้อมูลจากคลิปบอร์ดได้: ', err);
        });
}