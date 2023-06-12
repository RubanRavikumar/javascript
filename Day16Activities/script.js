let timer=10;
        let time = document.getElementById('display');
        setTimeout(() => {
            time.innerHTML = timer--;
            setTimeout(() =>{
                time.innerHTML = timer--;
                setTimeout(() =>{
                    time.innerHTML = timer--;
                    setTimeout(() =>{
                        time.innerHTML = timer--;
                        setTimeout(() =>{
                            time.innerHTML = timer--;
                            setTimeout(() =>{
                                time.innerHTML = timer--;
                                setTimeout(() =>{
                                    time.innerHTML = timer--;
                                    setTimeout(() =>{
                                        time.innerHTML = timer--;
                                        setTimeout(() =>{
                                            time.innerHTML = timer--;
                                            setTimeout(() =>{
                                                time.innerHTML = timer--;
                                                setTimeout(() =>{
                                                    time.innerHTML = "Happy New Year!"
                                                },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)     
                },1000)
            },1000)
        }, 1000); 