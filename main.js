function start()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelready);
}
 function modelready()
 {
  classifier.classify(gotresults);   
 }
 function gotresults(error,results)
 {
if(error)
{
    console.error(error);
}
else{
    console.log(results);
    random_r=Math.floor(Math.random() * 255)+1;
    random_g=Math.floor(Math.random() * 255)+1;
    random_b =Math.floor(Math.random() * 255)+1;
    document.getElementById("result_label").innerHTML='I can Hear-'+results[0].label;
    document.getElementById("accurate").innerHTML='Accuracy-'+results[0].confidence.toFixed(2);
    img_1=document.getElementById("alien_1");
    img_2=document.getElementById("alien_2");
    img_3=document.getElementById("alien_3");
    img_4=document.getElementById("alien_4");
    if (results[0].label=="Clap") {
    img_1.src='aliens-01.gif';
    img_2.src='aliens-02.png';   
    img_3.src='aliens-03.png'; 
    img_4.src='aliens-04.png';     
    }
   else if (results[0].label=="Bell") {
        img_1.src='aliens-01.png';
        img_2.src='aliens-02.gif';   
        img_3.src='aliens-03.png'; 
        img_4.src='aliens-04.png';     
        }
       else if (results[0].label=="Snapping") {
            img_1.src='aliens-01.png';
            img_2.src='aliens-02.png';   
            img_3.src='aliens-03.gif'; 
            img_4.src='aliens-04.png';     
            }
           else{
                img_1.src='aliens-01.png';
                img_2.src='aliens-02.png';   
                img_3.src='aliens-03.png'; 
                img_4.src='aliens-04.gif';     
                }
}
 }