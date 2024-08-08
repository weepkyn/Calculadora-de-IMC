const enviar = document.querySelector('button');
        const resultado = document.getElementById('resultado');

        enviar.addEventListener('click', function(e){
            e.preventDefault();  

            calculaImc();

            document.getElementById('peso').value = '';
            document.getElementById('altura').value = '';
        });

        function calculaImc(){ 
            const peso = document.getElementById('peso').value;  
            const altura = document.getElementById('altura').value;  

            if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
                alert("Por favor, insira valores válidos para peso e altura.");
                return;
            }

            const imc = peso / (altura * altura);
            console.log(imc);

            if(imc <= 17){
                resultado.innerHTML = `<p>Seu IMC: <b>${imc.toFixed(2)}</b> - <b>Muito abaixo do peso</b>.</p>`;
            } else if (imc <= 18.49){
                resultado.innerHTML = `<p>Seu IMC: <b>${imc.toFixed(2)}</b> - <b>Abaixo do peso</b>.</p>`;
            } else if(imc <= 24.99){
                resultado.innerHTML = `<p>Seu IMC: <b>${imc.toFixed(2)}</b> - <b>Peso normal</b>.</p>`;
            } else if(imc <= 29.99){
                resultado.innerHTML = `<p>Seu IMC: <b>${imc.toFixed(2)}</b> - <b>Acima do Peso</b>.</p>`;
            } else if(imc <= 34.99){
                resultado.innerHTML = `<p>Seu IMC: <b>${imc.toFixed(2)}</b> - <b>Obesidade grau I</b>.</p>`;
            } else{
                resultado.innerHTML = `<p>Seu IMC: <b>${imc.toFixed(2)}</b> - <b>Obesidade grau II</b>.</p>`;
            }
        }