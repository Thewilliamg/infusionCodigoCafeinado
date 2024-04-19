import {example} from "./component/shopBillCamper.js"
let myBill = document.querySelector("#myBill")
let data =await getAllproductBill();
let row = ""
data.forEach(products=>{
    val.products.forEach(product=>{
        row += `
            <tr>
                <td>${product.description}</td>
                <td>${product.quantity}</td>
                <td>${product.price}</td>
                <td>${product.total}</td>
            </tr>
            `
    })
})
myBill.innerHTML = row
