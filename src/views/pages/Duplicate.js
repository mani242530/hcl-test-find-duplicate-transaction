// --------------------------------
//  Define Duplicate
// --------------------------------
import * as data from '../../json/transaction';

let getActualTransactionList = async () => {

    try {
        const response = data.default
        return response
    } catch (err) {
        console.log('Error while fetching data', err)
    }
 }

let getDuplicateTransactionList = async () => {

   try {
       const response = data.default
       const lookup = response.reduce((a, e) => {
        a[e.id] = ++a[e.id] || 0;
        return a;
        }, {});
       
        const filterValue = response.filter(e => lookup[e.id])
       return filterValue
   } catch (err) {
       console.log('Error while fetching duplicates', err)
   }
}

let Duplicate = {
   render : async () => {

        let actual = await getActualTransactionList()
        let actualJson = JSON.stringify(actual, undefined, 2)


       let duplicate = await getDuplicateTransactionList()
       let duplicateJson = JSON.stringify(duplicate, undefined, 2)


       let view =  /*html*/`
           <section class="section">
               <h1> Duplicate Transaction </h1>
               
           </section>

           <div>
                <h2>Actual Data</h2>
                <pre>
                    ${ actualJson }
                </pre>
                
            </div>

           <div>
                <h2>Duplicate Data</h2>
                <pre>
                    ${ duplicateJson }
                </pre>
                
            </div>
       `
       return view
   }
   , after_render: async () => {
   }

}

export default Duplicate;