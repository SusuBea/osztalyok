class Szemely{
    #szulNev; 
    constructor(nev, szulDatum, szuloElem){
        //beállítja az adattagokat
        //a konkrét osztálypéldányra mutat a this
        //osztálypéldány=objektum
        this.nev = nev;
        this.szulDatum = szulDatum;
        this.#szulNev = nev;
        this.setSzulNev(nev)
        /**HTML oldalon akarjuk megjeleníteni */
        szuloElem.append(
                    `<div class="szemely">
                    <h3>${this.nev}</h3>
                    <p>${this.kor()} éves</p>
                    </div>`)

        //rákattintok a személyekre, akkor írja ki a konzolra az adott személyt
        //készítek egy adattagot a HTML elemhez
        this.szemelyElem = $(".szemely:last-child")//így csak az utolsó HTML elem lesz
        //console.log(this.szemelyElem)
        //function esetén a this -> azt az elemet jeleníti meg, amelyik kiváltotta az eseményt
        //nyílfüggvény esetén a this -> az aktuális objektumot jelenti
        //azt a hatókört jelenti amiben van 
        
        this.szemelyElem.on("click", ()=>{
            console.log(this)
        })
    }

    /** privát ad*/ 
    /** itt a tagfüggvények előtt nem kell function*/ 
    getSzulNev(){
        return this.#szulNev
    }

    setSzulNev(ertek){
        /**ellenőrzés: nagybetűvel kezdődik, nem üres, legalább 3 betű */
        this.#szulNev=ertek;
    }

    //korszámítás
    kor(){
        const d = new Date();
        let year = d.getFullYear();
        return year-this.szulDatum;

        //let kor = year-this.szulDatum;
        //return kor;
    }
}

export default Szemely;