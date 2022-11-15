import './style.css';

let lista;
let mukodjlista =[];


document.addEventListener('DOMContentLoaded', ()=>{

    async function abcadatBetoltes() {
     
    
        let response = await fetch('/quotes.json');
        let eredmeny = await response.json();
        lista = eredmeny.quotes.sort((a,b)=>{return a.author>b.author? 1:-1});

        
    }

    



    function kiir(quotes) {
        let quoteLista = document.getElementById('elsolista');
        quoteLista.textContent = '';
        for (let p of quotes) {
            let li = document.createElement('li');            
            li.textContent = p.quote + ' '+p.author;
            quoteLista.appendChild(li);
        }
    }

    function thekiir(quotes) {
        let qlista = document.getElementById('masodiklista');
        let li = document.createElement(li);
        for (let e of quotes) {
            let the = 'the';
            let thee ='The';
            li.textContent = e.replace('the', the.bold);
            li.textContent = e.replace('The', thee.bold);
            qlista.appendChild(li);

        }


    }



    document.getElementById('osszesgomb').addEventListener('click', () => {
        abcadatBetoltes();
        kiir(lista);
    });


    document.getElementById('thegomb').addEventListener('click', ()=>{

           abcadatBetoltes();

            for(let e of lista)
            {
                mukodjlista.push(e.quote);
            }
            thekiir(mukodjlista);

    });


    document.getElementById('hosszgomb').addEventListener('click', () => {
        abcadatBetoltes();
        let segedlista =[];
        for (let e of lista)
        {
            segedlista.push(e.quote.length);

        }
        let alma = segedlista.join(', ');
        let p = document.getElementById('hossz');
        p.appendChild(alma);

    });






    });




    








