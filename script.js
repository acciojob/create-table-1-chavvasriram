function insert_Row() {
    //Write your code here
            const table=document.getElementById("sampleTable")
            const tr=document.createElement("tr")
            const td1=document.createElement("td")
            td1.innerText=`NewCell1`
            const td2=document.createElement("td")
            td2.innerText=`NewCell2`
            tr.append(td1,td2)
            const firstchild=table.firstChild
            table.insertBefore(tr,firstchild)
            console.log("row added")
  
}
