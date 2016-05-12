 
//		var color = new Array('#fff', '#ff0', '#f00', '#000', '#00f', '#0ff');  
//		if(window.DeviceMotionEvent) {  
//		    var speed = 25;  
//		    var x = y = z = lastX = lastY = lastZ = 0;  
//		    window.addEventListener('devicemotion', function(){  
//		        var acceleration =event.accelerationIncludingGravity;  
//		        x = acceleration.x;  
//		        y = acceleration.y;  
//		        if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed) {  
//		            document.body.style.backgroundColor = color[Math.round(Math.random()*10)%6];  
//		        }  
//		        lastX = x;  
//		        lastY = y;  
//		    }, false);  
//		}  



/*摇一摇*/
if(navigator.userAgent.indexOf('iPhone')>-1)
{
    var SHAKE_THRESHOLD =2000;
}
else
{
    if(navigator.userAgent.indexOf('QQ')>-1)
    {
        var SHAKE_THRESHOLD =2000;
    }
    else
    {
        var SHAKE_THRESHOLD =2000;
    }
 
}
 
//根据手机反应的不同SHAKE_THRESHOLD值可以设置为不同的值
 
var last_update = 0;
var x, y, z, last_x=0, last_y=0, last_z=0,flag=false;
 
function deviceMotionHandler(eventData) {
 
    var acceleration =eventData.accelerationIncludingGravity;
    var curTime = new Date().getTime();
 
    if ((curTime - last_update)> 100) {
        var diffTime = parseInt(curTime -last_update);
        last_update = curTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
        var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
        var i=0;
        
        
        if(flag==false){
	        if (speed > SHAKE_THRESHOLD) {
	              alert('你摇动了爪机！！！');
	              flag=true;
//          alert(speed+"---"+SHAKE_THRESHOLD);
//          window.location.href="http://www.baidu.com";
	        }
        }else{
        	//
        }
        

        last_x = x;
        last_y = y;
        last_z = z;
    }
}
 
 
	if (window.DeviceMotionEvent) {
	            window.addEventListener('devicemotion',deviceMotionHandler, false);
	}



 