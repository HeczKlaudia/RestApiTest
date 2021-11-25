$(function () {
  const myAjax = new MyAjax();
  const konyvek = [];
  const szuloElem = $(".megjelenit");
  let apiVegpont = "http://localhost:3000/konyvek";
  // let szuro = "?tipus=regény";

  /* Rendezés gombra kattintva */
  $("#rendezes").on("click", () => {
    let apiVegpont = "http://localhost:3000/konyvek";
    let rendezes = "?_sort=ar&_order=desc";
    apiVegpont += rendezes;
    // ajax hívás
    myAjax.getAdat(apiVegpont, konyvek, kiir);
    console.log(apiVegpont);
  });

  /* Új adat gombra kattintva */
  $("#ujadat").on("click", () => {
    /*** Adatok beillesztése ***/
    let ujAdat = {
      szerzo: $("#szerzo").val(),
      cim: $("#cim").val(),
      ar: $("#ar").val(),
      tipus: $("#tipus").val(),
    };
    myAjax.postAdat(apiVegpont, ujAdat);
  });

  /* Keresőmezőbe írva */
  $("#kereses").on("keyup", () => {
    let apiVegpont = "http://localhost:3000/konyvek";
    apiVegpont += "?q=" + $("#kereses").val();
    myAjax.getAdat(apiVegpont, konyvek, kiir);
  });

  /* Töröl gombra kattintva */
  $("#torol").on("click", () => {
    myAjax.deleteAdat(apiVegpont, 1);
  });

  /* Módosít gombra kattintva */
  $("#modosit").on("click", () => {
    /*** Adatok beillesztése ***/
    let ujAdat = {
      id: "2",
      szerzo: "Lackfii János",
      cim: "Apám kakasaa",
      ar: 200,
      tipus: "vers",
    };
    myAjax.putAdat(apiVegpont, ujAdat, ujAdat.id);
  });

  myAjax.getAdat(apiVegpont, konyvek, kiir);

  function kiir(tomb) {
    let sablon = "";

    tomb.forEach((elem) => {
      sablon += `<div class='konyvek'>
                <h3>${elem.szerzo}</h3>
                <h4 class="cim">${elem.cim}</h4>
                <span class="ar">${elem.ar}</span>
                <p>${elem.tipus}</p>
                </div>`;
      for (const konyv in elem) {
        $("#kategoria").append(
          "<option value='konyvek' >" + elem.id + "</option>"
        );
      }
    });

    szuloElem.html(sablon);
  }
});
