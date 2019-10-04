module.exports = {
    response: function(message){
        if (message.toLowerCase().includes("cs")){
            return  "ℂ𝕊?";
        }
        if (message.toLowerCase().includes("garf")){
            return "https://www.youtube.com/watch?v=OGbhJjXl9Rk";
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
        else{
            return null;
        }
    }
};