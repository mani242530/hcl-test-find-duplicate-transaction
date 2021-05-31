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
            <main class="flex-shrink-0">
                <div class="container">
                    <h1 class="mt-5">Duplicate Transaction</h1>
                    <p class="lead">
                        <h3>Actual Data</h3>
                        <pre>
                            ${ actualJson }
                        </pre>                
                    </p>

                    <p class="lead">
                        <h3>Duplicate Data</h3>
                        <pre>
                            ${ duplicateJson }
                        </pre>                            
                    </p>
                </div>
            </main>
       `
       return view
   }
   , after_render: async () => {
   }

}

export default Duplicate;