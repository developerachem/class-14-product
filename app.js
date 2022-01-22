const addButton = document.querySelector('#addButton');
const addFormPage = document.querySelector('#addFormPage');
const productAdd = document.querySelector('#productAdd');

addButton.addEventListener('click', function () {

    setTimeout(() => {
        addButton.classList.add('d-none')
        addFormPage.classList.remove('d-none')
    }, 500)
})
productAdd.addEventListener('submit', function (e) {
    e.preventDefault();


    let pName = this.querySelector('input[name="name"]').value;
    let pPrice = this.querySelector('input[name="price"]').value;
    let pRPrice = this.querySelector('input[name="rprice"]').value;
    let pLink = this.querySelector('input[name="link"]').value;


    let localAllData;

    if (localAllData = localDataDown('product')) {
        localAllData = localDataDown('product')
    } else {
        localAllData = []
    }

    localAllData.unshift({
        name: pName,
        price: pPrice,
        rPrice: pRPrice,
        img: pLink
    })

    locaDatalUP('product', localAllData)

    this.querySelector('input[name="name"]').value = "";
    this.querySelector('input[name="price"]').value = "";
    this.querySelector('input[name="rprice"]').value = "";
    this.querySelector('input[name="link"]').value = "";

    productList()
    addButton.classList.remove('d-none')
    addFormPage.classList.add('d-none')
})





productList()

function productList() {

    let productLS = localDataDown('product')
    let dataMap = "";
    productLS.map((pDatals) => {
        dataMap += `
            <div class="col-lg-3 mb-4">
                <div class="card">
                    <div class="card-body">
                        <img class="card-img" src="${pDatals.img}" alt="">
                        <h4 class="mt-3 text-center">${pDatals.name}</h4>
                        <span><span class="salr-price">${pDatals.rPrice === "" ? "" : pDatals.rPrice + "৳" } </span>${pDatals.price === "" ? "" : pDatals.price + "৳" }</span>
                    </div>
                    <div class="card-footer text-center">
                        <div class="row align-items-center">
                            <div class="col-lg-2">
                                <a href="#"><i class="far fa-heart"></i><a>
                            </div>
                            <div class="col-lg-8">
                                <strong><a href="#" class="btn btn-secondary">ADD TO CART</a></strong>
                            </div>
                            <div class="col-lg-2">
                                <a href="#"><i class="fas fa-random"></i><a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
    document.querySelector('#product').innerHTML = dataMap;
}
