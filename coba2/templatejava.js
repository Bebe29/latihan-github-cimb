class Product {
    constructor(id, category, nama, harga, stock) {
        this.id = id
        this.category = category
        this.nama = nama
        this.harga = harga
        this.stock = stock
    }
}

let productData = [
    new Product('1583981075685', 'Cloth', 'H&M', 12000, 10),
    new Product('1583981090582', 'Fruit', 'Jeruk', 7000, 10),
    new Product('1583981081972', 'Electronic', 'Samsung', 30000, 10)
]

let arrCart = []
let arrCategory = []
let userPayment

const selector = (id) => {
    return document.getElementById(id)
}

const addCategory = (cat) => {
    let isInCategory
    let item = productData.find((val) => val.category == cat)
    if (item) {
        isInCategory = arrCategory.find((val) => val == item.category)
    } else {
        arrCategory.push(cat)
    }
}

const listCategory = (id) => {
    let option = ''
    if (id == 'filterCategory') {
        option += `<option selected value="">All</option>`
    }
    if (arrCategory.length > 0) {
        arrCategory.forEach(item => {
            option += `<option value="${item}">${item}</option>`
        })
    } else {
        productData.forEach(({ category }) => {
            arrCategory.push(category)
        })
        arrCategory.forEach(item => {
            option += `<option value="${item}">${item}</option>`
        })
    }
    selector(id).innerHTML = option
}
listCategory('dataList')
listCategory('filterCategory')

const renderData = (arr = productData, editIdx) => {
    let menu = ''
    arr.forEach(({ id, category, nama, harga, stock }, index) => {
        if (index !== editIdx) {
            menu += `
        <tr>
            <td>${id}</td>
            <td>${category}</td>
            <td>${nama}</td>
            <td>${harga}</td>
            <td>${stock}</td>
            <td><input type="button" value="Add" onclick="addToCart(${id})"></td>
            <td><input type="button" value="Delete" onclick="deleteData(${id})"></td>
            <td><input type="button" value="Edit" onclick="editData(${id})"></td>
        </tr>
        `
        } else {
            menu += `
        <tr>
            <td><input type="text" value="${id}" disabled></td>
            <td><input type="text" value="${category}" disabled></td>
            <td><input type="text" value="${nama}" id="editNama"></td>
            <td><input type="number" value="${harga}" id="editHarga"></td>
            <td><input type="number" value="${stock}" id="editStock"></td>
            <td><input type="button" value="Add" disabled onclick="addToCart(${id})"></td>
            <td><input type="button" value="Save" onclick="saveProduct(${id})"></td>
            <td><input type="button" value="Cancel" onclick="renderData()"></td>
        </tr>
        `
        }
    })
    selector("dataBody").innerHTML = menu
}
renderData()

const inputData = () => {
    let inputId = new Date().getTime()
    let inputNama = selector("inputNama").value
    let inputHarga = selector("inputHarga").value
    let inputCategory = selector('inputCategory').value
    let inputStock = parseInt(selector('inputStock').value)
    selector("notifField").innerHTML = ''

    if (inputNama && inputHarga && inputCategory && inputStock) {
        let newData = new Product(inputId, inputCategory, inputNama, inputHarga, inputStock)
        let item = productData.find((val) => val.category.toLowerCase() == inputCategory.toLowerCase())

        if (!item) {
            arrCategory.push(inputCategory)
        }
        productData.push(newData)
        alert('Data ditambahkan')
        renderData()
        listCategory('dataList')
        listCategory('filterCategory')
        selector("inputNama").value = ''
        selector("inputHarga").value = ''
        selector("inputCategory").value = ''
        selector('inputStock').value = ''
    } else {
        selector("notifField").innerHTML = 'Ada Field Kosong!'
    }
}

const filterData = () => {
    let filter = []

    let filterNama = selector('filterNama').value
    let filterMinHrg = selector('filterMinHrg').value
    let filterMaxHrg = selector('filterMaxHrg').value
    let filterCategory = selector('filterCategory').value

    productData.forEach((val) => {
        let { category, nama, harga } = val
        if (nama.toLowerCase().startsWith(filterNama.toLowerCase()) &&
            category.toLowerCase().startsWith(filterCategory.toLowerCase()) &&
            (Number(harga) >= Number(filterMinHrg) || filterMinHrg == '') &&
            (Number(harga) <= Number(filterMaxHrg) || filterMaxHrg == '')) {
            filter.push(val)
        }
    })
    renderData(filter)
}

const addToCart = (id) => {
    let item = productData.find((val) => val.id == id)
    let isInCart = arrCart.find((val) => val.id == item.id)
    let indexItem = productData.findIndex((val) => val.id == id)
    if (isInCart) {
        let idx = arrCart.findIndex((val) => val.id == isInCart.id)
        if (arrCart[idx].qty >= arrCart[idx].stock) {
            alert('Stock sudah habis')
        } else {
            arrCart[idx].qty++
            productData[indexItem].stock--
        }
    } else {
        let newCartItem = {
            ...item,
            qty: 1
        }
        productData[indexItem].stock--
        arrCart.push(newCartItem)
    }
    renderCart()
    renderData()
}

const renderCart = () => {
    let cart = ''
    arrCart.forEach(({ id, category, nama, harga, qty }) => {
        cart += `
        <tr>
            <td>${id}</td>
            <td>${category}</td>
            <td>${nama}</td>
            <td>${harga}</td>
            <td>${qty}</td>
            <td><input type="button" value="Delete" onclick="deleteCart(${id})"></td>
        </tr>
        `
    })
    selector("cartBody").innerHTML = cart
}

const deleteData = (deleteId) => {
    let item = productData.find((val) => val.id == deleteId)
    let deleteIdIndex = productData.findIndex((val) => val.id == item.id)
    let isInCart = arrCart.find((val) => val.id == item.id)

    if (isInCart) {
        deleteCart(deleteId)
        productData.splice(deleteIdIndex, 1)
    } else {
        productData.splice(deleteIdIndex, 1)
        alert('Data telah dihapus')
    }
    renderData()

    if (productData.length == 0) {
        selector("notifData").innerHTML = 'Data Kosong!'
    }
}

const deleteCart = (deleteId) => {
    let idx = arrCart.findIndex((val) => val.id == deleteId)
    let indexItem = productData.findIndex((val) => val.id == deleteId)
    productData[indexItem].stock += arrCart[idx].qty
    arrCart.splice(idx, 1)
    alert('Data telah dihapus')
    renderCart()
    renderData()
}

const editData = (id) => {
    let indexItem = productData.findIndex((val) => val.id == id)
    renderData(productData, indexItem)
}

const saveProduct = (id) => {
    let indexItem = productData.findIndex((val) => val.id == id)
    let editNama = selector("editNama").value
    let editHarga = selector("editHarga").value
    let editStock = parseInt(selector("editStock").value)
    productData[indexItem].nama = editNama
    productData[indexItem].harga = editHarga
    productData[indexItem].stock = editStock
    renderData(productData)
}

const renderPayment = () => {
    let totalCart = ''
    let subTotal = 0
    let pajak = 0
    let totalPrice = 0
    let time = new Date().getTime()
    arrCart.forEach(({ category, nama, harga, qty }) => {
        totalCart += `<p>${category} | ${nama} | Rp ${harga} X ${qty} = Rp ${harga * qty}</p>`
        subTotal += harga * qty
    })
    selector("paymentDetail").innerHTML = totalCart
    selector("paymentDetail").innerHTML += `
    <h4>Sub Total : Rp ${subTotal}<h4>
    `
    pajak = subTotal / 100
    selector("paymentDetail").innerHTML += `
    <h4>PPN : Rp ${pajak}</h4>
    `
    totalPrice = subTotal + pajak
    selector("paymentDetail").innerHTML += `
    <h4>Total : Rp ${totalPrice}</h4>
    `
    selector("paymentDetail").innerHTML += `
    <input type="number" value="${userPayment}" id="userPayment">
    <input type="button" value="Pay" onclick="userPay(${totalPrice})">`
}

const userPay = (totalBayar) => {
        let userInput = selector("userPayment").value
    if (userInput > totalBayar) {
        alert(`Kembalian anda Rp ${userInput - totalBayar}`)
        successPayment()
    } else if (userInput < totalBayar) {
        alert(`Maaf uang anda tidak cukup\nUang anda kurang Rp ${totalBayar - userInput}\nMohon input ulang uang untuk pembayaran`)
        selector("userPayment").value = ''
    } else if (userInput == totalBayar) {
        alert(`Terimakasih telah membayar dengan uang pas`)
        successPayment()
    }
}

const successPayment = () => {
    // arrCart.forEach(({ id, qty }) => {
    //     let indexItem = productData.findIndex((val) => val.id == id)
    //     productData[indexItem].stock -= qty
    // })
    // clearTimeout(time)
    selector("paymentDetail").innerHTML = ''
    arrCart = []
    renderCart()
    // renderData()
}