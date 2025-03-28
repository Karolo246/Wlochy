function refreshtime()
{
        var dzisiaj = new Date();
        
        var day = dzisiaj.getDate();
        var month = dzisiaj.getMonth()+1;
        var year = dzisiaj.getFullYear();
        var hour = dzisiaj.getHours();
        var minute = dzisiaj.getMinutes();
        var second = dzisiaj.getSeconds();
        if (minute < 10) minute = "0" + minute;
        if (second < 10) second = "0" + second;

        document.getElementById("zegarek").innerHTML =
        day+"."+month+"."+year+"|"+hour+":"+minute+":"+second;

        setTimeout("refreshtime()",1000);
}
