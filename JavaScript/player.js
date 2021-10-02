
    function playPause(){
        var video = document.getElementById('filme');
        if (video.paused){
            video.play();
        } else{
            video.pause();
        }
        
       
        
    }
    
    function grande(){
        var video = document.getElementById('filme');
        video.style.width='900px';
        video.style.height='681px';
        video.style.borderRadius='20px'
        
    }
    
    function pequeno(){
        var video = document.getElementById('filme');
        video.style.width='420px';
        video.style.height='201px';
        video.style.borderRadius='20px'
    }
    
    function normal(){
        var video = document.getElementById('filme');
        video.style.width='500px';
        video.style.height='281px';
        video.style.borderRadius='20px'
    }

    function telaCheia(){      
        var video = document.getElementById('filme');
        video.requestFullscreen();  

    }  
    function mute(){
        var video = document.getElementById('filme');
		if( video.muted ){
			video.muted = false;
		}else{
			video.muted = true;
		}
	}

    function aumentar_volume(){
        var video = document.getElementById('filme');
        if( video.volume < 1)  video.volume += 0.1;
    }
 
    function diminuir_volume(){
        var video = document.getElementById('filme');
        if( video.volume > 0)  video.volume -= 0.1;
    }
       