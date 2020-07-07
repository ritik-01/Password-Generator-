function getPassword(){
    var all = "";
    var ele = document.getElementsByName('type');       
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                type = ele[i].value;
            }
            switch (type) {
                case 'osl': all = 'abcdefghijklmnopqrstuvwxyz';
                    break;
                case 'on': all = '1234567890';
                    break;
                case 'ol': all = 'qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM';
                    break;
                case 'csl': all = '1234567890qwertyuioplkjhgfdsazxcvbnmMNBVCXZASDFGHJKLPOIUYTREWQ!@#$%&*|?-+';
                    break;
            }
    var passwordLength = parseInt(document.getElementsByClassName('passlen')[0].value);
    var password = "";
    if(passwordLength<2){
        password = "Jyada Chant Na Bano Beta!!"
    }
    else{
        for (var i=0; i<passwordLength;i++){
            var randomNumber = Math.floor(Math.random()*all.length);
            password += all.substring(randomNumber,randomNumber+1);
        }
        var button = document.getElementById('btn');
        button.innerHTML = "Re-Generate Password"
    }
    document.getElementById('password').nextElementSibling.value = password;
}