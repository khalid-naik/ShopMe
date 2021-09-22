var i=0;
var images=[];
var time=2000;
images[0]='laptop.jpg';
images[1]='laptop2.jpg';
images[2]='laptop3.jpeg';
images[3]='laptop4.jpg';
function changeimg()
{
    document.slide.src=images[i];
    if(i < images.length-1)
    {
        i++;
    }
    else
    {
        i=0;
    }
    setTimeout("changeimg()",time);
}

var j=0;
var images2=[];
images2[0]='mouse.jpg';
images2[1]='mouse1.jpg';
images2[2]='mouse2.jpg';
images2[3]='mouse3.jpg';


function changeimg2()
{
    document.slide2.src=images2[j];
    if(j < images2.length-1)
    {
        j++;
    }
    else
    {
        j=0;
    }
    setTimeout("changeimg2()",time);
}

var k=0;
var images3=[];
images3[0]='phone.jpg';
images3[1]='phone1.jpg';
images3[2]='phone2.jpg';
images3[3]='phone3.jpg';
function changeimg3()
{
    document.slide3.src=images3[k];
    if(k < images3.length-1)
    {
        k++;
    }
    else
    {
        k=0;
    }
    setTimeout("changeimg3()",time);
}

var l=0;
var images4=[];
images4[0]='dish1.jpg';
images4[1]='dish2.jpg';
images4[2]='dish3.jpg';
images4[3]='dish2.jpg';
function changeimg4()
{
    document.slide4.src=images4[k];
    if(l < images4.length-1)
    {
        l++;
    }
    else
    {
        l=0;
    }
    setTimeout("changeimg4()",time);
}

var m=0;
var images5=[];
images5[0]='microwave1.png';
images5[1]='microwave2.webp';
images5[2]='microwave3.png';
images5[3]='microwave2.webp';
function changeimg5()
{
    document.slide5.src=images5[k];
    if(m < images5.length-1)
    {
        m++;
    }
    else
    {
        m=0;
    }
    setTimeout("changeimg5()",time);
}


var n=0;
var images6=[];
images6[0]='washing1.jpg';
images6[1]='washing2.jpg';
images6[2]='washing3.png';
images6[3]='washing2.jpg';
function changeimg6()
{
    document.slide6.src=images6[k];
    if(n < images6.length-1)
    {
        n++;
    }
    else
    {
        n=0;
    }
    setTimeout("changeimg6()",time);
}




function start()
{
    changeimg();
    changeimg2();
    changeimg3();
    changeimg4();
    changeimg5();
    changeimg6();
}