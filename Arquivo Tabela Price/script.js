function clcr(){
    let vlr = parseFloat(document.getElementById('vlr').value);
    let txa = parseFloat(document.getElementById('txa').value);
    let prcl = parseFloat(document.getElementById('prcl').value);
    let jrs = vlr * txa;
    let iem = (vlr * Math.pow(txa+1, prcl) * txa)/(Math.pow(txa+1, prcl)-1);
    let idem = iem - jrs;
    let crp_tbl = document.querySelector('#tabela tbody');

    for (let i=1;i<=prcl;i++){
        let lnha =`
            <tr>
                <td>${i}</td>
                <td>${iem.toFixed(2)}</td>
                <td>${jrs.toFixed(2)}</td>
                <td>${idem.toFixed(2)}</td>
                <td>${vlr.toFixed(2)}</td>
            </tr>
            `;

        crp_tbl.innerHTML += lnha;
    }
}