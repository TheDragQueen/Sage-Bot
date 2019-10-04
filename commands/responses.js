module.exports = {
    response: function(message){
        if (message.toLowerCase().includes("cs")){
            return  "ℂ𝕊?";
        }
        else if (message.toLowerCase().includes("garf")){
            var randomNumber = Math.random();
            if (((Math.ceil(randomNumber*10)) % 2) == 1){
                return "https://www.youtube.com/watch?v=OGbhJjXl9Rk";
            }
            else{
                return "https://www.youtube.com/watch?v=agPj0S4weDo";
            }
        }
        else if (message.toLowerCase().includes("trump")){
            return  "Orange Man Bad";
        }
        else if (message == "!gibs"){
            return "me my chicken tendies";
    
        }
        else if (message == "!gibs tendies"){
            return "I sharted and farted everywhere";
            
        }
        else if (message == "!gibs milkies"){
            return "m-mommy";
            
        }
        else if (message == "status"){
            return (((Math.ceil(Math.random()*10) % 2)) == 1);
        }
        else{
            return null;
        }
    }
};