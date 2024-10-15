function program(){
document.getElementById("pro").style.color="red";
document.getElementById("homes").style.color="white";
document.getElementById("contacts").style.color="white";
document.getElementById("plans").style.color="white";
document.getElementById("blogs").style.color="white";

}
function contact(){
    document.getElementById("contacts").style.color="red";
    document.getElementById("homes").style.color="white";
    document.getElementById("pro").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("blogs").style.color="white";

    }
    function plan(){
        document.getElementById("plans").style.color="red";
        document.getElementById("homes").style.color="white";
        document.getElementById("pro").style.color="white";
        document.getElementById("contacts").style.color="white";
        document.getElementById("blogs").style.color="white";

        }
        function home(){
            document.getElementById("homes").style.color="red";
            document.getElementById("pro").style.color="white";
            document.getElementById("contacts").style.color="white";
            document.getElementById("plans").style.color="white";
            document.getElementById("blogs").style.color="white";



            }
            function blog(){
                document.getElementById("homes").style.color="white";
                document.getElementById("pro").style.color="white";
                document.getElementById("contacts").style.color="white";
                document.getElementById("plans").style.color="white";
                document.getElementById("blogs").style.color="red";

    
    
                }


            function submit(){
                let name = document.getElementById("name") ;
                let number = document.getElementById("number") ;

                if(name.value == ""){
                    alert("please Enter Name");
                }else if(number.value == ""){
                    alert("please Enter Number");
                    
                }
                else{
                    alert("Thanks for Join : "+name.value)
                }
            }