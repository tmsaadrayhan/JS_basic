var speech= "I am a hardworking person. I work hard."
var word= 0;
for(i=0; i<speech.length-1;i++) {
    if(i==0) {
        if(("a"<=speech[i] && speech[i]<="z") || ("A"<=speech[i] && speech[i]<="Z")){
            word= 1;
        }
    }
    if(speech[i]==" " && (("a"<=speech[i+1] && speech[i+1]<="z") || ("A"<=speech[i+1] && speech[i+1]<="Z"))) {
        word++;
    }
}
console.log(word);